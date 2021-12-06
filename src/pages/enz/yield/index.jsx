import React from 'react'
import Image from 'next/image'

import Modal from '../../../components/Modal/index'

import { BiArrowBack } from 'react-icons/bi'
import { CgSoftwareUpload, CgSoftwareDownload } from 'react-icons/cg'
import { RiQuestionLine } from 'react-icons/ri'

import BigGroup1 from '../../../assets/biggroup1.png'

import { data } from '../../../components/data/yield'
import styles from './yield.module.css'

const Yield = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.yield}>
            {
                open && (
                    <Modal onClick={handleClose} />
                )
            }
            <div className={styles.container}>
                <div className={styles.usdc}>
                    <BiArrowBack size={22} color="#87d4ff" />
                    <div className={styles.normal}>USDC</div>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={`${styles.name} ${styles.smallnormal}`}>NAME</div>
                        <div className={`${styles.lending} ${styles.smallnormal}`}>CURRENTLY<br />LENDING</div>
                        <div className={`${styles.base} ${styles.smallnormal}`}>30D<br />BASE<br />APY</div>
                        <div className={`${styles.total} ${styles.smallnormal}`}>CURRENT TOTAL APY</div>
                        <div className={`${styles.empty}`}></div>
                    </div>
                    <div className={styles.tbody}>
                        {
                            data.map((item, index) => (
                                <div className={styles.tr} key={index}>
                                    <div className={`${styles.tname}`}>
                                        <Image src={BigGroup1} alt="BigGroup1" width={33} height={33} />
                                        <div className={styles.mix}>
                                            <div className={styles.bignormal}>{item.bignormal}</div>
                                            <div className={styles.grey}>{item.grey}</div>
                                        </div>
                                    </div>
                                    <div className={`${styles.tlending} ${styles.smallnormal}`}>-</div>
                                    <div className={`${styles.tbase} ${styles.smallnormal}`}>{item.tbase}</div>
                                    <div className={`${styles.ttotal}`}>
                                        <div className={styles.bignormal}>11.28% </div>
                                        <div className={`${styles.linemix} ${styles[`${item.temp}`]}`}>
                                            <div className={styles.grey}>USDC yVault Version: 0.3.0</div>
                                            <RiQuestionLine size={21} color="#87D4FF" />
                                        </div>
                                    </div>
                                    <div className={`${styles.tempty}`}>
                                        <div className={styles.opbtn}>
                                            <CgSoftwareUpload size={24} />
                                            <div>Withdraw</div>
                                        </div>
                                        <div className={styles.btn}>
                                            <CgSoftwareDownload size={24} />
                                            <div onClick={() => handleClickOpen()}>Deposit</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.hiddentbl}>
                    {
                        data.map((item, index) => (
                            <div className={styles.htr} key={index}>
                                <div className={styles.hiddentr}>
                                    <div className={`${styles.left} ${styles.normal}`}>NAME:</div>
                                    <div className={`${styles.right} ${styles.normal}`}>
                                        <div className={`${styles.hname}`}>
                                            <Image src={BigGroup1} alt="BigGroup1" width={33} height={33} />
                                            <div className={styles.mix}>
                                                <div className={styles.bignormal}>{item.bignormal}</div>
                                                <div className={styles.grey}>{item.grey}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.hiddentr}>
                                    <div className={`${styles.left} ${styles.normal}`}>CURRENTLY LENDING:</div>
                                    <div className={`${styles.right} ${styles.normal}`}>-</div>
                                </div>
                                <div className={styles.hiddentr} >
                                    <div className={`${styles.left} ${styles.normal}`}>30D BASE APY:</div>
                                    <div className={`${styles.right} ${styles.normal}`}>0.00%</div>
                                </div>
                                <div className={styles.hiddentr} >
                                    <div className={`${styles.left} ${styles.normal}`}>CURRENTLY TOTAL APY:</div>
                                    <div className={`${styles.right} ${styles.normal}`}>14.04%</div>
                                </div>
                                <div className={styles.hiddentr}>
                                    <div className={styles.btngroup}>
                                        <div className={`${styles.hopbtn}`}>
                                            <CgSoftwareUpload size={24} />
                                            <div>Withdraw</div>
                                        </div>
                                        <div className={`${styles.hbtn}`}>
                                            <CgSoftwareDownload size={24} />
                                            <div onClick={() => handleClickOpen()}>Deposit</div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Yield
