import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./withdraw.module.css";

import Info from "../../assets/info.png";
import BigD from "../../assets/bigD.png";
import Back from "../../assets/back.png";

const WithDraw = () => {
  const router = useRouter();

  const [dai, setDAI] = useState(0.0000000000022287665);


  return (
    <>
      <div className={styles.other}>
        <div className={styles.container}>
          <div className={styles.back} onClick={() => router.back()}>
            <Image src={Back} alt="Back" width={7.5} height={15} />
            <div className={styles.title}>Back</div>
          </div>
          <div className={styles.modal}>
            <div className={styles.modaltitle}>
              <div>Withdraw DAI</div>
            </div>
            <div className={styles.modalborder}></div>
            <div className={styles.modalcontent}>
              <div className={styles.row1}>
                <div className={styles.price}>Your balance Properity</div>
                <div className={styles.price}>
                  <div>
                    <b>10.0003</b> DAI
                  </div>
                  <div className={styles.underdollar}>$40.04</div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.add}>
                  <div className={styles.price}>Loan to value</div>
                  <Image src={Info} alt="Info" width={20} height={20} />
                </div>
                <div className={styles.price}><b>78.99</b>%</div>
              </div>
              <div className={styles.mgroup2}>
                <div className={styles.price}>Collateral composition</div>
                <div className={styles.lineprogress}>

                </div>
              </div>
            </div>
          </div>
          <div className={styles.borrow}>
            <div className={styles.dtitle}>
              Withdraw
            </div>
            <div className={styles.dcontent}>
              How much do you want to withdraw?
            </div>
            <div className={styles.labels}>
              <div className={styles.label}>Available to withdraw</div>
              <div className={styles.label}>
                <b>0.000001</b> DAI
              </div>
            </div>
            <div className={styles.values}>
              <div className={styles.left}>
                <div>
                  <Image src={BigD} alt="DField" width={29.3} height={29.3} />
                </div>
                <div className={styles.dinput}>
                  <input
                    type="text"
                    className={styles.input}
                    value={dai}
                    onChange={(e) => setDAI(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.max}>Max</div>
            </div>
            <div
              className={styles.continue}
              onClick={() => router.push("/withdraw/continue")}
            >
              Continue
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDraw;
