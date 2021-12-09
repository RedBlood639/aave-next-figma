import React from 'react'

import { CgClose } from 'react-icons/cg'
import styles from './modal.module.css'

const Modal = ({ children, title, onClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modalheader}>
                    <div className={styles.bignormal}>{title}</div>
                    <CgClose size={22} color="#87d4ff" onClick={onClick} cursor="pointer" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
