import React from 'react';

const Resumen = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-900">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Resumen Ejecutivo: Auditoría SuperMax</h2>
      <div className="space-y-4 text-gray-700">
        <p><strong>Contexto de la Empresa:</strong> SuperMax es una cadena de supermercados (retail) que maneja un alto volumen de transacciones diarias, tanto en sucursales físicas como a través de su portal web.</p>
        <p><strong>El Portal Auditado:</strong> La presente auditoría de seguridad se centró en el Portal de Clientes y Fidelización. Este entorno web permite a los usuarios consultar sus saldos de puntos, revisar su historial de compras y gestionar su Información Personal Identificable (PII).</p>
        <p><strong>Objetivo:</strong> Identificar vulnerabilidades técnicas (simuladas en DVWA) y traducir esos hallazgos técnicos en riesgos de negocio tangibles, evaluando el impacto sobre la privacidad de los clientes y la continuidad operativa de las cajas registradoras (POS).</p>
      </div>
    </div>
  );
};

export default Resumen;