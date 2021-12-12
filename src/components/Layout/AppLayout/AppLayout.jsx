import React, { useEffect } from "react";

import { useRouter } from "next/router";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EnzHeader from "../EnzHeader";
import ScrollTop from "../../ScrollTop";

import styles from "./applayout.module.css";

const AppLayout = (props) => {
  const router = useRouter();
  const [flag, setFlag] = React.useState(false);

  useEffect(() => {
    if (router.route.split("/")[1] === "enz") setFlag(true);
    else setFlag(false);
  }, [router.route]);

  return (
    <>
      {flag ? <EnzHeader /> : <Header />}
      <div className={styles.container}>{props.children}</div>
      {/* <ScrollTop /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
