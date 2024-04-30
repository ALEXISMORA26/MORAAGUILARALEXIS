import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function HacerOrden() {

    let navegacion = useNavigate();
    axios.interceptors.request.use(function(config){
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`
        return config;
      });
    
    const [orden, setEmpleado] = useState({
        orderItems: JSON.parse(localStorage.getItem("pedido")),
        shippingAddress1:"",
    shippingAddress2: "",
    city: "",
    zip: "",
    country: "",
    phone: ""
    })

    // console.log(orden);

    const {shippingAddress1,shippingAddress2,city,zip,country,phone} = orden

    const onInputChange = (e) => {
        // spreed  operador ...
        setEmpleado({...orden,[e.target.name]:e.target.value })
    }

    const onSubmint = async (e) => {
        // para evitar que los parametros se pongan en el url
        e.preventDefault()
        
        const urlBase = "http://localhost:3001/api/v1/orders";
        // orden.orderItems = localStorage.getItem("pedido");
        // console.log(orden);
        await axios.post(urlBase,orden);

        alert('pago exitoso')
        vaciarCarrito();
        navegacion('/');

    }

    const vaciarCarrito = async  (id) => {
        // const urlBase = "http://localhost:3001/api/v1/products";
        let productosEnCarrito = localStorage.getItem("productos-en-carrito");
        productosEnCarrito = JSON.parse(productosEnCarrito);
        
        productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        
        //

        let productosEnCarritoo = localStorage.getItem("pedido");
        productosEnCarritoo = JSON.parse(productosEnCarritoo);
        
        productosEnCarritoo.length = 0;
        localStorage.setItem("pedido", JSON.stringify(productosEnCarritoo));
        
        
        
        
            // await axios.delete(`${urlBase}/${id}`);
    //    localStorage.clear();
        // alert('Carrito eliminado correctamente')
        // cargarProductos();
        // navegacion('/')

      }

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Finalizar compra</h3>
        </div>
        <form  onSubmit={(e) => onSubmint(e)} >
            <div className="mb-3">
                <label htmlFor="shippingAddress1" className="form-label">Calle</label>
                <input type="text" className="form-control" id="shippingAddress1" name='shippingAddress1' required={true} 
                onChange={(e)=>onInputChange(e)} value={shippingAddress1}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="shippingAddress2" className="form-label">Número Exterior</label>
                <input type="text" className="form-control" id="shippingAddress2" name='shippingAddress2' 
                onChange={(e)=>onInputChange(e)} value={shippingAddress2}/>
            </div>

            <div className="mb-3">
                <label htmlFor="city" className="form-label">Ciudad</label>
                <input type="text" className="form-control" id="city" name='city' 
                onChange={(e)=>onInputChange(e)} value={city}/>
            </div>

            <div className="mb-3">
                <label htmlFor="zip" className="form-label">CP</label>
                <input type="text" className="form-control" id="zip" name='zip' 
                onChange={(e)=>onInputChange(e)} value={zip}/>
            </div>

            <div className="mb-3">
                <label htmlFor="country" className="form-label">Pais</label>
                <input type="text" className="form-control" id="country" name='country' 
                onChange={(e)=>onInputChange(e)} value={country}/>
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Telefono</label>
                <input type="text" className="form-control" id="phone" name='phone' 
                onChange={(e)=>onInputChange(e)} value={phone}/>
            </div>

            {/* <div className="mb-3">
                <label htmlFor="city" className="form-label">Ciudad</label>
                <input type="number" step="any" className="form-control" id="sueldo" name='sueldo' 
                onChange={(e)=>onInputChange(e)} value={sueldo}/>
            </div> */}
            <div className='text-center'>
            <button  type="submit" className="btn btn-primary btn-sm me-3">Pagar</button>
            <a href='/carrito' className='btn btn-danger btn-sm' >Regresar</a>
            </div>
        </form>
    </div>
    // <div></div>
  )
}
