import React from 'react';

import '../assets/styles/components/Favorites.scss';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FavoriteItem from '../components/FavoriteItem';

const Favorites = () => {
    return(
        <>
            <Navbar />
            <section className='Favorites'>
                <h1 className='Favorites__title'>Tus Favoritos</h1>
                <FavoriteItem />
                <FavoriteItem />
            </section>
        </>
    );
};

export default Favorites;