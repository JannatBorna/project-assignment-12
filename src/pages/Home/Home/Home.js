import React from 'react';
import Reviews from '../../Dashboard/User/Reviews/Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Others from '../Others/Others';
import Banner from './../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import Employe from '../Employe/Employe';
import HomeProducts from '../HomeProducts/HomeProducts/HomeProducts';



const Home = () => {

  return (
      <div>
        <Navigation />
        <Banner />
        <HomeProducts />
        <Employe />
        <Others />
        <Blogs />
        <Reviews />
        <Footer />
      </div>
    );
};

export default Home;