# Bitácora de Uso de Inteligencia Artificial

## 1. Registro de Interacción
* **Herramienta Utilizada:** Gemini (Modelo avanzado).
* **Sección:** Informe B (Matriz de Riesgo) y Desarrollo React.
* **Prompt Principal Utilizado:** *"Mi nombre es Alexander Pinto, y la empresa que se me asignó es 'SuperMax', la cuál es un Supermercado / retail. Los datos que custodia el portal son: Tarjeta de fidelización, datos de compra. Redactemos primero el cálculo exacto del CVSS 3.1 y la explicación técnica para el ataque de Inyección SQL. Ahora construyamos el componente en React para la Matriz de Riesgo visual (Mapa de Calor)."*

## 2. Aceptación y Corrección
* **Qué acepté:** La estructura de justificación de negocio para el supermercado, el cálculo preciso de las métricas CVSS 3.1 (especialmente la justificación del vector para XSS e Inyección de Comandos) y la estructura base de los componentes de React con Tailwind CSS.
* **Qué corregí/ajusté:** Tuve que realizar ajustes manuales para la integración del motor de PostCSS de Tailwind, ya que la IA sugirió comandos de una versión anterior, por lo que investigué e instalé el paquete `@tailwindcss/postcss` y actualicé la sintaxis de importación en `index.css`.

## 3. Reflexión Final
El uso de la IA fue fundamental para agilizar la traducción de hallazgos técnicos (como un simple payload `' OR '1'='1`) a riesgos de negocio tangibles para un supermercado (fuga de datos de fidelización, impacto en la Ley 19.628). La IA es excelente para estructurar informes y generar código repetitivo (componentes de React), pero requiere supervisión arquitectónica constante; un desarrollador debe entender cómo engranar esas piezas (configuraciones de Vite, Tailwind y Git) para que el producto final funcione en un entorno de producción real.