import React from 'react';
import FollowMe from './FollowMe';
import Latest from './LatestRecipes';

import './styles/Card.css'


export default function card() {
    return (
        <>
                
                    <section className="cards-container" id="app">
                        <div className="card">
                            <div className="hero-seation">
                                <div className="menu-container">
                                    <div className="menu-left">
                                        FooBlo
                                    </div>
                                    <div className="menu-center">
                                        <div className="menu-center-home">
                                            Home
                                        </div>
                                        <div className="menu-center-recipes">
                                            Recipes
                                        </div>
                                        <div className="menu-center-Pages">
                                            Pages
                                        </div>
                                        <div className="menu-center-AboutMe">
                                            About Me
                                        </div>
                                        <div className="menu-center-Blog">
                                            Blog
                                        </div>
                                        <div className="menu-center-Contact">
                                            Contact
                                        </div>
                                    </div>
                                    <div className="menu-right">
                                            <img src="https://i.servimg.com/u/f40/20/34/56/97/search10.jpg" alt="" id="lupa"/>
                                        <div className="rectangulo">
                                            <div className="rectangulo-text">
                                                Hit enter to search
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="card-Backgroud-Image">
                                        <img src="https://i.servimg.com/u/f40/20/34/56/97/backgr11.jpg" alt=""/>
                                        <div className="content-image-center">
                                            <div className="card-texto">
                                                Mexican Grilled <br/> Corn Recipe
                                            </div>
                                            <div className="card-tree-dates">
                                                <div className="restaurant">
                                                    <img src="https://i.servimg.com/u/f40/20/34/56/97/restau10.png" alt=""/>
                                                </div>
                                                <div className="restaurant-text" >
                                                        4 Servicing
                                                </div>
                                                <div className="clock">
                                                    <img src="https://i.servimg.com/u/f40/20/34/56/97/clock_10.png" alt=""/>
                                                </div>
                                                <div className="clock-text">
                                                    40 Minute
                                                </div>
                                                <div className="user">
                                                    <img src="https://i.servimg.com/u/f40/20/34/56/97/user_110.png" alt=""/>
                                                </div>
                                                <div className="user-text">
                                                    Luice Fonci
                                                </div>
                                            </div>
                                            <div className="card-view-recipes">
                                                <div className="texto-view-recipes">
                                                    View Recipes
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="footer-imagens">
                                    <div className="imguno">
                                        <img src="https://i.servimg.com/u/f40/20/34/56/97/rectan10.png" alt=""/>
                                    </div>
                                    <div className="imgdos">
                                        <img src="https://i.servimg.com/u/f40/20/34/56/97/rectan11.png" alt=""/>
                                    </div>
                                    <div className="imgtres">
                                        <img src="https://i.servimg.com/u/f40/20/34/56/97/rectan12.png" alt=""/>
                                    </div>
                                    <div className="imgcuatro">
                                        <img src="https://i.servimg.com/u/f40/20/34/56/97/rectan13.png" alt=""/>
                                    </div>
                                </div>
                                <Latest/>
                                <FollowMe />
                               
                            </div>
                        </div>
                    </section>
              </>
    )
};
