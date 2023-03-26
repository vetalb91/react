import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

interface IModal {
    children: React.ReactNode;
    onClose?: () => void
}

export const Modal = ({
                   children,
                   onClose = () => {} }:IModal) => {
    const modalRoot = document.getElementById('react-modals') as HTMLElement;

    const pointRef = React.useRef(null);

    React.useEffect(() => {

        const handlerEsc = (evt: KeyboardEvent ) => {
            if (evt.key === 'Escape') {
                onClose();
            }

        };

        document.addEventListener("keydown", handlerEsc);

        return () => {

            document.removeEventListener("keydown", handlerEsc);

        };
    }, [onClose]);

    return ReactDOM.createPortal(
                  <div>
                    <div className={styles.modal}>
                         <div className={`${styles["modal-close"]}`}>
                            <CloseIcon type="primary" onClick={() => onClose()}/>
                        </div>
                        {children}
                    </div>
                        <ModalOverlay onClose={onClose} forwardRef={pointRef}/>
                 </div>,
                   modalRoot
                                );
}


