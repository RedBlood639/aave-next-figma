import React, { useState } from "react";
import Image from "next/image";

import BigDollor from "../../../assets/bigDollar.png";
import SmallDollor from "../../../assets/smallDollar.png";
import Down from "../../../assets/down.png";
import BlueDown from "../../../assets/downblue.png";
import Close from "../../../assets/close.png";
import { RiArrowUpDownLine } from "react-icons/ri";

import Modal from "../../../components/Modal";
import styles from "./tradeswap.module.css";
import mstyles from "../../../components/Modal/modal.module.css";
import { data } from "../../../components/data/tradeswap";
import { mdata } from "../../../components/data/swap";

const TradeSwap = () => {
  const [check, setCheck] = useState(true);
  const [flag, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = "Select a token";

  return (
    <div className={styles.tradeswap}>
      {flag && (
        <Modal onClick={handleClose} title={title}>
          <div className={mstyles.tsmodalbody}>
            <div className={mstyles.inputdiv}>
              <input
                type="text"
                className={mstyles.input}
                placeholder="Find a token by name or address"
              />
            </div>
            <div className={mstyles.border}></div>
            <div className={mstyles.scroll}>
              {mdata.map((item, index) => (
                <div className={mstyles.group1} key={index}>
                  <Image
                    src={item.image}
                    alt={item.image}
                    width={45}
                    height={45}
                  />
                  <div className={mstyles.column}>
                    <div className={mstyles.normal}>USDC</div>
                    <div className={mstyles.grey}>USD Coin</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.sell}>
            <div className={styles.label}>
              <div className={styles.normal}>Sell</div>
              <div className={styles.group}>
                <div className={styles.grey}>30 USDC</div>
                <div className={styles.max}>
                  <b>Max</b>
                </div>
              </div>
            </div>
            <div className={styles.inputdiv}>
              <input type="text" className={styles.input} />
              <div className={styles.mix}>
                <Image
                  src={BigDollor}
                  alt="BigDollor"
                  width={29.3}
                  height={29.3}
                />
                <div className={styles.normal}>USDC</div>
              </div>
            </div>
            <div className={styles.grey}>$1.00</div>
          </div>
          <div className={styles.subup}>
            <div className={styles.updown}>
              <RiArrowUpDownLine color="white" size={25} />
            </div>
          </div>
          <div className={styles.sell}>
            <div className={styles.label}>
              <div className={styles.normal}>Buy</div>
            </div>
            <div className={styles.inputdiv}>
              <input type="text" className={styles.input} />
              <div className={styles.mixcolor}>
                <Image
                  src={SmallDollor}
                  alt="SmallDollor"
                  width={19}
                  height={19}
                />
                <div className={styles.normal}>aDAI</div>
                <Image src={Down} alt="Down" width={7.5} height={3.75} />
                {/* <select className={styles.select}>
                                    <option>
                                        <div className={styles.normal}>USDC</div>
                                    </option>
                                </select> */}
              </div>
            </div>
            <div className={styles.grey}>$1.00</div>
          </div>
          <div className={styles.advanced}>
            <div className={styles.blue}>Advanced options</div>
            <Image src={BlueDown} alt="BlueDown" width={7.5} height={3.75} />
          </div>
          <div className={styles.sell}>
            <div className={styles.label}>
              <div className={styles.normal}>Maximum Slippage</div>
            </div>
            <div className={styles.inputdiv}>
              <input type="text" className={styles.input} />
              <div className={styles.mixcolor}>
                <Image
                  src={SmallDollor}
                  alt="SmallDollor"
                  width={19}
                  height={19}
                />
                <div className={styles.normal}>aDAI</div>
                <Image src={Down} alt="Down" width={7.5} height={3.75} />
              </div>
            </div>
          </div>
          <div className={styles.bmerge}>
            <label className={styles.switch}>
              <input type="checkbox" onChange={() => setCheck(!check)} />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <div className={styles.normal}>
              Show sell assets not currently owned
            </div>
          </div>
          <div className={styles.btn} onClick={() => handleOpen()}>
            Swap
          </div>
          <div className={styles.alert}>
            <Image src={Close} alt="Close" width={24} height={24} />
            <div className={styles.orange}>Could not construct transaction</div>
          </div>
          <div className={styles.total}>
            <div className={styles.left}>
              <div className={styles.normal}>Exchange</div>
              <div className={styles.normal}>Price</div>
              <div className={styles.normal}>Inverse Price</div>
              <div className={styles.normal}>Reference price*</div>
            </div>
            <div className={styles.right}>
              <div className={styles.normal}>ParaSwap V4</div>
              <div className={styles.normal}>1 USDC = 1.0016 aDAI</div>
              <div className={styles.normal}>1 aDAI = 0.9985 USDC</div>
              <div className={styles.normal}>1 USDC = 1.9985 aDAI</div>
            </div>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={`${styles.exchange} ${styles.normal}`}>
              EXCHANGE
            </div>
            <div className={`${styles.price} ${styles.normal}`}>PRICE</div>
            <div className={`${styles.amount} ${styles.normal}`}>AMOUNT</div>
            <div className={`${styles.ref} ${styles.normal}`}>VS.REF</div>
            <div className={`${styles.best} ${styles.normal}`}>VS.BEST</div>
          </div>
          <div className={styles.tbody}>
            {data.map((item, index) => (
              <div className={styles.tr} key={index}>
                <div className={`${styles.texchange} ${styles.normal}`}>
                  <div>
                    <Image
                      src={item.image}
                      alt={item.image}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div>{item.exchange}</div>
                </div>
                <div className={`${styles.tprice} ${styles.normal}`}>
                  {item.price}
                </div>
                <div className={`${styles.tamount} ${styles.normal}`}>
                  {item.amount}
                </div>
                <div className={`${styles.tref} ${styles.orange}`}>
                  {item.ref}
                </div>
                <div className={`${styles.tbest} ${styles[`${item.vsbest}`]} `}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeSwap;
