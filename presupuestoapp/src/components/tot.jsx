"use client"
import React from 'react';

const ContenedorTotal = ({ ingresos, gastos }) => {
    const calcularTotal = (movimientos) => {
        return movimientos.reduce((total, movimiento) => total + parseFloat(movimiento.monto), 0).toFixed(2);
    };

    return (
        <div>
            <h2>Total General</h2>
            <p>Ingresos: ${calcularTotal(ingresos)}</p>
            <p>Gastos: ${calcularTotal(gastos)}</p>
            <p>Balance: ${calcularTotal(ingresos) - calcularTotal(gastos)}</p>
        </div>
    );
};

export default ContenedorTotal;
