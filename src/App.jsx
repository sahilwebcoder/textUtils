import { useState } from "react";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About"
// import { Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState({
    color: "white",
    backgroundColor: ['red', 'green', 'blue', 'yellow']
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      message: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleStyle = () => {
    if (mode.color === "black") {
      setMode({
        color: "white",
        backgroundColor: "black",
      });
      document.body.style.backgroundColor = "grey";
      setBtnText("Enable Light Mode");
      showAlert("Dark Mode has been Enabled");
    } else {
      setMode({
        color: "black",
        backgroundColor: "#7596df",
      });
      document.body.style.backgroundColor = "white";
      setBtnText("Enable Dark Mode");
      showAlert("Light Mode has been Enabled");
    }
  };

  return (
    <>
      <NavBar
        title="Sahil Web"
        contactUs="My Contact US"
        mode={mode}
        toggleStyle={toggleStyle}
        toggleBtn={btnText}
      />
      <Alert showAlert={alert} />
      
      
    
        <TextForm title="Enter Your Text Below" mode={mode} showAlert={showAlert}/>
              {/* <About /> */}
      
    </>
  );
}

export default App;
