import React from 'react';
import image from '../../utils/assets/product/blackberry.png'
import './Card.css'

const Card = () => {
    return (
        <article className='card'> 
            <div className='card__image-wrapper'>
                <img className='card__image' src={image} alt="Изображение напитка"/>  
            </div>                                                  
            <div className='card__name'>
                <h3 className='card__title'>
                    Blackberry
                </h3>
                <h4 className='card__subtitle'>
                    Освежающий напиток
                </h4>
            </div>  
            <div className='card__information'>
                <p className='card__information-value'>30%</p>
                <p className='card__information-title'>Алкоголь</p>
            </div>          
        </article>
    )
}

export default Card