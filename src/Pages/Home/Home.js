import React from 'react';
import Banner from './Banner/Banner';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact'

const Home = () => {
    return (
        <div className=" text-white">
         <Banner></Banner>
         <MyProjects></MyProjects>
        <Contact></Contact>
        </div>
    );
};

export default Home;