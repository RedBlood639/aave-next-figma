import React from "react";
import Image from "next/image";

// import component
import Pagination from "./Pagination";

import data from "./data.json";

// import style
import styles from "./paginationpart.module.css";

// import image
import Divide from "../../assets/divide1.png";

const PaginationPart = () => {
  return (
    <div className={styles.paginationpart}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.totaltitle}>Total Market Size</div>
            <div className={styles.totalsize}>$ 117,604.11Y</div>
          </div>
          <div className={styles.right}>
            <div className={styles.usd}>USD</div>
            <Image src={Divide} alt="Divide" width={1} height={25.5} />
            <div className={styles.native}>Native</div>
          </div>
        </div>
      </div>
      <Pagination data={data} rowsPerPage={10} />
    </div>
  );
};

export default PaginationPart;
