# Matriz de Riesgo de Negocio

El análisis del riesgo para SuperMax se determina cruzando la **Probabilidad** de explotación en el portal web público contra el **Impacto** directo sobre las bases de datos de fidelización y la continuidad de las cajas registradoras (POS). 

*Nota: La representación visual interactiva (Mapa de Calor) se encuentra implementada en el componente React de la aplicación.*

## Evaluación de las Vulnerabilidades

| Vulnerabilidad | Probabilidad | Impacto (Negocio) | Nivel de Riesgo | Justificación en SuperMax |
| :--- | :---: | :---: | :---: | :--- |
| **Inyección SQL** | Alta | Alto | **CRÍTICO** | El portal web está expuesto al público. El impacto es la filtración completa de la base de datos de fidelización (PII y puntos), generando daño reputacional severo y multas. |
| **XSS Reflejado** | Media | Medio | **MEDIO** | Requiere interacción de la víctima (phishing). El impacto se limita al secuestro de la sesión individual del cliente y el canje fraudulento de sus puntos acumulados. |
| **Command Injection** | Baja | Alto | **ALTO** | Suponiendo que las funciones de ping o acceso a consola están ofuscadas, la probabilidad baja. Sin embargo, el impacto es crítico: permite *pivoting* hacia la red interna, paralizando los terminales POS y las ventas físicas. |