import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./cwithdraw.module.css";

import Info from "../../../assets/info.png";
import BigRedD from "../../../assets/bigRedD.png";
import Back from "../../../assets/back.png";

const CWithDraw = () => {
  const router = useRouter();

  const [dai, setDAI] = useState();

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
                <div className={styles.price}>
                  <b>78.99</b>%
                </div>
              </div>

              <div className={styles.mgroup2}>
                <div className={styles.price}>Collateral composition</div>
                <div className={styles.progress}>
                  <div className={styles.marklineprogress}></div>
                  <div className={styles.lineprogress}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.borrow}>
            <div className={styles.dtitle}>Withdraw Overview</div>
            <div className={styles.dcontent}>
              These are your transaction deyails. Make sure to check <br /> if
              this is correct before submitting.
            </div>
            <div className={styles.values}>
              <div className={styles.left}>
                <div className={styles.amount}>Amount</div>
                <input
                  type="text"
                  className={styles.input}
                  value={dai}
                  onChange={(e) => setDAI(e.target.value)}
                />
              </div>
              <div className={styles.image}>
                <Image src={BigRedD} alt="DField" width={29.3} height={29.3} />
                <div className={styles.ten}>10 DAI</div>
              </div>
            </div>
            <div className={styles.submodal}>
              <div className={styles.submodalheader}>
                <div className={styles.subleft}>1 Withdraw</div>
                <div className={styles.subright}>2 Finished</div>
              </div>
              <div className={styles.submodalbody}>
                <div className={styles.subbodytitle}>
                  <div className={styles.subblue}>1/2 Withdraw</div>
                  <div className={styles.subnormal}>Please submit to withdraw</div>
                </div>
                <div className={styles.subbodybtn}>Withdraw</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CWithDraw;
