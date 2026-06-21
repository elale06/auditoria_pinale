import React from 'react';

const Activos = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Activos de Información y Riesgos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">1. BD de Fidelización</h3>
          <p className="text-sm text-gray-700"><strong>Contiene:</strong> PII de clientes y saldo de puntos.</p>
          <p className="text-sm text-gray-700 mt-2"><strong>Impacto:</strong> Daño reputacional severo y multas legales (Ley 19.628).</p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">2. Historial de Compras</h3>
          <p className="text-sm text-gray-700"><strong>Contiene:</strong> Hábitos de consumo y métodos de pago.</p>
          <p className="text-sm text-gray-700 mt-2"><strong>Impacto:</strong> Exposición a phishing dirigido y pérdida de inteligencia de negocios.</p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2">3. Red y Cajas (POS)</h3>
          <p className="text-sm text-gray-700"><strong>Contiene:</strong> Infraestructura de ventas físicas.</p>
          <p className="text-sm text-gray-700 mt-2"><strong>Impacto:</strong> Paralización operativa completa de las sucursales.</p>
        </div>
      </div>
    </div>
  );
};

export default Activos;