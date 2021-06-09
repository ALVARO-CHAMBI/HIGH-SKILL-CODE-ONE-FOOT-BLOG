import React from 'react'
import "./styles/LastRecipes.css"

export default function Most(props) {
    return (
        <div class={props.data1.classImag}>
            <img src={props.data1.imagen} alt="" class="lastImgReceta"/>
            <text class="tituloLast" >{props.data1.titulo}</text>
            <div class="grupoImagLast">
                <text class="textoLast texto1">{props.data1.texto1}</text>
                <text class="textoLast texto2">{props.data1.texto2}</text>
                <text class="textoLast texto3">{props.data1.texto3}</text>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/restau10.png" alt="" class="iconosLast img1"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/clock_10.png" alt="" class="iconosLast img2"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/user_110.png" alt="" class="iconosLast img3"/>    
            </div>    
        </div>
    )
}