import React from "react";
import "./Alert.css";

export default function Alert(props) {
  return (
     props.showAlert && <div className="alert-container">
      <strong>Sucess</strong> {props.showAlert.message}
    </div>
  );
}
