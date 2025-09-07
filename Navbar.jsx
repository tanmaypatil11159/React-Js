import React from 'react'
// import { a } from 'react-router-dom'
export default function Navbar(props) {
  let myle = {
    color: 'white'
  }


  return (

    <div>
      <nav className={`navbar navbar-expand-lg fixed-top bg-${props.mode}`} style={myle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/about">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-a disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            
            <div className={`form-check form-switch text-${props.mode}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label mx-3" for="switchCheckDefault">Dark Mode</label>
            </div>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

