import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegacion from "./plantilla/Navegacion";
// import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleados from "./empleados/EditarEmpleados";
import Acceder from "./empleados/Acceder";
// import Registar from "./empleados/registar";
import Registrar from "./empleados/Registrar";
import ListarProductos from "./productos/ListarProductos";
import ListarOrdenes from "./ordenes/ListarOrdenes";
import EditarProductos from "./productos/EditarProductos";
import Listar from "./productos/Listar";
import Carrito from "./ordenes/Carrito";
import HacerOrden from "./ordenes/HacerOrden";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navegacion/>
      <Routes>
        {/* <Route exact path="/admin" element={<ListadoEmpleados/>}/>
        <Route exact path="/agregar" element={<AgregarEmpleado/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleados/>}/> */}
        <Route exact path="/" element={<Listar/>}/>
        <Route exact path="/acceder" element={<Acceder/>}/>
        <Route exact path="/registrar" element={<Registrar/>}/>
        <Route exact path="/admin" element={<ListadoEmpleados/>}/>
        <Route exact path="/editar/:id" element={<EditarEmpleados/>}/>
        <Route exact path="/Productos" element={<ListarProductos/>}/>
        <Route exact path="/Productos/editar/:id" element={<EditarProductos/>}/>
        <Route exact path="/ordenes" element={<ListarOrdenes/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/hacerOrden" element={<HacerOrden/>}/>



      </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;
