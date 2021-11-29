import React from 'react'

import Image from 'next/image'

import info from '../../assets/info.png'
import DAI from '../../assets/dai.png'
import deposit from '../../assets/deposit-diagram.png'
import borrow from '../../assets/borrow-diagram.png'
import collateral from '../../assets/collateral-diagram.png'

import styles from './mydashboard.module.css'

const MyDashboard = () => {
    const data1 = [
        {
            "id": "1",
            "ballance1": "9, 990.00",
            "ballance2": "$10,088.77",
            "rate": "4.04%"
        },
        {
            "id": "2",
            "ballance1": "9, 990.00",
            "ballance2": "$10,088.77",
            "rate": "4.04%"
        }
    ];
    const data2 = [
        {
            "id": "1",
            "borrowed1": "9, 990.00",
            "borrowed2": "$10,088.77",
            "rate": "4.04%"
        },
        {
            "id": "2",
            "borrowed1": "9, 990.00",
            "borrowed2": "$10,088.77",
            "rate": "4.04%"
        }
    ];
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardtitle}>Deposit information</div>
                <div className={styles.cardcontent}>
                    <div className={styles.chartpart}>
                        <div className={styles.textgroup}>
                            <div className={styles.texttitle}>
                                <div >
                                    Approximate balance
                                </div>
                                <Image src={info} alt="info" />
                            </div>
                            <div className={styles.textcontent}>
                                <b>$ 3.05</b>50273922 USD
                            </div>
                        </div>
                        <div className={styles.chartgroup}>
                            <Image src={deposit} alt="deposit" />
                        </div>
                    </div>
                    <table className={styles.table}>
                        <th className={styles.tableheader}>
                            <td className={styles.thdeposit}>Your<br />deposits</td>
                            <td className={styles.thbalance}>Current<br />balance</td>
                            <td className={styles.thrate}>Profit<br />Sharing<br />Rate</td>
                            <td className={styles.thcollateral}>
                                <div >
                                    Collateral
                                </div>
                                <Image src={info} alt="info" />
                            </td>
                        </th>
                        <div className={styles.tablecontent}>
                            {
                                data1.map((item, index) => (
                                    <tr className={styles.tr} key={index}>
                                        <td className={styles.deposit}>
                                            <Image src={DAI} alt="DAI" />
                                            <div className={styles.title}>DAI</div>
                                        </td>
                                        <td className={styles.ballance}>
                                            <div className={styles.ballance1}>{item.ballance1}</div>
                                            <div className={styles.ballance2}>{item.ballance2}</div>
                                        </td>
                                        <td className={styles.rate}>{item.rate}</td>
                                        <td className={styles.collateral}>
                                            <div className={styles.yes}>Yes</div>
                                            <div className={styles.option}>
                                                <label class={styles.switch}>
                                                    <input type="checkbox" checked />
                                                    <span className={`${styles.slider} ${styles.round}`}></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td className={styles.btngroup}>
                                            <div className={styles.depositbtn}>Deposit</div>
                                            <div className={styles.withdrawbtn}>Withdraw</div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </div>
                    </table>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardtitle}>
                    <div>Borrow information</div>
                    <div className={styles.minimize}>
                        <Image src={info} alt="info" />
                        <div>Minimize</div>
                    </div>
                </div>
                <div className={styles.cardcontent}>
                    <div className={styles.chartpart}>
                        <div className={styles.borrowedtextgroup}>
                            <div className={styles.borrowedtext}>
                                You borrowed<br />$ 19.79 USD
                            </div>
                            <div className={styles.borrowedtext}>
                                You Borrowing Powed Used<br />34.05 %
                            </div>
                            <div className={styles.borrowedtext}>
                                Your collateral<br />$ 79.79 USD
                            </div>
                            <div className={styles.detailsbtn}>Details</div>
                        </div>
                        <div className={styles.chartgroup}>
                            <Image src={borrow} alt="borrow" />
                            <Image src={collateral} alt="collateral" />
                        </div>
                    </div>
                    <table className={styles.table}>
                        <th className={styles.tableheader}>
                            <td className={styles.thdeposit}>Your<br />deposits</td>
                            <td className={styles.thborrowed}>Borrowed</td>
                            <td className={styles.thborrowedrate}>Profit<br />Commission<br />Rate</td>
                        </th>
                        <div className={styles.tablecontent}>
                            {
                                data2.map((item, index) => (
                                    <tr className={styles.tr} key={index}>
                                        <td className={styles.deposit}>
                                            <Image src={DAI} alt="DAI" />
                                            <div className={styles.title}>DAI</div>
                                        </td>
                                        <td className={styles.borrowed}>
                                            <div className={styles.borrowed1}>{item.borrowed1}</div>
                                            <div className={styles.borrowed2}>{item.borrowed2}</div>
                                        </td>
                                        <td className={styles.borrowedrate}>{item.rate}</td>
                                        <td className={styles.btngroup}>
                                            <div className={styles.depositbtn}>Deposit</div>
                                            <div className={styles.repaybtn}>Repay</div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </div>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyDashboard
