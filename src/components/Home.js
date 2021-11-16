import React from 'react'
import Navbar from './Navbar';
import Cards from './Cards';
import "./Cards.css";
import Footer from './Footer';
import Form from './Form';

const Home = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <Form />
            <br /><br /><br />
            <Cards />
            <br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    )
}

export default Home
