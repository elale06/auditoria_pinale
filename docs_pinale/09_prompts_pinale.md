# Bitácora de Uso de Inteligencia Artificial

## 1. Registro de Interacción
* **Herramienta Utilizada:** Gemini (Modelo avanzado).
* **Sección:** Análisis de Requisitos, Desarrollo de Informes A y B, Componentes React, Estructura de Archivos y Despliegue.
* **Prompts Clave Utilizados:**
  1. **Análisis de Instrucciones Oficiales:** *"Hola, Gemini, necesito que analices las instrucciones de este archivo PDF. Cabe recalcar que la empresa ficticia que se me asignó se llama 'SuperMax', la cuál es dueña de un Supermercado / retail. Los datos que custodia el portal son: Tarjeta de fidelización y datos de compra."*
  2. **Contexto de Negocio y CVSS:** *"Redactemos primero el cálculo exacto del CVSS 3.1 y la explicación técnica para el ataque de Inyección SQL. Ahora construyamos el componente en React para la Matriz de Riesgo visual..."*
  3. **Recolección de Evidencia:** *"¿Cómo consigo evidencias fotográficas para este apartado?"* (Para mapear los payloads con la interfaz de DVWA).
  4. **Supervisión de Arquitectura:** *"¿Seguiré correctamente la estructura si creo la carpeta en public?"* (Para validar el enrutamiento de imágenes estáticas en React frente a las exigencias de la rúbrica).
  5. **Resolución de Bloqueos (Troubleshooting):** *"Me está dando este error: fatal: not a git repository (or any of the parent directories): .git"* (Para destrabar el proceso de subida a GitHub).

## 2. Aceptación y Corrección
* **Qué acepté:** La narrativa de riesgo enfocada en el impacto al retail, el cálculo de los vectores CVSS 3.1, la lógica de las clases de Tailwind CSS para responsividad (`max-h-96 object-contain`), y las secuencias de comandos para el despliegue en Vercel.
* **Qué corregí/cuestioné:** 
  * **Dependencias:** Realicé ajustes manuales para la integración de Tailwind instalando `@tailwindcss/postcss`, ya que la sintaxis base sugerida requería actualización.
  * **Rúbrica vs. Facilidad Técnica:** Cuestioné la sugerencia inicial de la IA de colocar las imágenes en la carpeta `public/` (lo más fácil para Vite). Al revisar la rúbrica, corregí el flujo para obligar al sistema a importar las imágenes desde `docs_pinale/img_pinale/`, cumpliendo el estándar exigido sin romper el renderizado de React.

## 3. Reflexión Final
El uso de la IA fue fundamental desde la etapa de planificación (analizando la rúbrica en PDF) hasta agilizar la traducción de hallazgos técnicos a riesgos de negocio tangibles. Sin embargo, esta experiencia demostró que la IA es un copiloto, no un piloto automático. Requiere supervisión arquitectónica constante; como auditor y desarrollador, fue vital entender cómo interactúan las herramientas (Vite, Tailwind, Git) y las reglas de evaluación para auditar las propias respuestas de la IA y asegurar que el producto final funcionara en producción sin perder puntos por formato.