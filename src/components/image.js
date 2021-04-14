import React from "react"
import Img from "gatsby-image"
import { css } from '@emotion/react';

export default ({ fixed }) => (
    <div css={css`text-align: center; padding: 16px; 0`}>
        <Img fixed={fixed} />
    </div>
)