import React from 'react';

import styles from './ModalOverlay.module.css';

interface IModalOverlay {
    onClose: () => void,
        forwardRef: React.RefObject<HTMLDivElement>
}

export const ModalOverlay = ({
    onClose,
    forwardRef
}:IModalOverlay): JSX.Element => {
    return (
        <div className={`${styles["modal-overlay"]}`} onClick={onClose} ref={forwardRef}></div>
    )
}
