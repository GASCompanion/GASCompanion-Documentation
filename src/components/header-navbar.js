import React from "react"
import { useState } from "react"
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GoChevronDown } from 'react-icons/go';
import { IoIosWarning } from 'react-icons/io';
import theme from "../@mklabs/gatsby-theme-docs/styles/theme"


const Container = styled.header`
    background-color: ${theme.colors.header};
    padding: 1rem 2rem; 
    font-size: 1.25rem;
    color: ${theme.colors.title};
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;

    a {
        color: ${theme.colors.title};
        transition: all 0.3s ease-in-out 0s;
    }

    a:hover {
        color: #aca599;
        text-decoration: none;
    }

    .header-links {
        display: flex;

        nav {
            margin-left: 1em;
            padding-left: 1em;
            
            a {
                margin-left: 1em;
                padding-left: 1em;
                border-left: 1px solid #fff;
            }

            a:first-of-type {
                border-left: none;
            }
        }
    }
            
    button {
        border: none;
        background: none;
        cursor: pointer;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

        display: flex;
        align-items: center;
        color: ${theme.colors.text};

        display: inline-flex;
        font-size: 0.875rem;
        min-height: 2rem;
        min-width: 2rem;
        padding: 0.25rem 0.75rem;

        svg {
            margin-left: 4px;
        }
    }

    .version-dropdown-container {
        position: relative;
    }

    .v3-dropdown {
        display: none;
        left: 50%;
        padding-top: 0.75rem;
        position: absolute;
        top: 100%;
        visibility: visible;
        z-index: 10;
        transform: translateX(calc(-50% + -13.8594px));
        width: 10rem;

        &.v3-dropdown-opened {
            display: grid;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            background: ${theme.colors.components.dropdown.background};
            border-radius: 8px;
            box-shadow: 0px 4px 16px rgba(46,41,51,0.08),0px 8px 24px rgba(71,63,79,0.16);
            width: 32.5rem;

            li {
                padding: 0 0.75rem;

                a {
                    padding: 0.75rem;
                    padding-left: 3.5rem;
                    color: ${theme.colors.text};

                    display: flex;
                    position: relative;
                    flex-direction: column;
                    font-size: 0.875rem;
                    align-items: flex-start;
                    padding: 0.75rem;
                    padding-left: 3.5rem;
                    transition: background 500ms cubic-bezier(0.4, 0,0. 2,1);
                    transition: color 500ms cubic-bezier(0.4, 0,0. 2,1);
                    transform: none;
                    display: block;


                    :hover, :focus {
                        color: ${theme.colors.white};

                        background: ${theme.colors.link};
                        border-radius: 4px;
                    }
        
                    :after {
                        content: "›";
                        color: rgba(35, 33, 41, 0.4);
                        margin-left: 0.25rem;
                    }
                }
            }
            
            li:first-of-type {
                padding-top: 0.75rem;
            }

            
            li:last-child {
                padding-bottom: 0.75rem;
            }
        }
    }

    .version-warning {
        margin-left: 2rem;

        .warning-icon {
            height: 1rem;
            margin: 0 0.25rem;
            vertical-align: sub;
            width: 1rem;
        }

        p {
            padding-right: 1.25rem;
            margin: 0;

            a {
                padding-left: 8px;
            }
        }
    }
`;

const HeaderNavbar = ({ slug = "" }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteAuthor
                    }
                }
            }
        `,
    );

    const { siteAuthor } = site.siteMetadata;

    const [isDropdownOpened, setIsDropdownOpened] = useState(false)

    const getDocumentationHomeURL = () => {
        if (slug.startsWith(`/v2`)) {
            return `/v2/install`;
        }

        if (slug.startsWith(`/v3`)) {
            return `/v3/install`;
        }

        return `https://gascompanion.github.io`;
    };

    const getAPIHomeURL = () => {
        if (slug.startsWith(`/v2`)) {
            return `/v2/api`;
        }

        if (slug.startsWith(`/v3`)) {
            return `/v3/api`;
        }

        if (slug.startsWith(`/v5`)) {
            return `https://gascompanion.github.io/v5/api/`;
        }


        return `https://gascompanion.github.io/v5/api/`;
    };

    const getButtonLabel = () => {
        if (slug.startsWith(`/v2`)) {
            return `v2`;
        }

        if (slug.startsWith(`/v3`)) {
            return `v3`;
        }

        if (slug.startsWith(`/v5`)) {
            return `v5`;
        }

        return `v5`;
    };

    const isV2 = slug.startsWith(`/v2`);
    const isAPI = slug.startsWith(`/v2/api`) || slug.startsWith(`/v3/api`) || slug.startsWith(`/v5/api`) || slug.startsWith(`/api`);

    const handleMouseOver = (isOn) => {
        setIsDropdownOpened(isOn);
    }

    const v2Link = isAPI ? `/v2/api` : `/v2/install`;
    const v3Link = isAPI ? `/v3/api` : `/v3/install`;
    const v5Link = isAPI ? `/v5/api` : `https://gascompanion.github.io`;

    return (
        <Container className="docs-header">
            <div className="header-links">
                <a href={siteAuthor} aria-label="Go to home page">
                    MK.
                </a>
                
                <nav>
                    <Link to={getDocumentationHomeURL()}>Documentation</Link>
                    <Link to={getAPIHomeURL()}>API</Link>                        
                </nav>
                
                {isV2 ? (
                    <div className="version-warning">
                        <p>
                            <IoIosWarning size={20} aria-hidden="true" className="warning-icon" />
                            These are the docs for v2, which is 4.26 only and getting deprecated for 4.27 / 5.0.
                            <Link to="/">View the v3 docs.</Link>
                        </p>
                    </div>
                ) : ''}
 
            </div>


            <div className="version-dropdown-container"
                onMouseOver={() => handleMouseOver(true) } 
                onMouseOut={() => handleMouseOver(false) } 
                onFocus={() => handleMouseOver(true)} 
                onBlur={() => handleMouseOver(false)}
                tabIndex={0}
                role="button"
            >
                <button aria-label="Open Versions Dropdown" type="button">
                    {getButtonLabel()}
                    <GoChevronDown size={20} aria-hidden="true" />
                </button>
                <div className={`v3-dropdown${isDropdownOpened ? ` v3-dropdown-opened` : ``}`}>
                    <ul>
                        <li>
                            <Link to={v5Link}>v5</Link>
                        </li>
                        <li>
                            <Link to={v3Link}>v3</Link>
                        </li>
                        <li>
                            <Link to={v2Link}>v2</Link>
                        </li>
                    </ul>
                </div>
            </div>            
        </Container>
    );
}

export default HeaderNavbar