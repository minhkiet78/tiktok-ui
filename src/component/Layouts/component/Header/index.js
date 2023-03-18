import { useState, useRef, useContext } from "react";
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
import Context from "@/store/Context";
import Tippy from "@tippyjs/react/headless";
import Popper from "@/component/Popper";
import Account from "@/component/Account";
import MenuItem from "@/component/MenuItem";

const cx = classNames.bind(styles);
function Header() {
  const inputRef = useRef();
  const state = useContext(Context);
  const [searchResult, setSearchResult] = useState(state.listAccount);
  const [valueSearch, setValueSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState(false);

  const handleChangeSearch = (e) => {
    setValueSearch(e.target.value);
    setLoading(true);
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
        <Tippy
          visible={searchResult.length > 0}
          interactive
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <Popper>
                <h3 className={cx("list-account")}>Tài khoản</h3>
                {searchResult.map((item, idx) => (
                  <Account account={item} key={idx} />
                ))}
                {valueSearch.length > 0 && (
                  <span className={cx("action-footer")}>
                    Xem tất cả kết quả dành cho "{valueSearch}"
                  </span>
                )}
              </Popper>
            </div>
          )}
        >
          <div className={cx("inner_search")}>
            <input
              ref={inputRef}
              className={cx("input")}
              value={valueSearch}
              placeholder="Tìm kiếm tài khoản và video"
              onChange={(e) => handleChangeSearch(e)}
            />
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

            <button className={cx("action_search")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("inner_action")}>
          <Button variant="outline-primary" className={cx("action_upload")}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />
            <span>Tải lên</span>
          </Button>

          <Button variant="outline-primary" className={cx("action_login")}>
            Đăng nhập
          </Button>
          <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 500]}
            render={(attrs) => (
              <div className={cx("list-menu")} tabIndex="-1" {...attrs}>
                <Popper>
                  {state.listMenu.map((menu, idx) => (
                    <MenuItem key={idx} menu={menu} />
                  ))}
                </Popper>
              </div>
            )}
          >
            <span>
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className={cx("action_more")}
              />
            </span>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
