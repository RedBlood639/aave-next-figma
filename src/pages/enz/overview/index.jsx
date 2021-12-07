import React from "react";
import Image from "next/image";

import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import Down from "../../../assets/down.png";
import Card from "../../../assets/card.png";
import User from "../../../assets/user.png";
import Charts from "../../../assets/chart.png";
import Previous from "../../../assets/previous.png";
import Next from "../../../assets/next.png";
import DAI from "../../../assets/dai.png";
import Question from "../../../assets/question.png";
import MaskGroup1 from "../../../assets/maskgroup1.png";
import MaskGroup2 from "../../../assets/maskgroup2.png";
import MaskGroup3 from "../../../assets/maskgroup3.png";
import MaskGroup4 from "../../../assets/maskgroup4.png";

import styles from "./overview.module.css";

const data = {
    labels: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],
    datasets: [
        {
            label: "dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#35D387",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "#997575",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                10, 15, 16, 14, 13, 12, 16, 18, 18, 15, 17, 14, 16, 18, 18, 16, 18, 20,
                20, 18, 17, 14, 18, 12,
            ],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
                title: function (tooltipItem, data) {
                    return tooltipItem[0].formattedValue;
                },
                label: function () {
                    return;
                },
            },
            yAlign: "bottom",
            displayColors: false,
        },
    },
    scaleShowValues: true,
    scales: {
        x: {
            ticks: {
                display: false,
                autoSkip: false,
            },
        },
        y: {
            ticks: {
                display: false,
            },
        },
    },
    elements: {
        line: {
            tension: 0.4,
        },
    },
};

