import React from 'react';
import './style.css';
import { Component } from './Components/Componente';

export default function App() {
  const mensaje = 'Hola Mundo!';
  return (
    <div>
      <h1>{mensaje}</h1>
      <Component nombre="Isa" mensaje={mensaje} />
    </div>
  );
}
