import React from 'react'
import "./styles/Most.css"

export default function Most(props) {
    return (
        <div class={props.data.classImag}>
            <img src={props.data.imagen} alt="" class={props.data.classImgReceta}/>
            <text class={`tituloMost ${props.data.classTitulo}`} >{props.data.titulo}</text>
            <div class={props.data.classGrupoImag}>
                <text class={`textoMost ${props.data.classTexto1}`}>{props.data.texto1}</text>
                <text class={`textoMost ${props.data.classTexto2}`}>{props.data.texto2}</text>
                <text class={`textoMost ${props.data.classTexto3}`}>{props.data.texto3}</text>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/restau10.png" alt="" class={`iconosMost ${props.data.classImg1}`}/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/clock_10.png" alt="" class={`iconosMost ${props.data.classImg2}`}/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/user_110.png" alt="" class={`iconosMost ${props.data.classImg3}`}/>    
            </div>    
        </div>
    )
}
