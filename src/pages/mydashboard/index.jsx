import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router"

import ProgressBar from "progressbar.js";

import styles from "./mydashboard.module.css";

import Minimize from "../../assets/minimize.png";
import Info from "../../assets/info.png";
import DAI from "../../assets/dai.png";

const MyDashboard = () => {
    const router = useRouter();

    const [check, setCheck] = useState(true);
    const [check1, setCheck1] = useState(true);

    useEffect(() => {
        var bar = new ProgressBar.Circle(container, {
            text: {
                autoStyleContainer: false,
            },
            trailColor: "#4e5984",
            trailWidth: 10,
            duration: 1800,
            easing: "bounce",
            strokeWidth: 10,
            from: { color: "#FFEA82", a: 0 },
            to: { color: "#EF967A 100% #FCFE99 100%", a: 0.4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute("stroke", state.color);
                circle.setText("Deposit <br /> composition");
            },
        });
        bar.text.style.fontFamily = "Poppins";
        bar.text.style.fontSize = "10.5px";
        bar.text.style.textAlign = "center";
        bar.text.style.color = "#4E5984";
        bar.animate(0.4); // Number from 0.0 to 1.0

        var bar1 = new ProgressBar.Circle(container1, {
            text: {
                autoStyleContainer: false,
            },
            trailColor: "#4e5984",
            trailWidth: 10,
            duration: 1800,
            easing: "bounce",
            strokeWidth: 10,
            from: { color: "#FFEA82", a: 0 },
            to: { color: "#EF967A 100% #FCFE99 100%", a: 0.4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute("stroke", state.color);
                circle.setText("Borrow <br /> composition");
            },
        });
        bar1.text.style.fontFamily = "Poppins";
        bar1.text.style.fontSize = "10.5px";
        bar1.text.style.textAlign = "center";
        bar1.text.style.color = "#4E5984";
        bar1.animate(0.4); // Number from 0.0 to 1.0

        var bar2 = new ProgressBar.Circle(container2, {
            text: {
                autoStyleContainer: false,
            },
            trailColor: "#4e5984",
            trailWidth: 10,
            duration: 1800,
            easing: "bounce",
            strokeWidth: 10,
            from: { color: "#FFEA82", a: 0 },
            to: { color: "#EF967A 100% #FCFE99 100%", a: 0.4 },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute("stroke", state.color);
                circle.setText("Collateral <br /> composition");
            },
        });
        bar2.text.style.fontFamily = "Poppins";
        bar2.text.style.fontSize = "10.5px";
        bar2.text.style.textAlign = "center";
        bar2.text.style.color = "#4E5984";
        bar2.animate(0.4); // Number from 0.0 to 1.0
    }, []);
    return (
        <div className={styles.mydashboard}>
            <div className={styles.container}>
                <div className={styles.leftmodal}>
                    <div className={styles.lheader}>Deposit information</div>
                    <div className={styles.progress}>
                        <div className={styles.ptitle}>
                            <div className={styles.normal}>
                                <div>Approximate balance</div>
                                <Image src={Info} alt="Info" width={16} height={16} />
                            </div>
                            <div className={styles.normal}>
                                <div>
                                    $ <b>3.05</b>
                                </div>
                                <div className={styles.small}>50273922 USD</div>
                            </div>
                        </div>
                        <div id="container" className={styles.progressbar}></div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.thead}>
                            <div className={styles.deposits}>Your <br /> deposits</div>
                            <div className={styles.ballance} >Current <br /> ballance</div>
                            <div className={styles.profit}>Profit <br /> Sharing <br /> Rate</div>
                            <div className={styles.merge}>
                                <div>Collateral</div>
                                <Image src={Info} alt="Info" width={18} height={18} />
                            </div>
                            <div className={styles.bspace}></div>
                        </div>
                        <div className={styles.tbody}>
                            <div className={styles.child}>
                                <div className={styles.bdeposits}>
                                    <Image src={DAI} alt="DAI" width={30} height={30} />
                                    <div>DAI</div>
                                </div>
                                <div className={styles.bballance}>
                                    <div>9, 990.00</div>
                                    <div className={styles.opacity}>$10,088.77</div>
                                </div>
                                <div className={styles.bprofit}>4.04%</div>
                                <div className={styles.bmerge}>
                                    <label className={styles.yes}>
                                        {!check1 ? "Yes" : ""}
                                    </label>
                                    <label className={styles.no}>
                                        {!check1 ? "" : "No"}
                                    </label>
                                    <label className={styles.switch}>
                                        <input type="checkbox" onChange={() => setCheck1(!check1)} />
                                        <span className={`${styles.slider} ${styles.round}`}></span>
                                    </label>
                                </div>
                                <div className={styles.bspace}>
                                    <div className={styles.deposit} onClick={() => router.push('/continue/cdeposit')}>Deposit</div>
                                    <div className={styles.withdraw} onClick={() => router.push('/withdraw')}>Withdraw</div>
                                </div>
                            </div>
                            <div className={styles.child}>
                                <div className={styles.bdeposits}>
                                    <Image src={DAI} alt="DAI" width={30} height={30} />
                                    <div>DAI</div>
                                </div>
                                <div className={styles.bballance}>
                                    <div>9, 990.00</div>
                                    <div className={styles.opacity}>$10,088.77</div>
                                </div>
                                <div className={styles.bprofit}>4.04%</div>
                                <div className={styles.bmerge}>
                                    <label className={styles.yes}>
                                        {!check ? "Yes" : ""}
                                    </label>
                                    <label className={styles.no}>
                                        {!check ? "" : "No"}
                                    </label>
                                    <label className={styles.switch}>
                                        <input type="checkbox" onChange={() => setCheck(!check)} />
                                        <span className={`${styles.slider} ${styles.round}`}></span>
                                    </label>
                                </div>
                                <div className={styles.bspace}>
                                    <div className={styles.deposit} onClick={() => router.push('/continue/cdeposit')}>Deposit</div>
                                    <div className={styles.withdraw} onClick={() => router.push('/withdraw')}>Withdraw</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right modal */}
                <div className={styles.rightmodal}>
                    <div className={styles.rheader}>
                        <div className={styles.title}>Borrow information</div>
                        <div className={styles.minimize}>
                            <Image src={Minimize} alt="Minimize" width={19} height={19} />
                            <div className={styles.hideminimize}>Minimize</div>
                        </div>
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.ptitle1}>
                            <div className={styles.item1}>
                                <div>You borrowed</div>
                                <div>$ 19.79 USD</div>
                            </div>
                            <div className={styles.item2}>
                                <div>Borrowing Powed Used</div>
                                <div>34.05 %</div>
                            </div>
                            <div className={styles.item3}>
                                <div>Your collateral</div>
                                <div>$ 79.79 USD</div>
                            </div>
                            <div className={styles.item4}>
                                <div className={styles.btn}>Details</div>
                            </div>
                        </div>
                        <div className={styles.progressgroup}>
                            <div id="container1" className={styles.progressbar}></div>
                            <div id="container2" className={styles.progressbar}></div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.thead}>
                            <div className={styles.deposits}>Your <br /> borrows</div>
                            <div className={styles.ballance} >Borrowed</div>
                            <div className={styles.profit}>Profit <br /> Commission <br /> Rate</div>
                            <div className={styles.merge}></div>
                            <div className={styles.bspace}></div>
                        </div>
                        <div className={styles.tbody}>
                            <div className={styles.child}>
                                <div className={styles.bdeposits}>
                                    <Image src={DAI} alt="DAI" width={30} height={30} />
                                    <div>DAI</div>
                                </div>
                                <div className={styles.bballance}>
                                    <div>9, 990.00</div>
                                    <div className={styles.opacity}>$10,088.77</div>
                                </div>
                                <div className={styles.bprofit}>4.04%</div>
                                <div className={styles.bmerge}></div>
                                <div className={styles.bspace}>
                                    <div className={styles.deposit} onClick={() => router.push('/continue/cborrow')}>Borrow</div>
                                    <div className={styles.withdraw} onClick={() => router.push('/repay')}>Repay</div>
                                </div>
                            </div>
                            <div className={styles.child}>
                                <div className={styles.bdeposits}>
                                    <Image src={DAI} alt="DAI" width={30} height={30} />
                                    <div>DAI</div>
                                </div>
                                <div className={styles.bballance}>
                                    <div>9, 990.00</div>
                                    <div className={styles.opacity}>$10,088.77</div>
                                </div>
                                <div className={styles.bprofit}>4.04%</div>
                                <div className={styles.bmerge}></div>
                                <div className={styles.bspace}>
                                    <div className={styles.deposit} onClick={() => router.push('/continue/cborrow')}>Borrow</div>
                                    <div className={styles.withdraw} onClick={() => router.push('/repay')}>Repay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyDashboard;
