import { useState, useRef } from "react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "@/assets/images/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Spinner, Button } from "react-bootstrap";

const cx = classNames.bind(styles);
function Header() {
  const inputRef = useRef();
  const [valueSearch, setValueSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(false);

  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
    setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setAction(true);
    // }, 500);
  };

  const handleEndSearch = () => {
    setValueSearch("");
    inputRef.current.focus();
    setAction(false);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo.default} className={cx("logo")} alt="tiktok" />
        <div className={cx("inner_search")}>
          <input
            ref={inputRef}
            className={cx("input")}
            value={valueSearch}
            placeholder="Tìm kiếm tài khoản và video"
            onChange={(e) => handleChangeSearch(e)}
          />
          {/* loading */}
          {loading && valueSearch !== "" && (
            <Spinner animation="border" size="sm" />
          )}
          {action && valueSearch !== "" && (
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={cx("icon-close")}
              onClick={handleEndSearch}
            />
          )}

          {/*  */}
          <button className={cx("action_search")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("inner_action")}>
          <Button variant="outline-primary" className={cx("action_upload")}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
            <span>Tải lên</span>
          </Button>

          <Button variant="outline-primary" className={cx("action_login")}>
            Đăng nhập
          </Button>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className={cx("action_more")}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
