# Activos de Información y Riesgos (Industria Retail)

Para contextualizar la gravedad de las vulnerabilidades encontradas, es fundamental identificar los activos críticos que custodia SuperMax. En la industria de los supermercados, la interrupción de las ventas o la fuga de datos tienen consecuencias financieras y legales inmediatas.

## 1. Base de Datos de Fidelización (Clientes)
* **Descripción:** Contiene el PII de los clientes (Nombres, RUT, correos electrónicos, teléfonos) y el saldo de puntos acumulados.
* **Riesgo Principal:** Fuga masiva de datos (Data Breach).
* **Impacto en SuperMax:** Daño reputacional severo, pérdida de confianza del consumidor y sanciones legales por incumplimiento de la Ley 19.628 de Protección de Datos Privados.

## 2. Historial de Compras y Transacciones
* **Descripción:** Registros detallados de los hábitos de consumo, métodos de pago vinculados y frecuencia de compra.
* **Riesgo Principal:** Manipulación o exposición de la información.
* **Impacto en SuperMax:** Los competidores podrían obtener inteligencia de negocios crítica. Además, expone a los clientes a campañas de *phishing* altamente dirigidas.

## 3. Infraestructura de Red y Cajas Registradoras (POS)
* **Descripción:** La red interna que conecta los servidores del portal web con los sistemas de inventario y los terminales de punto de venta (POS) en las sucursales físicas.
* **Riesgo Principal:** Compromiso del servidor web utilizado como puente (*pivoting*) hacia la red interna.
* **Impacto en SuperMax:** Riesgo crítico de paralización operativa. Si un atacante vulnera la red de los POS mediante inyección de comandos o ransomware, el supermercado queda incapacitado para procesar ventas físicas, generando pérdidas millonarias por hora de inactividad.