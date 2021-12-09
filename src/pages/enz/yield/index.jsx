import React from 'react'
import Image from 'next/image'

import styles from './main.module.css'
import { FiSearch } from 'react-icons/fi'
import Down from '../../../assets/down.png'
import BigGroup1 from '../../../assets/biggroup1.png'
import Protocol1 from '../../../assets/protocol1.png'

const Yield = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Available markets
                </div>
                <div className={styles.inpgroup}>
                    <div className={styles.mixgroup}>
                        <div className={styles.inputdiv}>
                            <FiSearch size={18} color='white' />
                            <input type="text" className={styles.input} />
                        </div>
                        <select className={styles.select}></select>
                    </div>
                    <div className={styles.selectdiv}>
                        <select className={styles.select}></select>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={styles.namegroup}>
                            <div className={styles.smallnormal}>Name</div>
                        </div>
                        <div className={styles.protocolgroup}>
                            <div className={styles.smallnormal}>Available Protocols</div>
                        </div>
                        <div className={styles.balancegroup}>
                            <div className={styles.smallnormal}>Balance</div>
                            <Image src={Down} alt='Down' width={11} height={6} />
                        </div>
                        <div className={styles.apygroup}>
                            <div className={styles.smallnormal}>Best Total APY</div>
                        </div>
                    </div>
                    <div className={styles.tbody}>
                        <div className={styles.tr}>
                            <div className={styles.namegroup}>
                                <Image src={BigGroup1} alt='BigGroup1' width={45} height={45} />
                                <div className={styles.lblgroup}>
                                    <div className={styles.normal}>Yearn</div>
                                    <div className={styles.smallgrey}>USDC yVault Version: 0.3.0</div>
                                </div>
                            </div>
                            <div className={styles.protocolgroup}>
                                <Image src={Protocol1} alt='Protocol1' width={37.5} height={37.5} />
                            </div>
                            <div className={styles.balancegroup}>
                                <div className={styles.normal}>30 USDC</div>
                            </div>
                            <div className={styles.apygroup}>
                                <div className={styles.normal}>11.28%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yield
