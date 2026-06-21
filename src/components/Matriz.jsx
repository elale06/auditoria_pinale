import React from 'react';

const Matriz = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-2 text-gray-800">Matriz de Riesgo de Negocio</h2>
      <p className="text-gray-600 mb-8">
        Evaluación de vulnerabilidades técnicas traducidas al impacto operativo.
        El mapa de calor cruza la probabilidad de explotación en el portal web con el impacto 
        directo sobre las bases de datos de fidelización y la continuidad de las cajas registradoras.
      </p>

      {/* Contenedor del Mapa de Calor */}
      <div className="flex flex-col items-center mb-10">
        <div className="grid grid-cols-4 gap-2 w-full max-w-2xl text-center text-sm font-semibold">
          
          {/* Fila de Encabezados (Impacto) */}
          <div className="invisible">Eje Y</div>
          <div className="bg-gray-100 p-2 rounded flex flex-col justify-center">Impacto Bajo<br/><span className="text-xs font-normal text-gray-500">(Operación normal)</span></div>
          <div className="bg-gray-100 p-2 rounded flex flex-col justify-center">Impacto Medio<br/><span className="text-xs font-normal text-gray-500">(Fraude aislado)</span></div>
          <div className="bg-gray-100 p-2 rounded flex flex-col justify-center">Impacto Alto<br/><span className="text-xs font-normal text-gray-500">(Fuga masiva / Caída)</span></div>

          {/* Fila Probabilidad Alta */}
          <div className="bg-gray-100 p-2 rounded flex items-center justify-end text-right pr-4">
            Probabilidad Alta
          </div>
          <div className="bg-yellow-400 p-6 rounded shadow-sm text-gray-800 flex items-center justify-center">
            Medio
          </div>
          <div className="bg-orange-500 p-6 rounded shadow-sm text-white flex items-center justify-center">
            Alto
          </div>
          <div className="bg-red-600 p-6 rounded shadow-sm text-white flex flex-col items-center justify-center border-4 border-gray-800">
            <span>Crítico</span>
            <span className="mt-2 px-2 py-1 bg-white text-red-600 text-xs font-bold rounded-full">Inyección SQL</span>
          </div>

          {/* Fila Probabilidad Media */}
          <div className="bg-gray-100 p-2 rounded flex items-center justify-end text-right pr-4">
            Probabilidad Media
          </div>
          <div className="bg-green-500 p-6 rounded shadow-sm text-white flex items-center justify-center">
            Bajo
          </div>
          <div className="bg-yellow-400 p-6 rounded shadow-sm text-gray-800 flex flex-col items-center justify-center border-4 border-gray-800">
            <span>Medio</span>
            <span className="mt-2 px-2 py-1 bg-white text-yellow-600 text-xs font-bold rounded-full">XSS Reflejado</span>
          </div>
          <div className="bg-orange-500 p-6 rounded shadow-sm text-white flex items-center justify-center">
            Alto
          </div>

          {/* Fila Probabilidad Baja */}
          <div className="bg-gray-100 p-2 rounded flex items-center justify-end text-right pr-4">
            Probabilidad Baja
          </div>
          <div className="bg-green-500 p-6 rounded shadow-sm text-white flex items-center justify-center">
            Bajo
          </div>
          <div className="bg-green-500 p-6 rounded shadow-sm text-white flex items-center justify-center">
            Bajo
          </div>
          <div className="bg-orange-500 p-6 rounded shadow-sm text-white flex flex-col items-center justify-center border-4 border-gray-800">
            <span>Alto</span>
            <span className="mt-2 px-2 py-1 bg-white text-orange-600 text-xs font-bold rounded-full">Inyección Comandos</span>
          </div>
          
        </div>
      </div>

      {/* Leyenda y Justificación */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Justificación de la Clasificación</h3>
        <ul className="space-y-4 text-sm text-blue-800">
          <li>
            <strong>🔴 Inyección SQL (Crítico):</strong> Alta probabilidad por la exposición pública del portal. El impacto es máximo porque permite la filtración completa de la base de datos de clientes, historial de compras y saldos de fidelización.
          </li>
          <li>
            <strong>🟡 XSS Reflejado (Medio):</strong> Probabilidad media, ya que requiere que la víctima interactúe con un enlace malicioso. Impacto medio, afectando a usuarios individuales (robo de tokens para canje fraudulento de puntos), pero sin comprometer la infraestructura central.
          </li>
          <li>
            <strong>🟠 Inyección de Comandos (Alto):</strong> Probabilidad baja, asumiendo que el acceso directo a la consola del servidor está protegido o limitado. Sin embargo, el impacto es altísimo; una ejecución exitosa permitiría al atacante pivotar hacia la red de cajas registradoras (POS) y paralizar las ventas físicas.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Matriz;