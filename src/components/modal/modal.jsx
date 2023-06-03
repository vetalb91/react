import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

function Modal({ children, onClose }) {
    const close = useCallback((e) => {
        ((e.key === "Escape") || e.type === "click") && onClose();
    }, [onClose]);

    useEffect(() => {
        document.addEventListener("keydown", close);

        return () => {
            document.removeEventListener("keydown", close);
        };
    }, [close]);

    return ReactDOM.createPortal(
        <div className={styles.modalBackground} onClick={close}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeIcon}>
                    <CloseIcon type="primary" onClick={close} />
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
}

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;