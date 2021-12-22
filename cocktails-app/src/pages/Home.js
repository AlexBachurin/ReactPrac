import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import CocktailsList from '../components/CocktailsList'
const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <SearchForm />
                <CocktailsList />
            </main>
        </>
    )
}

export default Home
