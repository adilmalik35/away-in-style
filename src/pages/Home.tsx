import React from 'react';
import { Navbar, Hero } from '../components';
import Article from '../components/Article';
import Article3 from '../components/Article3';
import Article2 from '../components/Article2';
import Article1 from '../components/Article1';

const Home: React.FC = () => {
    return (
        <div className="w-full flex flex-col min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Article />
            <Article1 />
            <Article2 />
            <Article3 />
            
        </div>
    );
};

export default Home;