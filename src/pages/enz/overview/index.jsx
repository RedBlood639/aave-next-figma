import React from 'react'
import Image from 'next/image'

import Down from '../../../assets/down.png'

import styles from './overview.module.css'

const Overview = () => {
    return (
        <div className={styles.overview}>
            <div className={styles.container}>
                <div className={styles.selects}>
                    <div className={styles.labelgroup}>
                        <div className={styles.smallgrey}>
                            Share Price
                        </div>
                        <div className={styles.mixlabelgroup}>
                            <div className={styles.bignormal}>$1.00</div>
                            <div className={styles.sublabelgroup}>
                                <div className={styles.smallgreen}>0.08%</div>
                                <div className={styles.smallnormal}>Past 1D</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btngroup}>
                        <div className={styles.pricebtn}>
                            <div className={styles.normal}>Share Price</div>
                            <Image src={Down} alt="Down" width={15} height={7.5} />
                        </div>
                        <div className={styles.datebtn}>
                            <div className={`${styles.oneday} ${styles.active}`}>1D</div>
                            <div className={styles.oneweek}>1W</div>
                            <div className={styles.onemonth}>1M</div>
                            <div className={styles.threemonths}>3M</div>
                            <div className={styles.sixmonths}>6M</div>
                            <div className={styles.oneyear}>1Y</div>
                        </div>
                    </div>
                </div>
                <div className={styles.chart}></div>
                <div className={styles}></div>
            </div>
        </div >
    )
}

export default Overview
