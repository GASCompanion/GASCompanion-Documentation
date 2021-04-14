import { css } from '@emotion/react';
import React from "react"

const TableParamsRow = ({ item, key }) => {
    const name = item.children.find(child => child.name === "name").content
    const type = item.children.find(child => child.name === "type").content
    const desc = item.children.find(child => child.name === "description").content

    return (
        <tr key={key}>
            <td>
                <p css={css`color: #ACA599; margin-bottom: 0`}>{name}</p>
                <p css={css`font-size: 14px; margin-bottom: 0; font-style: italic`}>{type}</p>
            </td>
            <td css={css`vertical-align: baseline`}>
                {desc}
            </td>
        </tr>
    )
}

export default TableParamsRow