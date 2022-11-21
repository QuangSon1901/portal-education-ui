import React from 'react';

const Table = ({ className, children, ...props }) => {
    return (
        <table className={`table ${className}`} {...props}>
            {children}
        </table>
    );
};

export const THead = ({ className, children, ...props }) => {
    return (
        <thead className={`thead ${className}`} {...props}>
            {children}
        </thead>
    );
};

export const TBody = ({ className, children, ...props }) => {
    return (
        <tbody className={`tbody ${className}`} {...props}>
            {children}
        </tbody>
    );
};

export const Tr = ({ className, onClick, children, ...props }) => {
    return (
        <tr className={`tr ${className}`} onClick={onClick} {...props}>
            {children}
        </tr>
    );
};

export const TH = ({ className, children, ...props }) => {
    return (
        <th className={`th ${className}`} {...props}>
            {children}
        </th>
    );
};

export const TD = ({ className, children, ...props }) => {
    return (
        <td className={`td ${className}`} {...props}>
            {children}
        </td>
    );
};

export default Table;
