import React from 'react';

import './styles/latest.css';
import recipes1 from './image/Recipes-1.jpg';
import recipes2 from './image/Recipes-2.jpg';
import recipes3 from './image/Recipes-3.jpg';
import recipes4 from './image/Recipes-4.jpg';
import recipes5 from './image/Recipes-5.jpg';
import recipes6 from './image/Recipes-6.jpg';
import line1 from './image/line-1.jpg';
import numeros from './image/numeros.jpg';

export default function card() { 
    return(
            <>
                <div className="Latest-Recipes">
                    <p className="title">Latest Recipes</p>
                    <img src={line1} alt="" className="line-1" />
                            <img src={recipes1} alt="" className="recipes-1" />
                            <img src={recipes2} alt="" className="recipes-2" />
                            <img src={recipes3} alt="" className="recipes-3" />
                            <img src={recipes4} alt="" className="recipes-4" />
                            <img src={recipes5} alt="" className="recipes-5" />
                            <img src={recipes6} alt="" className="recipes-6" />
                    <img src={numeros} alt="" className="numeros" />
                </div>
            </>
    );
}
