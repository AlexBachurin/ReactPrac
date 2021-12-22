import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SingleCocktailPage = () => {
    //get id for clicked elemet
    const { id } = useParams();
    //state for loading and singlecocktail
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    //fetch single cocktail by id
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    console.log(id);
    const getCocktail = async () => {
        try {
            setLoading(true);
            const res = await fetch(url);
            const data = await res.json();
            const { drinks } = data;
            //check if we have something in response array
            if (drinks) {
                setLoading(false);
                //destructure and rename for better use
                const
                    {
                        strDrink: name,
                        strCategory: category,
                        strAlcoholic: alcoholic,
                        strGlass: glass,
                        strInstructions: instructions,
                        strDrinkThumb: img,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    } = drinks[0];
                //add ingredients to array
                const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];
                //create new cocktail with this properties
                const newCocktail = { name, category, alcoholic, glass, instructions, img, ingredients };
                setCocktail(newCocktail);
            }
            else {
                setCocktail(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        getCocktail();
    }, [id])
    //check if cocktail is not null
    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    } else {
        const { name, category, alcoholic, glass, instructions, img, ingredients } = cocktail;
        return (
            <>
                <Navbar />
                <section className='cocktail-section section'>
                    <Link to='/' className='btn btn-primary'>Back home</Link>
                    <h2 className='section-title'>{name}</h2>
                    <div className="drink">
                        <img src={img} alt={name} />
                        <div className="drink-info">
                            <p>
                                <span className='drink-data'>name:</span> {name}
                            </p>
                            <p>
                                <span className='drink-data'>category:</span> {category}
                            </p>
                            <p>
                                <span className='drink-data'>info:</span> {alcoholic}
                            </p>
                            <p>
                                <span className='drink-data'>glass:</span> {glass}
                            </p>
                            <p>
                                <span className='drink-data'>instructions:</span> {instructions}
                            </p>
                            <p>
                                <span className='drink-data'>ingredients:</span> {ingredients.join(' ')}
                            </p>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default SingleCocktailPage
