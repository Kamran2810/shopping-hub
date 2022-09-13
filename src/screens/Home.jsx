import { Link } from 'react-router-dom';
import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Sections from '../components/Sections';

const Home = () => {
  return (
    <Link to='/'>
      <ImageSlider />
      <Sections />
    </Link>
  );
}

export default Home