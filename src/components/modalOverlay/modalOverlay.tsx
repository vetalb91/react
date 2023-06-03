import styles from "./modalOverlay.module.css";
import { useEffect } from "react";
import { CloseModalType } from "../../types/commonTypes";

export const ModalOverlay: React.FC<CloseModalType> = ({ closeModal }) => {
    const keyResponce = (e: KeyboardEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        if (e.key === "Escape") {
            closeModal();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", keyResponce);

        return () => {
            document.removeEventListener("keydown", keyResponce);
        };
    }, []);

    return (
        <div className={styles.modal_overlay} onClick={() => closeModal()}></div>
    );
};