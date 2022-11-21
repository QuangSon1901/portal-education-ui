const Modal = ({ className, style, children }) => {
    return (
        <div className={`modal ${className}`}>
            <div className={`modal__card ${className}`} style={style}>
                {children}
            </div>
        </div>
    );
};

export const ModalHeader = ({ className, style, children, close }) => {
    return (
        <div className={`modal__card__header ${className}`} style={style}>
            {children}
            <div className="modal__card__header__close" onClick={close}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    );
};

export const ModalContent = ({ className, style, children }) => {
    return (
        <div className={`modal__card__content ${className}`} style={style}>
            {children}
        </div>
    );
};
export default Modal;
