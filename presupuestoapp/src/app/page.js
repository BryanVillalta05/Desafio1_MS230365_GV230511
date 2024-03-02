"use client"// src/App.js
import React, { useState } from 'react';
import Formulario from '../components/reg';
import TarjetaMovimientos from '../components/movs';
import ContenedorTotal from'../components/tot';

const App = () => {
  const [movimientos, setMovimientos] = useState([]);

  const addMovimiento = (movimiento) => {
    setMovimientos([...movimientos, movimiento]);
  };

  const deleteMovimiento = (id) => {
    const updatedMovimientos = movimientos.filter((movimiento) => movimiento.id !== id);
    setMovimientos(updatedMovimientos);
  };

  const ingresos = movimientos.filter((m) => m.tipoMovimiento === 'Ingreso');
  const gastos = movimientos.filter((m) => m.tipoMovimiento === 'Gasto');

  return (
    <div>
      <Formulario onAddMovimiento={addMovimiento} />
      <div style={{ display: 'flex' }}>
        <TarjetaMovimientos tipo="Gastos" movimientos={gastos} onDeleteMovimiento={deleteMovimiento} />
        <TarjetaMovimientos tipo="Ingresos" movimientos={ingresos} onDeleteMovimiento={deleteMovimiento} />
        <ContenedorTotal ingresos={ingresos} gastos={gastos} />
      </div>
    </div>
  );
};

export default App;