const Overview = () => {
    return (
        <div className={styles.overview}>
            <div className={styles.container}>
                <div className={styles.selects}>
                    <div className={styles.labelgroup}>
                        <div className={styles.smallgrey}>Share Price</div>
                        <div className={styles.mixlabelgroup}>
                            <div className={styles.largenormal}>$1.00</div>
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
                <div className={styles.chart}>
                    <Line data={data} options={options} />
                    <div className={styles.xaxis}>
                        <div className={styles.smallnormal}>21.00</div>
                        <div className={styles.smallnormal}>06.00</div>
                        <div className={styles.smallnormal}>15.00</div>
                        <div className={styles.smallnormal}>00.00</div>
                        <div className={styles.smallnormal}>09.00</div>
                    </div>
                </div>
                <div className={styles.comment}>
                    <div className={styles.card}>
                        <Image src={Card} alt="card" width={57} height={57} />
                        <div className={styles.title}>
                            <div className={styles.smallgrey}>Assets under management</div>
                            <div className={styles.bignormal}>$29.88</div>
                        </div>
                    </div>
                    <div className={styles.user}>
                        <Image src={User} alt="user" width={57} height={57} />
                        <div className={styles.title}>
                            <div className={styles.smallgrey}>Depositors</div>
                            <div className={styles.bignormal}>2</div>
                        </div>
                    </div>
                    <div className={styles.diagram}>
                        <Image src={Charts} alt="chart" width={57} height={57} />
                        <div className={styles.title}>
                            <div className={styles.smallgrey}>Average Monthly Return</div>
                            <div className={styles.bigorange}>-0.20%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.tablepart}>
                    <div className={styles.normal}>Monthly Returns</div>
                    <div className={styles.table}>
                        <div className={styles.thead}>
                            <div className={`${styles.smallnormal} ${styles.show}`}>Year</div>
                            <div className={`${styles.smallnormal} ${styles.show}`}>JAN</div>
                            <div className={`${styles.smallnormal} ${styles.show}`}>FEB</div>
                            <div className={`${styles.smallnormal} ${styles.show}`}>MAR</div>
                            <div className={`${styles.smallnormal} ${styles.show}`}>APR</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>MAY</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>JUN</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>JUL</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>AUG</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>SEP</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>OCT</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>NOV</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>DEC</div>
                        </div>
                        <div className={styles.tbody}>
                            <div className={`${styles.smallnormal} ${styles.show}`}>2021</div>
                            <div className={`${styles.smallnormal} ${styles.show}`}>-</div>
                            <div className={`${styles.smallgreen} ${styles.show}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallgreen} ${styles.show}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallgreen} ${styles.show}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallgreen} ${styles.hide}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallorange} ${styles.hide}`}>
                                -0.37%
                            </div>
                            <div className={`${styles.smallorange} ${styles.hide}`}>
                                -0.37%
                            </div>
                            <div className={`${styles.smallgreen} ${styles.hide}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallgreen} ${styles.hide}`}>
                                +0.53%
                            </div>
                            <div className={`${styles.smallorange} ${styles.hide}`}>
                                -0.37%
                            </div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>-</div>
                            <div className={`${styles.smallnormal} ${styles.hide}`}>-</div>
                        </div>
                    </div>
                    <div className={styles.nepre}>
                        <Image src={Previous} alt="Previous" width={47} height={47} />
                        <Image src={Next} alt="Next" width={47} height={47} />
                    </div>
                </div>
                <div className={styles.vault}>
                    <div className={styles.light}>Valut holdings</div>
                    <div className={styles.simpletable}>
                        <div className={styles.simplethead}>
                            <div className={`${styles.smallnormal} ${styles.asset}`}>
                                Asset
                            </div>
                            <div className={`${styles.smallnormal} ${styles.balance}`}>
                                Balance
                            </div>
                            <div className={`${styles.smallnormal} ${styles.type}`}>Type</div>
                            <div className={`${styles.smallnormal} ${styles.price}`}>
                                Price
                            </div>
                            <div className={`${styles.smallnormal} ${styles.value}`}>
                                Value
                            </div>
                            <div className={`${styles.smallnormal} ${styles.daily}`}>
                                Daily Change
                            </div>
                            <div className={`${styles.smallnormal} ${styles.allocation}`}>
                                <div>Allocation</div>
                                <Image src={Down} alt="Down" width={13} height={6} />
                            </div>
                        </div>
                        <div className={styles.simpletbody}>
                            <div className={`${styles.smallnormal} ${styles.tasset}`}>
                                <Image src={DAI} alt="DAI" width={45} height={45} />
                                <div className={styles.simplemix}>
                                    <div className={styles.smallnormal}>USDC</div>
                                    <div className={styles.smallgrey}>USD Coin</div>
                                </div>
                            </div>
                            <div className={`${styles.smallnormal} ${styles.tbalance}`}>
                                30.00
                            </div>
                            <div className={`${styles.smallnormal} ${styles.ttype}`}>
                                Assets
                            </div>
                            <div className={`${styles.smallnormal} ${styles.tprice}`}>
                                $1.00
                            </div>
                            <div className={`${styles.smallnormal} ${styles.tvalue}`}>
                                $29.88
                            </div>
                            <div className={`${styles.smallorange} ${styles.tdaily}`}>
                                -0.07%
                            </div>
                            <div className={`${styles.smallnormal} ${styles.tallocation}`}>
                                100%
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.submenutable} ${styles.tablehide}`}>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>
                                <div className={`${styles.question}`}>
                                    <div>Asset:</div>
                                    <Image src={Question} alt="Question" width={21} height={21} />
                                </div>
                            </div>
                            <div className={`${styles.right} ${styles.normal}`}>
                                <div className={`${styles.question}`}>
                                    <Image src={DAI} alt="DAI" width={45} height={45} />
                                    <div className={styles.simplemix}>
                                        <div className={styles.smallnormal}>USDC</div>
                                        <div className={styles.smallgrey}>USD Coin</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Balance:</div>
                            <div className={`${styles.right} ${styles.normal}`}>
                                Prosperity Integration
                            </div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Type:</div>
                            <div className={`${styles.right} ${styles.normal}`}>Assets</div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Price:</div>
                            <div className={`${styles.right} ${styles.normal}`}>$1.00</div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Value:</div>
                            <div className={`${styles.right} ${styles.normal}`}>$29.88</div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>
                                Daily change:
                            </div>
                            <div className={`${styles.right} ${styles.smallorange}`}>
                                -0.07%
                            </div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>
                                Allocation:
                            </div>
                            <div className={`${styles.right} ${styles.normal}`}>100%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.submenu}>
                    <div className={`${styles.smallgrey} ${styles.hover}`}>Factsheet</div>
                    <div className={styles.smallgrey}>Financials</div>
                    <div className={styles.smallgrey}>Fees</div>
                    <div className={styles.smallgrey}>Ruleset</div>
                    <div className={styles.smallgrey}>Depositors</div>
                    <div className={styles.smallgrey}>Deposits</div>
                    <div className={styles.smallgrey}>Trades</div>
                </div>
                <div className={styles.submenutable}>
                    <div className={styles.subtr}>
                        <div className={`${styles.left} ${styles.normal}`}>Name</div>
                        <div className={`${styles.right} ${styles.normal}`}>
                            Prosperity Integration
                        </div>
                    </div>
                    <div className={styles.subtr}>
                        <div className={`${styles.left} ${styles.normal}`}>
                            Inception date
                        </div>
                        <div className={`${styles.right} ${styles.normal}`}>
                            Sunday, 31 October 2020 13:37
                        </div>
                    </div>
                    <div className={styles.subtr}>
                        <div className={`${styles.left} ${styles.normal}`}>Manager</div>
                        <div className={`${styles.right} ${styles.normal}`}>
                            <div className={`${styles.question}`}>
                                <Image
                                    src={MaskGroup1}
                                    alt="MaskGroup1"
                                    width={45}
                                    height={45}
                                />
                                <div>
                                    <u>qwe789qdewq80qdw</u>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subtr}>
                        <div className={`${styles.left} ${styles.normal}`}>
                            <div className={`${styles.question}`}>
                                <div>Denomination asset</div>
                                <Image src={Question} alt="Question" width={21} height={21} />
                            </div>
                        </div>
                        <div className={`${styles.right} ${styles.normal}`}>
                            <div className={`${styles.question}`}>
                                <Image src={DAI} alt="DAI" width={45} height={45} />
                                <div className={styles.simplemix}>
                                    <div className={styles.smallnormal}>USDC</div>
                                    <div className={styles.smallgrey}>USD Coin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subtr}>
                        <div className={`${styles.left} ${styles.normal}`}>
                            Shares lockup date
                        </div>
                        <div className={`${styles.right} ${styles.normal}`}>1 day</div>
                    </div>
                </div>
                <div className={styles.smartContract}>
                    <div className={styles.normal}>Smart Contract</div>
                    <div className={styles.submenutable}>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Vault</div>
                            <div className={`${styles.right} ${styles.normal}`}>
                                <div className={`${styles.question}`}>
                                    <Image
                                        src={MaskGroup2}
                                        alt="MaskGroup2"
                                        width={45}
                                        height={45}
                                    />
                                    <div>
                                        <u>qwe789qdewq80qdw</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>
                                Compleyisd
                            </div>
                            <div className={`${styles.right} ${styles.normal}`}>
                                <div className={`${styles.question}`}>
                                    <Image
                                        src={MaskGroup3}
                                        alt="MaskGroup3"
                                        width={45}
                                        height={45}
                                    />
                                    <div>
                                        <u>qwe789qdewq80qdw</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.subtr}>
                            <div className={`${styles.left} ${styles.normal}`}>Deployer</div>
                            <div className={`${styles.right} ${styles.normal}`}>
                                <div className={`${styles.question}`}>
                                    <Image
                                        src={MaskGroup4}
                                        alt="MaskGroup4"
                                        width={45}
                                        height={45}
                                    />
                                    <div>
                                        <u>qwe789qdewq80qdw</u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
