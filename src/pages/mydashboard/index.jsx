import React, { useEffect } from "react";
import Image from "next/image";

import ProgressBar from "progressbar.js";

import styles from "./mydashboard.module.css";

import Minimize from "../../assets/minimize.png";
import Info from "../../assets/info.png";
import DAI from "../../assets/dai.png";
import { textAlign } from "@mui/system";

const MyDashboard = () => {
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
                circle.setText("Deposit <br /> composition");
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
                circle.setText("Deposit <br /> composition");
            },
        });
        bar2.text.style.fontFamily = "Poppins";
        bar2.text.style.fontSize = "10.5px";
        bar2.text.style.textAlign = "center";
        bar2.text.style.color = "#4E5984";
        bar2.animate(0.4); // Number from 0.0 to 1.0
    });
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

                </div>
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
                </div>
            </div>
        </div>
    );
};

export default MyDashboard;
