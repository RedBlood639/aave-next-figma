import React from 'react'
import Image from 'next/image'

import { CgClose } from 'react-icons/cg'

import SmallDollar from '../../assets/smallDollar.png'

import styles from './modal.module.css'

const Modal = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.modalheader}>
                    <div className={styles.bignormal}>Lend on Yearn</div>
                    <CgClose size={22} color="#87d4ff" onClick={onClick} />
                </div>
                <div className={styles.modalbody}>
                    <div className={styles.normal}>
                        Lend USDC and receive yvUSDC
                    </div>
                    <div className={styles.sell}>
                        <div className={styles.label}>
                            <div className={styles.normal}>Sell</div>
                            <div className={styles.group}>
                                <div className={styles.grey}>30 USDC</div>
                                <div className={styles.max}><b>Max</b></div>
                            </div>
                        </div>
                        <div className={styles.inputdiv}>
                            <input type="text" className={styles.input} />
                            <div className={styles.mixcolor}>
                                <Image src={SmallDollar} alt="SmallDollor" width={19} height={19} />
                                <div className={styles.normal}>aDAI</div>
                            </div>
                        </div>
                        <div className={styles.grey}>$1.00</div>
                    </div>
                    <div className={styles.btngroup}>
                        <div className={styles.btn}>Lend</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
