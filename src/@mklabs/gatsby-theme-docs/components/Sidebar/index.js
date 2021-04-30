import React from 'react';
import { useState } from "react"

import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { useSidebar } from '../../hooks/useSidebar';

import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from './styles';
import { isExternalUrl } from '@mklabs/gatsby-theme-docs/src/util/url';
import ExternalLink from '@mklabs/gatsby-theme-docs/src/components/Sidebar/ExternalLink';
import InternalLink from '@mklabs/gatsby-theme-docs/src/components/Sidebar/InternalLink';
import Logo from '../Logo';
import { ArrowIosDownward, ArrowIosForward } from '@emotion-icons/evaicons-solid'
import { css } from '@emotion/react';

const isBrowser = typeof window !== "undefined"

function ListWithSubItems({ children, text, collapsed }) {
  const pathname = isBrowser ? window.location.pathname.slice(1) : ""
  const isApi = /^api/.test(pathname)

  const [isCollapsed, setIsCollapsed] = useState(isApi ? false : collapsed)
  const [title, setTitle] = useState("Click to expand")


  const onClick = () => {
    setIsCollapsed(!isCollapsed)
    setTitle(!isCollapsed ? "Click to expand" : "Click to reduce")
  }

  if (collapsed) {
    return (
      <>
        <Heading onClick={onClick} css={css`cursor: pointer`} title={title}>
          {/* <a onClick={onClick}> */}
            {text} <ArrowIosForward css={css`vertical-align: sub`}size={18}/>
          {/* </a> */}
        </Heading>

        { !isCollapsed ? <SubItem>{children}</SubItem> : "" }
      </>
    );
  }

  return (
    <>
      <Heading>{text}</Heading>
      <SubItem>{children}</SubItem>
    </>
  );
}

export default function Sidebar({ isMenuOpen }) {
  const {
    site: {
      siteMetadata: { basePath },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          basePath
        }
      }
    }
  `);

  const data = useSidebar();

  function renderLink(link, label) {
    return isExternalUrl(link) ? (
      <ExternalLink link={link} label={label} />
    ) : (
      <InternalLink link={link} label={label} />
    );
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to={basePath} aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          {data.map(({ node: { label, link, items, id, collapsed} }) => {
            if (Array.isArray(items)) {
              const subitems = items.map((item) => (
                <Item key={item.link}>{renderLink(item.link, item.label)}</Item>
              ));

              return (
                <ListWithSubItems key={id} text={label} collapsed={collapsed}>
                  {subitems}
                </ListWithSubItems>
              );
            }

            return <Item key={id}>{renderLink(link, label)}</Item>;
          })}
        </List>
      </nav>
    </Container>
  );
}

ListWithSubItems.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

Sidebar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
