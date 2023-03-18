import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { Fragment } from "react";
import Header from "../component/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);
function Defaultlayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("wrapper_container", "row")}>
          <Sidebar />
          <div className={cx("col-8")}>{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Defaultlayout;
