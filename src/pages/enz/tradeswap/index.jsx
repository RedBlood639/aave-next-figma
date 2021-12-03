import React from 'react'

import styles from './tradeswap.module.css'

const TradeSwap = () => {
    return (
        <div className={styles.tradeswap}>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <div className={styles.sell}>
                        <div className={styles.label}>
                            <div className={styles.normal}>Sell</div>
                            <div className={styles.group}>
                                <div className={styles.grey}>30 USDC</div>
                                <div className={styles.max}><b>Max</b></div>
                            </div>
                        </div>
                        <div className={styles.inputdiv}></div>
                        <div className={styles.grey}>$1.00</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradeSwap
