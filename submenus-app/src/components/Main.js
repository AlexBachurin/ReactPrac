import React from 'react'
import { useGlobalContext } from '../context'
const Main = () => {
    const { closeSubmenu } = useGlobalContext();
    return (
        <section onMouseOver={closeSubmenu} className='hero'>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payments infrastructure
                        for the internet</h1>
                    <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                    <button className="btn">Start now</button>
                </article>
                <article className="hero-images">
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/e44b541e002fca44db1e07b2d0a5275824f6d0e6/13-stripe-submenus/setup/src/images/phone.svg" alt="phone" />
                </article>
            </div>
        </section>
    )
}

export default Main
