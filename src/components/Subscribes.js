import React from 'react'
import "./styles/Subscribes.css"

export default function Subscribes(props) {
    return (
        <div class={props.data3.classSubs}>
            <img src={props.data3.imagen} alt="" class="imagenSubscribes"/>
            <text class="textoSubscribes">{props.data3.texto}</text>  
        </div>
    )
}