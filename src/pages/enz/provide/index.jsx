import React from 'react'
import Image from 'next/image'

import { FiSearch } from 'react-icons/fi'
import { BsQuestionCircle, BsDownload } from 'react-icons/bs'
import styles from './provide.module.css'
import { data } from '../../../components/data/provide'

const Provide = () => {
    return (
        <div className={styles.provide}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Available pools
                </div>
                <div className={styles.inpgroup}>
                    <div className={styles.mixgroup}>
                        <div className={styles.inputdiv}>
                            <FiSearch size={18} color='white' />
                            <input type="text" className={styles.input} />
                        </div>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.thead}>
                        <div className={styles.tokens}>
                            <div className={styles.smallnormal}>TOKENS</div>
                        </div>
                        <div className={styles.pool}>
                            <div className={styles.smallnormal}>POOL SIZE</div>
                        </div>
                        <div className={styles.total}>
                            <div className={styles.smallnormal}>TOTAL APY</div>
                        </div>
                        <div className={styles.best}>
                            <div className={styles.smallnormal}>BEST TOTAL APY</div>
                        </div>
                    </div>
                    <div className={styles.tbody}>
                        {
                            data.map((item, index) => (
                                <div className={styles.tr} key={index}>
                                    <div className={styles.tokens}>
                                        <div className={styles.imggroup} >
                                            {
                                                item.tokenImage.map((titem, tindex) =>
                                                    <Image src={titem.timage} alt={titem.timage} width={45} height={45} key={tindex} />
                                                )
                                            }
                                        </div>
                                        <div className={styles.lblgroup}>
                                            <div className={styles.normal}>{item.title}</div>
                                            <div className={styles.smallgrey}>{item.subtitle}</div>
                                        </div>
                                    </div>
                                    <div className={styles.pool}>
                                        <div className={styles.normal}>{item.pool}</div>
                                    </div>
                                    <div className={styles.total}>
                                        <div className={styles.normal}>{item.apytitle}</div>
                                        {
                                            item.display === "show" && <div className={`${styles.group}`}>
                                                <div className={styles.smallgrey}>{item.apysubtitle}</div>
                                                <BsQuestionCircle color="#9299B7" size={15} />
                                            </div>
                                        }
                                    </div>
                                    <div className={styles.best}>
                                        <div className={styles.btn}>
                                            <BsDownload color='white' size={24} />
                                            <div>Deposit</div>
                                        </div>
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
                                        <div className={styles.normal}>TOKENS:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.tokens}>
                                            <div className={styles.imggroup} >
                                                {
                                                    item.tokenImage.map((titem, tindex) =>
                                                        <Image src={titem.timage} alt={titem.timage} width={45} height={45} key={tindex} />
                                                    )
                                                }
                                            </div>
                                            <div className={styles.lblgroup}>
                                                <div className={styles.normal}>{item.title}</div>
                                                <div className={styles.smallgrey}>{item.subtitle}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.htr}>
                                    <div className={styles.left}>
                                        <div className={styles.normal}>POOL SIZE:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.normal}>{item.pool}</div>
                                    </div>
                                </div>
                                <div className={styles.htr}>
                                    <div className={styles.left}>
                                        <div className={styles.normal}>TOTAL APY:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.normal}>{item.apytitle}</div>
                                        {
                                            item.display === "show" && <div className={`${styles.group}`}>
                                                <div className={styles.smallgrey}>{item.apysubtitle}</div>
                                                <BsQuestionCircle color="#9299B7" size={15} />
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className={styles.htr}>
                                    <div className={styles.left}>
                                        <div className={styles.normal}>BEST TOTAL APY:</div>
                                    </div>
                                    <div className={styles.right}>
                                        <div className={styles.btn}>
                                            <BsDownload color='white' size={24} />
                                            <div>Deposit</div>
                                        </div>
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

export default Provide
