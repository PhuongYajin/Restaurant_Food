import React from 'react';
import Header from '../../components/Header';
import Suggest from './home-components/Home';
import Speciality from './home-components/Speciality';
import Popular from './home-components/Popular';
import Gallery from './home-components/Gallery';
import Reviews from './home-components/Reviews';
import Order from './home-components/Order';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Suggest />
      <Speciality />
      <Popular />
      <Gallery />
      <Reviews />
      <Order />
      <Footer />
    </>
  );
}
