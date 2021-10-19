import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from 'react-dom';

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onCancelClick}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return <Fragment>
      {ReactDOM.createPortal(<Backdrop onCancelClick={props.onCancelClick}></Backdrop>,document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlays'))}
  </Fragment>
}
export default Modal;
