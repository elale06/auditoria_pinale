import React from 'react';
import Resumen from './components/Resumen';
import Activos from './components/Activos';
import Matriz from './components/Matriz';
import InyeccionSQL from './components/InyeccionSQL';
import XSS from './components/XSS';
import Comandos from './components/Comandos';
import Controles from './components/Controles';
import Recuperacion from './components/Recuperacion';
import Prompts from './components/Prompts';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8 font-sans">
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-3">
          Auditoría de Seguridad: SuperMax
        </h1>
        <p className="text-xl text-gray-600">
          Evaluación de Vulnerabilidades y Plan de Recuperación
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-10">
        <section id="resumen"><Resumen /></section>
        <section id="activos"><Activos /></section>
        
        <h2 className="text-4xl font-bold text-center mt-12 mb-6 text-gray-800 border-b-2 pb-4">Análisis de Vulnerabilidades</h2>
        <section id="inyeccion-sql"><InyeccionSQL /></section>
        <section id="xss"><XSS /></section>
        <section id="comandos"><Comandos /></section>

        <h2 className="text-4xl font-bold text-center mt-12 mb-6 text-gray-800 border-b-2 pb-4">Gestión de Riesgos</h2>
        <section id="matriz"><Matriz /></section>
        <section id="controles"><Controles /></section>
        <section id="recuperacion"><Recuperacion /></section>

        <h2 className="text-4xl font-bold text-center mt-12 mb-6 text-gray-800 border-b-2 pb-4">Anexos</h2>
        <section id="prompts"><Prompts /></section>
      </main>
    </div>
  );
}

export default App;