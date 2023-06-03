import { createPortal } from "react-dom";
import styles from "./modal.module.css";
import { ModalOverlay } from "../modalOverlay/modalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalType } from "../../types/commonTypes";

export const Modal = ({
                          children,
                          isOpenModal = true,
                          closeModal,
                      }: ModalType) => {
    const modalRoot: HTMLElement | DocumentFragment | null =
        document.getElementById("modal");

    return isOpenModal
        ? createPortal(
            <>
                <div className={styles.modal_position}>
                    <div className={styles.close_icon}>
                        <CloseIcon type="primary" onClick={() => closeModal()} />
                    </div>
                    {children}
                </div>
                <ModalOverlay closeModal={closeModal}></ModalOverlay>
            </>,
            modalRoot as HTMLElement
        )
        : null;
};