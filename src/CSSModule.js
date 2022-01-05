import styles from "./CSSModule.module.scss";
// classnames 사용
import classNames from "classnames/bind";

const cx = classNames.bind(styles); // 미리 styles 에서 클래스를 받아오도록 설정

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는
      <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
