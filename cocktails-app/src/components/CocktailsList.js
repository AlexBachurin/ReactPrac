import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import SearchError from './SearchError';
import SingleCocktail from './SingleCocktail';
const CocktailsList = () => {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    if (cocktails.length === 0) {
        return <SearchError />
    }
    return (
        <section className='section'>
            <h2 className="section-title">
                Cocktails
            </h2>
            <div className="cocktails-center">
                {cocktails.map(cocktail => {
                    return (
                        <SingleCocktail key={cocktail.idDrink} {...cocktail} />
                    )
                })}
            </div>
        </section>
    )
}

export default CocktailsList
