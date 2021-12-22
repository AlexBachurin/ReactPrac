import React from 'react'

const SingleCocktail = ({ idDrink: id, strAlcoholic: alcholic, strGlass: glass, strDrinkThumb: img, strDrink: name }) => {
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
}

export default SingleCocktail
