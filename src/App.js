import React from 'react';
import './style.css';
import Nav from './components/navbar/Nav.js';
import Footer from './components/footer/Footer';
import Content from './components/content/Content'
export default function App() {
  return (
    <div>
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}
