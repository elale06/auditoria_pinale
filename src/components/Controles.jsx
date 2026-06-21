import React from 'react';

const Controles = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Prevención y Mitigación</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg text-green-700 mb-2">Prevención (Estratégico)</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Desarrollo Seguro:</strong> Uso estricto de Consultas Parametrizadas (Prepared Statements) y Output Encoding.</li>
            <li><strong>Segmentación de Red:</strong> Servidores web en DMZ. Prohibida la conexión directa hacia la VLAN de las cajas (POS).</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-green-700 mb-2">Mitigación (Técnico)</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>WAF:</strong> Despliegue perimetral para bloquear patrones anómalos.</li>
            <li><strong>Menor Privilegio:</strong> Limitar permisos del servicio web sobre binarios del OS.</li>
            <li><strong>Cabeceras:</strong> CSP estricta y cookies HttpOnly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Controles;