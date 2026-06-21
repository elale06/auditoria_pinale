# Políticas de Prevención y Controles de Mitigación

Para asegurar el ecosistema digital de SuperMax y evitar futuras explotaciones, se establece el siguiente marco de trabajo correctivo, dividiendo la estrategia en políticas corporativas y controles técnicos.

## 1. Políticas de Prevención (Nivel Estratégico)
* **Política de Desarrollo Seguro (SSDLC):** Se hace obligatorio el uso de Consultas Parametrizadas (Prepared Statements) para todas las interacciones con bases de datos y la codificación de salida (Output Encoding) para mitigar vectores de inyección y XSS.
* **Política de Segmentación de Red (Zero Trust):** Los servidores web orientados al cliente deben residir en una DMZ estricta. Queda prohibida la comunicación de red directa y bidireccional entre el portal de fidelización y la VLAN de las cajas registradoras (POS).

## 2. Controles de Mitigación (Nivel Técnico)
* **Web Application Firewall (WAF):** Despliegue de un WAF perimetral configurado para bloquear patrones conocidos (ej. `OR 1=1`, etiquetas `<script>`) antes de que las peticiones HTTP alcancen el servidor de aplicaciones.
* **Principio de Menor Privilegio:** Restricción de permisos del usuario de base de datos del portal web (solo `SELECT/UPDATE` en tablas específicas). El servicio web no debe tener permisos de ejecución sobre binarios del sistema operativo (mitigación de Inyección de Comandos).
* **Cabeceras de Seguridad:** Implementación de `Content-Security-Policy` (CSP) estricta y *cookies* con los atributos `HttpOnly` y `Secure`.