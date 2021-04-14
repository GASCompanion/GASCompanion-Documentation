import { css } from '@emotion/react';
import React from 'react';

// Path to the logo file on your project
// import rocketseatLogo from 'assets/logo.png';

const Logo = () => (
    <div>
        <h1 css={css`font-size: 24px; margin-bottom: 0;`}>
          GAS Companion <span css={css` font-size:18px; color: #ACA599`}>Documentation</span>

          {/* <em>Documentation</em> */}
        </h1>
        {/* <h3 css={css`margin-top: 8px;`}>Documentation</h3> */}
    </div>
);

export default Logo;