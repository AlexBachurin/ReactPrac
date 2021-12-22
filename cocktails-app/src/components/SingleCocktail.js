import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const SingleCocktail = ({ idDrink: id, strAlcoholic: alcholic, strGlass: glass, strDrinkThumb: img, strDrink: name }) => {
    const { resetTerm } = useGlobalContext();
    return (
        <article key={id} className='cocktail'>
            <div className="img-container">
                <img src={img} alt={name} />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{alcholic}</p>
                <Link onClick={resetTerm} to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</Link>
            </div>
        </article>
    )
}

export default SingleCocktail
