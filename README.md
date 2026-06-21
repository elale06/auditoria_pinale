# Auditoría de Seguridad Web: SuperMax 🛒🔒

Este proyecto es una aplicación web en React que presenta los resultados de una auditoría de seguridad de la información realizada para **SuperMax**, una empresa ficticia del sector retail/supermercados.

El análisis técnico se ejecutó en un entorno controlado (DVWA) e incluye la explotación de tres vulnerabilidades web, su evaluación de gravedad (CVSS 3.1) y la construcción de una matriz de riesgo enfocada en la continuidad del negocio y la protección de los datos de fidelización de los clientes.

## 📋 Características del Proyecto

- **Análisis de Vulnerabilidades:** Documentación técnica y evidencias de Inyección SQL, XSS Reflejado e Inyección de Comandos.
- **Matriz de Riesgo Visual:** Mapa de calor interactivo construido con Tailwind CSS que cruza probabilidad e impacto en el negocio.
- **Planes de Remediación:** Propuestas de políticas estratégicas, controles técnicos (WAF, sanitización) y un Plan de Recuperación ante Desastres (DRP) enfocado en cajas registradoras y bases de datos.
- **Bitácora de IA:** Registro del uso de herramientas de Inteligencia Artificial para el análisis de código y estructuración del riesgo.

## 🛠️ Stack Tecnológico

- **Frontend:** React + Vite.
- **Estilos:** Tailwind CSS.
- **Despliegue:** Vercel.
- **Documentación:** Markdown.

## 🚀 Instalación y Uso Local

Para levantar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
```bash
   git clone [https://github.com/elale06/auditoria_pinale.git](https://github.com/elale06/auditoria_pinale.git)
   ```

2. Ingresa al directorio del proyecto:
```bash
   cd auditoria_pinale
   ```

3. Instala las dependencias:
```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
```bash
   npm run dev
   ```

5. Abre tu navegador en la ruta indicada (usualmente `http://localhost:5173`).

## 📁 Estructura del Proyecto

El código fuente principal se encuentra en `src/components/`, donde cada aspecto de la auditoría está modularizado:

- `Resumen.jsx` / `Activos.jsx`: Contexto de negocio y activos críticos.
- `InyeccionSQL.jsx` / `XSS.jsx` / `Comandos.jsx`: Análisis técnico y puntuación CVSS.
- `Matriz.jsx`: Mapa de calor de riesgos.
- `Controles.jsx` / `Recuperacion.jsx`: Prevención y mitigación.
- `Prompts.jsx`: Bitácora de uso de IA.

Toda la documentación original en formato Markdown se respalda en la carpeta `docs_pinale/`.

## 👤 Autor

**Alexander Pinto**
* **GitHub:** [@elale06](https://github.com/elale06)
* **Asignatura:** Fundamentos de Seguridad de la Información