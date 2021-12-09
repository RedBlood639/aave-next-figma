import React from 'react'
import Image from 'next/image'

import { VscInfo } from 'react-icons/vsc'
import Down from '../../../assets/down.png'
import styles from './stake.module.css'
import { data } from '../../../components/data/stake'

const Stake = () => {
    return (
        <div className={styles.stake}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Staking
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={styles.group}>
                            <div className={styles.small}>ASSET</div>
                        </div>
                        <div className={styles.midgroup}>
                            <div className={styles.small}>BALANCE</div>
                        </div>
                        <div className={styles.btngroup}>
                            <Image src={Down} alt="Down" width={11} height={6} />
                        </div>
                    </div>
                    <div className={styles.border}></div>
                    <div className={styles.tbody}>
                        {
                            data.map((item, index) => (
                                <div className={styles.tr} key={index}>
                                    <div className={styles.group}>
                                        <Image src={item.image} alt={item.image} width={45} height={45} />
                                        <div className={styles.lblgroup}>
                                            <div className={styles.normal}>{item.title}</div>
                                            <div className={styles.smallgrey}>{item.subtitle}</div>
                                        </div>
                                        <div className={styles[`${item.display}`]}>
                                            <VscInfo fontSize={18} color="#87D4FF" />
                                        </div>
                                    </div>
                                    <div className={styles.midgroup}>
                                        <div className={styles.normal}>-</div>
                                    </div>
                                    <div className={styles.btngroup}>
                                        <div className={styles.btn}>Unstake</div>
                                        <div className={styles.btn}>Stake</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={styles.htable}>
                    {
                        data.map((item, index) => (
                            <div className={styles.hsubtable} key={index}>
                                <div className={styles.htr}>
                                    <div className={styles.left}>
                                        <div className={styles.normal}>ASSET:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.group}>
                                            <Image src={item.image} alt={item.image} width={45} height={45} />
                                            <div className={styles.lblgroup}>
                                                <div className={styles.normal}>{item.title}</div>
                                                <div className={styles.smallgrey}>{item.subtitle}</div>
                                            </div>
                                            <div className={styles[`${item.display}`]}>
                                                <VscInfo fontSize={18} color="#87D4FF" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.htr}>
                                    <div className={styles.left}>
                                        <div className={styles.normal}>BALANCE:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.normal}>-</div>
                                    </div>
                                </div>
                                <div className={styles.htr}>
                                    <div className={styles.btngroup}>
                                        <div className={styles.btn}>Unstake</div>
                                        <div className={styles.btn}>Stake</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stake
