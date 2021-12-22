import React from 'react'
import { useGlobalContext } from '../context'
const CocktailsList = () => {
    const { cocktails } = useGlobalContext();
    console.log(cocktails)
    return (
        <section className='section'>
            <h2 className="section-title">
                Cocktails
            </h2>
            <div className="cocktails-center">
                <article className='cocktail'>
                    <div className="img-container">
                        <img src="#" alt="#" />
                    </div>
                    <div className="cocktail-footer">
                        <h3>gg</h3>
                        <h4>collins glass</h4>
                        <p>optional alchohol</p>
                        <a href="#" className="btn btn-primary btn-details">details</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default CocktailsList
