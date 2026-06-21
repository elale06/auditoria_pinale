# Mejora Tecnológica y Plan de Recuperación (Disaster Recovery)

Ante un escenario de compromiso total (ej. un atacante toma control del servidor web mediante inyección de comandos e intenta extorsionar a SuperMax), la empresa debe contar con un Plan de Recuperación ante Desastres (DRP) robusto para garantizar la continuidad de las ventas.

## 1. Plan de Respuesta a Incidentes
* **Contención:** Aislar inmediatamente el servidor web comprometido de la red interna cortando las conexiones en el firewall para proteger los terminales POS físicos. Deshabilitar temporalmente el portal de fidelización mostrando una página de "Mantenimiento Programado".
* **Erradicación y Análisis:** Identificar la vulnerabilidad explotada, parchar el código (implementando validaciones y parametrización) y limpiar cualquier puerta trasera (*backdoor*) instalada por el atacante en el servidor.

## 2. Plan de Recuperación (Disaster Recovery)
* **Copias de Seguridad Inmutables:** Restaurar el servidor web y la base de datos de fidelización a partir de la última copia de seguridad limpia comprobada (Backup). Estos respaldos deben estar aislados de la red principal y contar con protección contra ransomware.
* **Tiempos Objetivo:** * **RTO (Recovery Time Objective):** El portal web debe estar operativo y parchado en menos de 4 horas.
  * **RPO (Recovery Point Objective):** La pérdida de datos máxima aceptable para transacciones de fidelización es de 1 hora.

## 3. Mejora Tecnológica Continua
* Migrar la arquitectura monolítica actual hacia microservicios aislados en contenedores (ej. Docker). Si un contenedor es comprometido por inyección de comandos, el atacante no tendrá acceso directo al sistema operativo anfitrión ni a la red interna del supermercado.