import React from 'react';

const Recuperacion = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-4 text-blue-300">Plan de Recuperación ante Desastres (DRP)</h2>
      <ul className="space-y-4">
        <li><strong>1. Contención:</strong> Aislar inmediatamente el servidor comprometido de la red de POS. Habilitar página de mantenimiento.</li>
        <li><strong>2. Erradicación:</strong> Identificar la vulnerabilidad, parchar el código y limpiar posibles backdoors.</li>
        <li><strong>3. Recuperación:</strong> Restaurar la BD de fidelización desde respaldos inmutables (RTO: 4 horas, RPO: 1 hora).</li>
        <li><strong>4. Mejora:</strong> Migrar la arquitectura a contenedores (Docker) para aislar los procesos del OS anfitrión.</li>
      </ul>
    </div>
  );
};

export default Recuperacion;