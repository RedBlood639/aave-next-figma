import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./main.module.css";
import { FiSearch } from "react-icons/fi";
import Down from "../../../assets/down.png";
import { data } from "../../../components/data/main";

const Yield = () => {
  const router = useRouter();

  const [tbl_data, setTbl_data] = useState(data);

  const overMouse = (index) => {
    const tempData = [...tbl_data];
    tempData[index].enter = true;
    setTbl_data(tempData);
  };

  const outMouse = (index) => {
    const tempData = [...tbl_data];
    tempData[index].enter = false;
    setTbl_data(tempData);
  };

  const downMouse = (index) => {
    const tempData = [...tbl_data];
    tempData[index].enter = false;
    setTbl_data(tempData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>Available markets</div>
        <div className={styles.inpgroup}>
          <div className={styles.mixgroup}>
            <div className={styles.inputdiv}>
              <FiSearch size={18} color="white" />
              <input type="text" className={styles.input} />
            </div>
            <select className={styles.select}>
              <option disabled={""}>Filter by protocols</option>
              <option>AAVE</option>
              <option>Enzyme</option>
            </select>
          </div>
          <div className={styles.selectdiv}>
            <select className={styles.select}>
              <option disabled={""}>Filter by protocols</option>
              <option>AAVE</option>
              <option>Enzyme</option>
            </select>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.namegroup}>
              <div className={styles.smallnormal}>Name</div>
            </div>
            <div className={styles.protocolgroup}>
              <div className={styles.smallnormal}>Available Protocols</div>
            </div>
            <div className={styles.balancegroup}>
              <div className={styles.smallnormal}>Balance</div>
              <Image src={Down} alt="Down" width={11} height={6} />
            </div>
            <div className={styles.apygroup}>
              <div className={styles.smallnormal}>Best Total APY</div>
            </div>
          </div>
          <div className={styles.tbody}>
            {tbl_data.map((item, index) => (
              <div className={styles.tr} key={index}>
                <div className={styles.namegroup}>
                  <Image
                    src={item.nameImage}
                    alt={item.nameImage}
                    width={45}
                    height={45}
                  />
                  <div className={styles.lblgroup}>
                    <div className={styles.normal}>{item.title}</div>
                    <div className={styles.smallgrey}>{item.subtitle}</div>
                  </div>
                </div>
                <div className={styles.protocolgroup}>
                  {item.protocolImage.map((pitem, index) => (
                    <div key={index}>
                      <Image
                        src={pitem.pimage}
                        alt={pitem.pimage}
                        width={37.5}
                        height={37.5}
                      />
                    </div>
                  ))}
                </div>
                <div className={styles.balancegroup}>
                  <div className={styles.normal}>{item.balance}</div>
                </div>
                <div
                  className={styles.apygroup}
                  onMouseEnter={() => overMouse(index)}
                  onMouseLeave={() => outMouse(index)}
                >
                  {item.enter && (
                    <div
                      className={styles.btn}
                      onClick={() => {
                        downMouse(index);
                        router.push("/enz/yield/continue");
                      }}
                    >
                      Explore
                    </div>
                  )}
                  {!item.enter && (
                    <div className={styles.normal}>{item.apy}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.htable}>
          {tbl_data.map((item, index) => (
            <div className={styles.hsubtable} key={index}>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>NAME:</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.namegroup}>
                    <Image
                      src={item.nameImage}
                      alt={item.nameImage}
                      width={45}
                      height={45}
                    />
                    <div className={styles.lblgroup}>
                      <div className={styles.normal}>{item.title}</div>
                      <div className={styles.smallgrey}>{item.subtitle}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>AVAILABLE PROTOCOLS:</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.protocolgroup}>
                    {item.protocolImage.map((pitem, index) => (
                      <div key={index}>
                        <Image
                          src={pitem.pimage}
                          alt={pitem.pimage}
                          width={37.5}
                          height={37.5}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>BALANCE:</div>
                </div>
                <div className={styles.right}>
                  <div className={styles.normal}>{item.balance}</div>
                </div>
              </div>
              <div className={styles.htr}>
                <div className={styles.left}>
                  <div className={styles.normal}>BEST TOTAL APY:</div>
                </div>
                <div className={styles.right}>
                  <div
                    className={styles.apygroup}
                    onMouseOver={() => overMouse(index)}
                    onMouseOut={() => outMouse(index)}
                  >
                    {item.enter && (
                      <div
                        className={styles.btn}
                        onClick={() => {
                          downMouse(index);
                          router.push("/enz/yield/continue");
                        }}
                      >
                        Explore
                      </div>
                    )}
                    {!item.enter && (
                      <div className={styles.normal}>{item.apy}</div>
                    )}
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

export default Yield;
