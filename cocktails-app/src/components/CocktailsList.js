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
                {cocktails.map(cocktail => {
                    const { idDrink: id, strAlcoholic: alcholic, strGlass: glass, strDrinkThumb: img, strDrink: name } = cocktail;
                    return (
                        <article key={id} className='cocktail'>
                            <div className="img-container">
                                <img src={img} alt={name} />
                            </div>
                            <div className="cocktail-footer">
                                <h3>{name}</h3>
                                <h4>{glass}</h4>
                                <p>{alcholic}</p>
                                <a href="" className='btn btn-primary btn-details'>details</a>
                            </div>
                        </article>
                    )

                })}
            </div>
        </section>
    )
}

export default CocktailsList
