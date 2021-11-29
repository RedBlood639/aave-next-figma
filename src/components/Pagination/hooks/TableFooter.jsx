import React, { useEffect } from "react";

import pstyles from '../pagination.module.css'
import styles from "./tableFooter.module.css";

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <>
            {/* <div className={pstyles.previous} onClick={() => setPage(-1)}>previous</div> */}
            {
                range.map((el, index) => (
                    <div
                        key={index}
                        className={`normal ${styles.button} ${page === el ? styles.activeButton : styles.inactiveButton}`}
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </div>
                ))
            }
            {/* <div className={pstyles.next} onClick={() => setPage(1)}>next</div> */}
        </>
    );
};

export default TableFooter;