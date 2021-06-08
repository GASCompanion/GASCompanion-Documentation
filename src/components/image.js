import React from "react"
import Img from "gatsby-image"
import { css } from '@emotion/react';

const Image = ({ fixed }) => (
    <div css={css`text-align: center; padding: 16px; 0`}>
        <Img fixed={fixed} />
    </div>
)

export default Image