import React from 'react';

import './styles/follow.css';
import follow1 from './image/follow-1.jpg';
import follow2 from './image/follow-2.jpg';
import follow3 from './image/follow-3.jpg';
import follow4 from './image/follow-4.jpg';
import follow5 from './image/follow-5.jpg';
import followcenter from './image/Follow Me Instagram.png';

export default function card() { 
    return(
            <>
                <div className="follow_me--image">
                <img src={followcenter} alt="" className="instagram" />
                        <div className="contenedor__imagenes">
                            <img src={follow1} alt="" className="follow-1" />
                            <img src={follow2} alt="" className="follow-2" />
                            <img src={follow3} alt="" className="follow-3" />
                            <img src={follow4} alt="" className="follow-4" />
                            <img src={follow5} alt="" className="follow-5" />
                        </div>
                </div>
            </>
    );
}
