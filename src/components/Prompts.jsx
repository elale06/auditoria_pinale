import React from 'react';

const Prompts = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md border-t-4 border-purple-600">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Bitácora de Uso de IA</h2>
      <div className="space-y-8 text-gray-700">
        
        {/* Sección 1 */}
        <section>
          <h3 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-3">1. Registro de Interacción</h3>
          <p className="mb-1"><strong>Herramienta:</strong> Gemini (Modelo avanzado)</p>
          <p className="mb-4"><strong>Sección:</strong> Desarrollo de Informes A y B, Componentes React, Estructura de Archivos y Despliegue.</p>
          
          <p className="font-semibold mb-3">Prompts Clave Utilizados:</p>
          <div className="space-y-3">
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
              <p className="font-bold text-gray-800 text-sm mb-1">1. Contexto de Negocio</p>
              <p className="text-sm italic text-gray-600">"Mi nombre es Alexander Pinto, y la empresa que se me asignó es 'SuperMax', la cuál es un Supermercado / retail. Los datos que custodia el portal son: Tarjeta de fidelización, datos de compra. Redactemos primero el cálculo exacto del CVSS 3.1..."</p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
              <p className="font-bold text-gray-800 text-sm mb-1">2. Recolección de Evidencia</p>
              <p className="text-sm italic text-gray-600">"¿Cómo consigo evidencias fotográficas para este apartado?"</p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
              <p className="font-bold text-gray-800 text-sm mb-1">3. Supervisión de Arquitectura</p>
              <p className="text-sm italic text-gray-600">"¿Seguiré correctamente la estructura si creo la carpeta en public?"</p>
            </div>
            <div className="bg-white p-4 border border-gray-200 rounded shadow-sm">
              <p className="font-bold text-gray-800 text-sm mb-1">4. Resolución de Bloqueos</p>
              <p className="text-sm italic text-gray-600">"Me está dando este error: fatal: not a git repository (or any of the parent directories): .git"</p>
            </div>
          </div>
        </section>

        {/* Sección 2 */}
        <section>
          <h3 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-3">2. Aceptación y Corrección</h3>
          <p className="mb-3"><strong>Qué acepté:</strong> La narrativa de riesgo enfocada en el impacto al retail, el cálculo de los vectores CVSS 3.1, la lógica de las clases de Tailwind CSS para responsividad y las secuencias de comandos para el despliegue en Vercel.</p>
          <p className="font-semibold mb-2">Qué corregí / cuestioné:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Dependencias:</strong> Realicé ajustes manuales para la integración de Tailwind instalando <code>@tailwindcss/postcss</code>, ya que la sintaxis base sugerida requería actualización.</li>
            <li><strong>Rúbrica vs. Facilidad Técnica:</strong> Cuestioné la sugerencia inicial de la IA de colocar las imágenes en <code>public/</code>. Corregí el flujo para obligar al sistema a importar las imágenes desde <code>docs_pinale/img_pinale/</code>, cumpliendo el estándar exigido sin romper React.</li>
          </ul>
        </section>

        {/* Sección 3 */}
        <section>
          <h3 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-3">3. Reflexión Final</h3>
          <p className="leading-relaxed text-justify">
            El uso de la IA fue fundamental para agilizar la traducción de hallazgos técnicos (como un payload de inyección) a riesgos de negocio tangibles (fuga de datos y Ley 19.628). Sin embargo, esta experiencia demostró que la IA es un copiloto, no un piloto automático. Requiere supervisión arquitectónica constante; como auditor y desarrollador, fue vital entender cómo interactúan las herramientas (Vite, Tailwind, Git) y las reglas de evaluación para auditar las propias respuestas de la IA y asegurar que el producto final funcionara en producción sin perder puntos por formato.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Prompts;