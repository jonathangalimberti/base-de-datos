import React, {useEffect, useState} from "react";
import {collection, getDoc, deleteDoc, doc} from "firebase/firestore";
import {db} from "../firbaseConfig/firebase";
import {async} from "@firebase/utils";

export const Mostrar = ( ) => {

    //1- configuración de los hooks

    const [producto, setProductos] = useState([])

    //2- referencia a db de firebase

    const productosCollection = collection(db, "Productos")

    // 3- asincronismo a los datos

    

    return (
        <div>
            <p>hola</p>
        </div>
    );
}
