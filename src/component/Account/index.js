import styles from "./Account.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Account({ account }) {
  return (
    <div className={cx("account", "d-flex")}>
      <img src={account.image} className={cx("image-account")} alt="avatar" />
      <div className={cx("group-name")}>
        <p>
          <span className={cx("name")}>{account.name}</span>
          {account.check && (
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={cx("icon-check")}
            />
          )}
        </p>
        <p className={cx("sub-name")}>{account.sub_name}</p>
      </div>
    </div>
  );
}

export default Account;
