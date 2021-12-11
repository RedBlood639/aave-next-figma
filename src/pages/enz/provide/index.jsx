import React, { useState } from "react";
import Image from "next/image";

import Modal from "../../../components/Modal";
import mstyles from "../../../components/Modal/modal.module.css";
import { FiSearch } from "react-icons/fi";
import { BsQuestionCircle, BsDownload } from "react-icons/bs";
import styles from "./provide.module.css";
import { data } from "../../../components/data/provide";
import NormalRedD from "../../../assets/normalRedD.png";
import NormalT from "../../../assets/normalT.png";
import NormalDollor from "../../../assets/normalDollar.png";

const Provide = () => {
  const [check, setCheck] = useState(true);
  const [flag, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = "Provide liquidity on Curve.fi aDAI/aUSDC/aUSDT";
  return (
    <div className={styles.provide}>
      {flag && (
        <Modal onClick={handleClose} title={title}>
          <div className={mstyles.sell}>
            <div className={mstyles.label}>
              <div className={mstyles.normal}>Amount</div>
              <div className={mstyles.group}>
                <div className={mstyles.grey}>0 DAI</div>
              </div>
            </div>
            <div className={mstyles.inputdiv}>
              <input type="text" className={mstyles.input} />
              <div className={mstyles.mixcolor}>
                <Image
                  src={NormalRedD}
                  alt="NormalRedD"
                  width={19}
                  height={21}
                />
                <div className={mstyles.normal}>DAI</div>
              </div>
            </div>
            <div className={mstyles.grey}>$0.00</div>
          </div>
          <div className={mstyles.sell}>
            <div className={mstyles.label}>
              <div className={mstyles.normal}>Amount</div>
              <div className={mstyles.group}>
                <div className={mstyles.grey}>30 USDC</div>
                <div className={mstyles.max}>
                  <b>Max</b>
                </div>
              </div>
            </div>
            <div className={mstyles.inputdiv}>
              <input type="text" className={mstyles.input} />
              <div className={mstyles.mixcolor}>
                <Image
                  src={NormalDollor}
                  alt="NormalDollor"
                  width={19}
                  height={19}
                />
                <div className={mstyles.normal}>USDC</div>
              </div>
            </div>
            <div className={mstyles.grey}>$0.00</div>
          </div>
          <div className={mstyles.sell}>
            <div className={mstyles.label}>
              <div className={mstyles.normal}>Amount</div>
              <div className={mstyles.group}>
                <div className={mstyles.grey}>30 USDC</div>
                <div className={mstyles.max}>
                  <b>Max</b>
                </div>
              </div>
            </div>
            <div className={mstyles.inputdiv}>
              <input type="text" className={mstyles.input} />
              <div className={mstyles.mixcolor}>
                <Image src={NormalT} alt="NormalT" width={19} height={19} />
                <div className={mstyles.normal}>USDT</div>
              </div>
            </div>
            <div className={mstyles.grey}>$0.00</div>
          </div>
          <div className={mstyles.bmerge}>
            <label className={mstyles.switch}>
              <input type="checkbox" onChange={() => setCheck(!check)} />
              <span className={`${mstyles.slider} ${mstyles.round}`}></span>
            </label>
            <div className={mstyles.normal}>Deposit and Stake</div>
            <BsQuestionCircle color="#87D4FF" size={15} />
          </div>
          <div className={mstyles.slippage}>
            <div className={mstyles.bignormal}>Maximum slippage</div>
          </div>
          <div className={mstyles.inputdiv}>
            <input type="text" className={mstyles.input} />
          </div>
          <div className={mstyles.bmerge}>
            <label className={mstyles.switch}>
              <input type="checkbox" onChange={() => setCheck(!check)} />
              <span className={`${mstyles.slider} ${mstyles.round}`}></span>
            </label>
            <div className={mstyles.normal}>
              Deposit unwrapped underlying tokens
            </div>
          </div>
          <div className={mstyles.liquidity}>
            <div className={mstyles.btn} onClick={() => handleClose()}>
              Proivde Liquidity
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.container}>
        <div className={styles.title}>Available pools</div>
        <div className={styles.inpgroup}>
          <div className={styles.mixgroup}>
            <div className={styles.inputdiv}>
              <FiSearch size={18} color="white" />
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
            {data.map((item, index) => (
              <div className={styles.tr} key={index}>
                <div className={styles.tokens}>
                  <div className={styles.imggroup}>
                    {item.tokenImage.map((titem, tindex) => (
                      <Image
                        src={titem.timage}
                        alt={titem.timage}
                        width={45}
                        height={45}
                        key={tindex}
                      />
                    ))}
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
                  {item.display === "show" && (
                    <div className={`${styles.group}`}>
                      <div className={styles.smallgrey}>{item.apysubtitle}</div>
                      <BsQuestionCircle color="#9299B7" size={15} />
                    </div>
                  )}
                </div>
                <div className={styles.best}>
                  <div className={styles.btn} onClick={() => handleOpen()}>
                    <BsDownload color="white" size={24} />
                    <div>Deposit</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.htable}>
          {data.map((item, index) => (
            <div className={styles.hsubtable} key={index}>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>TOKENS:</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.tokens}>
                    <div className={styles.imggroup}>
                      {item.tokenImage.map((titem, tindex) => (
                        <Image
                          src={titem.timage}
                          alt={titem.timage}
                          width={45}
                          height={45}
                          key={tindex}
                        />
                      ))}
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
                  {item.display === "show" && (
                    <div className={`${styles.group}`}>
                      <div className={styles.smallgrey}>{item.apysubtitle}</div>
                      <BsQuestionCircle color="#9299B7" size={15} />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>BEST TOTAL APY:</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.btn} onClick={() => handleOpen()}>
                    <BsDownload color="white" size={24} />
                    <div>Deposit</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
