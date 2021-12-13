import { useState } from "react";
import Image from "next/image";

import useTable from "./hooks/useTable";
// import TableFooter from "./hooks/TableFooter";

import tstyles from "./table.module.css";
import pstyles from "./pagination.module.css";

import DAI from "../../assets/dai.png";
import Divide from "../../assets/divide1.png";
import Down from "../../assets/down.png";

const Pagination = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div className={tstyles.tablepagination}>
      <div className={tstyles.container}>
        <div className={tstyles.table} id="table">
          {/* table head */}
          <div className={tstyles.thead}>
            <div className={tstyles.hassets}>
              <div className={tstyles.htassets}>Assets</div>
              <div className={tstyles.image}>
                <Image src={Down} alt="Down" width={11} height={6} />
              </div>
            </div>
            <div className={tstyles.hmarket}>
              <div className={tstyles.htmarket}>Market size</div>
              <div className={tstyles.image}>
                <Image src={Down} alt="Down" width={11} height={6} />
              </div>
            </div>
            <div className={tstyles.htotal}>
              <div className={tstyles.httotal}>
                Total <br /> borrowed
              </div>
              <div className={tstyles.image}>
                <Image src={Down} alt="Down" width={11} height={6} />
              </div>
            </div>
            <div className={tstyles.hcommission}>
              <div className={tstyles.htcommission}>
                Profit <br /> Commission <br /> Rate
              </div>
              <div className={tstyles.image}>
                <Image src={Down} alt="Down" width={11} height={6} />
              </div>
            </div>
            <div className={tstyles.hsharing}>
              <div className={tstyles.htsharing}>
                Profit <br /> Sharing <br /> Rate
              </div>
              <div className={tstyles.image}>
                <Image src={Down} alt="Down" width={11} height={6} />
              </div>
            </div>
          </div>
          {/* table body */}
          {slice.map((item, index) => (
            <div className={tstyles.tr} key={index}>
              <div className={tstyles.assets}>
                <div className={tstyles.image}>
                  <Image src={DAI} alt="DAI" width={36} height={36} />
                </div>
                <div className={tstyles.title}>{item.assets}</div>
              </div>
              <div className={tstyles.market}>{item.size}</div>
              <div className={tstyles.total}>{item.total}</div>
              <div className={tstyles.commission}>{item.commission}</div>
              <div className={tstyles.sharing}>{item.sharing}</div>
            </div>
          ))}
        </div>
        <div className={pstyles.pagination}>
          <div className={pstyles.previous}>previous</div>
          <div className={pstyles.input}>
            <input type="text" className={pstyles.pageinput} />
          </div>
          {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
          <div className={pstyles.normal}>1</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>2</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>3</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>4</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>5</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>...</div>
          <div className={pstyles.divide}>
            <Image src={Divide} alt="Divide" width={1} height={36} />
          </div>
          <div className={pstyles.normal}>12</div>
          <div className={pstyles.next}>next</div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
