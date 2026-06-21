import React from 'react';

const Prompts = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md border-t-4 border-purple-600">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Bitácora de Uso de IA</h2>
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="font-bold text-purple-700">1. Registro de Interacción</h3>
          <p><strong>Herramienta:</strong> Gemini</p>
          <p className="mt-1 bg-white p-3 border rounded text-sm italic">
            "Hola, Gemini, necesito que analices las instrucciones de este archivo PDF. Cabe recalcar que la empresa ficticia que se me asignó se llama "SuperMax", la cuál es dueña de un Supermercado / retail. Los datos que custodia el portal son: Tarjeta de fidelización y datos de compra. "
          </p>
        </div>
        <div>
          <h3 className="font-bold text-purple-700">2. Aceptación y Corrección</h3>
          <p>Se aceptó la justificación de negocio y métricas CVSS. Se corrigió manualmente la configuración de Tailwind CSS (implementación de <code>@tailwindcss/postcss</code>) para que el mapa de calor renderizara correctamente en el entorno de desarrollo actual.</p>
        </div>
        <div>
          <h3 className="font-bold text-purple-700">3. Reflexión Final</h3>
          <p>La IA es altamente efectiva para estructurar el análisis de riesgo y generar los componentes base en React, pero requiere que el auditor supervise la lógica de negocio y solucione los conflictos de dependencias del entorno de desarrollo.</p>
        </div>
      </div>
    </div>
  );
};

export default Prompts;