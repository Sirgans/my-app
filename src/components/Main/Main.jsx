import React from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'

const Main = () => {
    return (
        <main className="main">
            <div className="container">   
                <section className='cards'>
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                    <Card />                                                          
                </section>                         
            </div>
        </main>
    )
}

export default Main