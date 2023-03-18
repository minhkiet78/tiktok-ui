import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("wrapper", "col-4")}>
      <h2>Side bar</h2>
    </div>
  );
}

export default Sidebar;
