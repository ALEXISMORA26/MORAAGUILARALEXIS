import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    // <div classNameName="container">
    //   <nav classNameName="navbar navbar-expand-lg navbar-dark  bg-body-tertiary">
    //     <div classNameName="container-fluid">
    //       <a classNameName="navbar-brand" href="/">Sistema De Recursos Humanos</a>
    //       <button
    //         classNameName="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span classNameName="navbar-toggler-icon"></span>
    //       </button>
    //       <div classNameName="collapse navbar-collapse" id="navbarNav">
    //         <ul classNameName="navbar-nav">
    //           <li classNameName="nav-item">
    //             <a classNameName="nav-link active" aria-current="page" href="/">
    //               Inicio
    //             </a>
    //           </li>
    //           <li classNameName="nav-item">
    //             <Link classNameName="nav-link" to="/agregar">
    //               Agregar Empleado
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
<div className="container">


    <nav className="navbar navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Tiendita</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/acceder">Acceder</a>
          </li> */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sesión
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/acceder">Acceder</a></li>
              <li><a className="dropdown-item" href="/registrar">Registrarse</a></li>
              <li><a className="dropdown-item" href="/admin">Admin</a></li>
              
              {/* <li><a className="dropdown-item" href="#">Another action</a></li>
             
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/productos">Listar Productos</a></li>
              <li><a className="dropdown-item" href="/ordenes">Ordenes</a></li>
              {/* <li><a className="dropdown-item" href="/admin">Admin</a></li> */}
              
              {/* <li><a className="dropdown-item" href="#">Another action</a></li>
             
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>
          
        </ul>
        
      </div>
    </div>
  </div>
</nav>
</div>
  );
}
