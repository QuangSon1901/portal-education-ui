import React from 'react';

const Card = ({ className, style, children }) => {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    );
};

export const CardHeader = ({ className, style, children }) => {
    return (
        <div className={`card__header ${className}`} style={style}>
            {children}
        </div>
    );
};

export const CardContent = ({ className, style, children }) => {
    return (
        <div className={`card__content ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Card;
