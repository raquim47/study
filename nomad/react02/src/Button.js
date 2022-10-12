import PropTypes from "prop-types";
// module.css
import styles from "./Button.module.css";

function Button({text}){
  return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;