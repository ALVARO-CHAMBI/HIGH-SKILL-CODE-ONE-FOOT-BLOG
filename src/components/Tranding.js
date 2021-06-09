import React from 'react'
import "./styles/Tranding.css"

export default function Tranding(props) {
    return (
        <div class={props.data4.classImag}>
            <img src={props.data4.imagen} alt="" class=""/>
            <text class={`tituloTrandingImg ${props.data4.classTitulo}`} >{props.data4.titulo}</text>
            <div class="grupoTranding">
                <text class="texto1">By</text>
                <text class="texto2">Luice Fonci</text>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/user_110.png" alt="" class="imagen"/>    
            </div>    
        </div>
    )
}