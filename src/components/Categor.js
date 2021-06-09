import React from 'react'
import "./styles/Categor.css"

export default function Categor(props) {
    return (
        <div class={props.data2.classImag}>
            <img src={props.data2.imagen} alt="" class="imagenCategor"/>
            <text class={`textoCategor ${props.data2.classTexto}`}>{props.data2.texto}</text>
        </div>
    )
}