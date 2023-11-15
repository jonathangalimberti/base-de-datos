import React, {useEffect, useState} from "react";
import {collection, getDoc, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../firbaseConfig/firebase";
import {async} from "@firebase/utils";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)

export const Mostrar = ( ) => {

    //1- configuración de los hooks

    const [productos, setProductos] = useState([])

    //2- referencia a db de firebase

    const productosCollection = collection(db, "Productos")

    // 3- asincronismo a los datos

    const getProductos = async ()=>{
        const data = await getDocs(productosCollection);
        setProductos(
            data.docs.map((doc)=>(
              { ...doc.data(), id:doc.id}
            ))
            )
    }

    //4- useEfect

     useEffect(()=>{
        getProductos();
     }, [])

     //5-borrado del registro

     const deleteProducto = async (id) => {
        const productoDoc = doc(db, "Productos", id)
        await deleteDoc(productoDoc);
        getProductos()
     }

     //5- configuracion sweetAlert

     const confirmDelete = (id) => {
        Swal.fire({
            title: "¿Quieres eliminar el producto?",
            text: "El borrado será permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "El archivo no fue borrado"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProducto(id)

              Swal.fire({
                title: "Borrado",
                text: "El archivo fue borrado",
                icon: "success"
              });
            }
          });
     }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link>falta el link a productos</Link>
                    </div>
                    <table className="table table-dark ">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Stock</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-light">
                            {
                                productos.map((product) =>(
                                    <tr key= {product.id}>
                                        <td key={product.nombre} className=" text-light ">{product.nombre || ""}</td>
                                        <td key={product.precio} className=" text-light ">{product.precio || ""}</td>
                                        <td key={product.stock} className=" text-light ">{product.stock || ""}</td>
                                        <td >
                                            <Link> ruta a editar</Link>
                                            <button className="bg-danger " onClick={()=> {confirmDelete(product.id)}}><i className="fa-solid fa-solid fa-trash" ></i></button>
                                        </td>
                                       
                                    </tr>
                                ) )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
