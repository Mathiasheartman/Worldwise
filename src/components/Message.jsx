import PropTypes from "prop-types";
import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      <span role="img">👋</span> {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Message;
