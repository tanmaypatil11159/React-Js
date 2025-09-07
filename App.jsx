import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import React, {useState} from 'react';
import {createBroswerRouter, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBroswerRouter([
    {
      path: "/",
      element: <Textform/>
    },
    {
      path: "/about",
      element: <About/>
    },
  ])

  const [mode,setMode] = useState("light");
  const [text,setText] = useState("Dark Mode")

  const toggleMode = ()=> {
  if(mode === 'light') {
    setMode("dark")
    setText("Dark Mode")
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    showAlert("The Dark Mode Enabled","success")
  }
  else {
    setMode("light")
    setText("Light Mode")
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert("The Light Mode Enabled","success")
  }
}

    const [alert, setAlert] = useState(null)

    const showAlert = (message, type)=> {
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },3000)
    }



  return (
    <>
      <Navbar title="Tanmay" mode={mode} toggleMode={toggleMode} />
      
      <div style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
        <Alert alert={alert} />
      </div>

      <div className="container">
        <Textform name="Enter Text Below !" />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;

