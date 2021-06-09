import React from 'react'
import Most from "./Most";
import LastRecipes from "./LastRecipes"
import Categor from "./Categor"
import Subscribes from "./Subscribes"
import Tranding from "./Tranding"
import getContentMost from "./../assets/getContentMost"
import getContentLastRecipes from "./../assets/getContentLastRecipes"
import getContentCategor from "./../assets/getContentCategor"
import getContentSubscribes from "./../assets/getContentSubscribes"
import getContentTranding from "./../assets/getContentTranding"
import "./styles/Blog.css"

export default function Blog() {
    const data = getContentMost();
    const data1 = getContentLastRecipes();
    const data2 = getContentCategor();
    const data3 = getContentSubscribes();
    const data4 = getContentTranding();
    return (
        <div class="principal">
            <div class="fotter">
                <div class="about">
                    <text class="tituloFotter">About</text>
                    <text class="textoFotter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat posuere mauris ac scelerisque. Gravida id dui arcu nibh </text>
                </div>
                <div class="archives">
                    <text class="tituloFotter">Archives</text>
                    <text class="text1 textoFotter">Jun 2019</text>
                    <text class="text2 textoFotter">Jun 2018</text>
                    <text class="text3 textoFotter">Jun 2017-14</text>
                    <circulo class="cir1 circuloFotter"></circulo>
                    <circulo class="cir2 circuloFotter"></circulo>
                    <circulo class="cir3 circuloFotter"></circulo>
                </div>
                <div class="recipe">
                    <text class="tituloFotter">Recipes</text>
                    <text class="text1 textoFotter">Browse Recipes</text>
                    <text class="text2 textoFotter">Recipe Page</text>
                    <text class="text3 textoFotter">Submit Recipe</text>
                    <circulo class="cir1 circuloFotter"></circulo>
                    <circulo class="cir2 circuloFotter"></circulo>
                    <circulo class="cir3 circuloFotter"></circulo>
                </div>
                <div class="newsletter">
                    <div class="suscripcion">
                        <text class="email">Your email address</text>
                        <div>
                            <text class="subs">Subscribe</text>
                        </div>
                    </div>
                    <text class="tituloFotter">Newsletter</text>
                    <text class="textoFotter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat posuere mauris </text>
                </div>
                <div class="copyright">
                    <text>Copyright 2020 by ojjomedia. All Rights Reserved</text>
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/frame10.png" alt="" class="imagenCopyright"/>
                </div>
            </div>
            <div class="followMe">
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_23.jpg" alt="" class="imagen1 imagen"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_24.jpg" alt="" class="imagen2 imagen"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_22.jpg" alt="" class="imagen3 imagen"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_25.jpg" alt="" class="imagen4 imagen"/>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_26.jpg" alt="" class="imagen5 imagen"/>
                <div class="suscribIns">
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/instag10.png" alt="" class="logoIns"/>
                    <text class="foll">Follow me</text>
                    <text class="instagram">Instagram</text>
                </div>
            </div>
            <div class="tranding">
                <text class="tituloTranding">Tranding Recipes</text>
                <div class="lineaNormal"></div>
                <div class="lineaRoja"></div>
                {data4.map((trand)=>{
                    return <Tranding data4={trand}/>
                })}
            </div>
            <div class="recipes">
                <text class="titulo">Latest Recipes </text>
                <div class="lineaRoja"></div>
                <div class="lineaNormal"></div>
                <div class="imagenes">
                    {data1.map((last)=>{
                        return <LastRecipes data1={last}/>
                    })}
                </div>
                <text class="texto t1">1</text>
                <text class="texto t2">2</text>
                <text class="texto t3">3</text>
                <div class="vector"></div>
            </div>
            <div class="updates">
                <text class="tituloUpdates">Get Latest Updates</text>
                <div class="direccionEmail">
                    <text class="texto">Your email address</text>
                </div>
                <div class="suscribirseUpdates">
                    <text class="texto">Subscribe</text>
                </div>
            </div>
            <div class="ad">
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image_27.jpg" alt="" class="imagenAdd"/>
                <text class="textoAdd">Ad</text>
            </div>
            <div class="subscribe">
                <text class="tituloSubscribe">Subscribe & Follow</text>
                <div class="lineaNormal"></div>
                <div class="lineaRoja"></div>
                {data3.map((subsc)=>{
                    return <Subscribes data3={subsc}/>
                })}
            </div>
            <div class="authori">
                <text class="nombreAutor">Luice Fonci</text>
                <text class="descripcionAutor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, cursus velit commodo</text>
                <text class="tituloAutor">Author</text>
                <img src="https://i78.servimg.com/u/f78/20/31/61/87/image10.png" alt="" class="imagenAutor"/>
                <div class="lineaNormal"></div>
                <div class="lineaRoja"></div>
            </div>
            <div class="categoris">
                {data2.map((categor)=>{
                    return <Categor data2={categor}/>
                })}
            </div>
            <div class="mostRecipes">
                <text class="titulo">Most Popular Recipes</text>
                <div class="lineaRoja"></div>
                <div class="lineaNormal"></div>
                <div class="imagenes">
                    {data.map((most)=>{
                        return <Most data={most}/>
                    })}
                </div>
                <text class="texto t1">1</text>
                <text class="texto t2">2</text>
                <text class="texto t3">3</text>
                <div class="vector"></div>
            </div>
            <div class="hero">
                <div class="fondo"></div>
                <div class="menu">
                    <text class="logo">FooBlo</text>
                    <text class="textoMenu home">Home</text>
                    <text class="textoMenu recipes">Recipes</text>
                    <text class="textoMenu pages">Pages</text>
                    <text class="textoMenu about">About Me</text>
                    <text class="textoMenu blog">Blog</text>
                    <text class="textoMenu contact">Contact</text>
                    <div class="buscar">
                        <vector class="circulo"></vector>
                        <vector class="palo"></vector>
                        <text>Hit enter to search</text>
                    </div>
                </div>
                <div class="mexican">
                    <div class="grupo6">
                        <text class="texto texto1">4 Servicing</text>
                        <text class="texto texto2">40 Minute</text>
                        <text class="texto texto3">Luice Fonci</text>
                        <img src="https://i78.servimg.com/u/f78/20/31/61/87/restau10.png" alt="" class="imagenHero1"/>
                        <img src="https://i78.servimg.com/u/f78/20/31/61/87/clock_10.png" alt="" class="imagenHero2"/>
                        <img src="https://i78.servimg.com/u/f78/20/31/61/87/user_110.png" alt="" class="imagenHero3"/>
                    </div>
                    <div class="viewRecipes">
                        <text>View Recipes</text>
                    </div>
                    <text class="titulo">Mexican Grilled Corn Recipe</text>
                </div>
                <div class="imagenes">
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/rectan13.jpg" alt="" class="imagen1 imagin"/>
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/rectan10.jpg" alt="" class="imagen2 imagin"/>
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/rectan12.jpg" alt="" class="imagen3 imagin"/>
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/rectan11.jpg" alt="" class="imagen4 imagin"/>
                </div>
                
            </div>
        </div>
    )
}
