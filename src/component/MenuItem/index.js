import styles from "./MenuItem.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function MenuItem({ menu }) {
  return (
    <div className={cx("wrapper")}>
      <FontAwesomeIcon icon={menu.icon} className={cx("icon")} />
      <p>{menu.title}</p>
    </div>
  );
}

export default MenuItem;
