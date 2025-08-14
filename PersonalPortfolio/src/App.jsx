// src/App.jsx

import React from 'react';
import Header from './components/Header'; // የፋይል መንገዱን አረጋግጥ
import Hero from './components/Hero/Hero'; // የፋይል መንገዱን አረጋግጥ
import About from './components/About/About'; // የፋይል መንገዱን አረጋግጥ
import Projects from './components/Projects/Projects'; // የፋይል መንገዱን አረጋግጥ
import Contact from './components/Contact/Contact'; // የፋይል መንገዱን አረጋግጥ
import Footer from './components/Footer/Footer'; // የፋይል መንገዱን አረጋግጥ
import './index.css';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About /> 
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}