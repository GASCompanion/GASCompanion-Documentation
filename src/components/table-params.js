import React from "react"
import TableParamsRow from "./table-params-row"

const TableParams = ({ node, type }) => {
    // Filter out unwanted inputs (such as Exec and Target)
    const findParams = (node) => {
        const inputs = node.xml.find(item => item.name === type.toLowerCase())
        if (!inputs) {
            return;
        }
        let { xmlChildren } = inputs;

        return xmlChildren.filter(xmlChild => {
            const isExec = xmlChild.children.find(child => child.name === "type" && child.content === "Exec");
            const isTarget = xmlChild.children.find(child => child.name === "name" && child.content === "Target");
            return !isExec && !isTarget;
        })
    }

    const params = findParams(node)
    if (!params || !params.length) {
        return null;
    }

    return (
        <>
            <h3>{type}</h3>
            <table>
                <tbody>
                    {params.map((item, i) => (
                        <TableParamsRow item={item} key={i} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableParams