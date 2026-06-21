# Auditoría de Seguridad: Cross-Site Scripting (XSS Reflejado)

## 1. Evidencia del Ataque
El ataque se ejecutó en el módulo "XSS (Reflected)" del entorno DVWA (nivel de seguridad: Low). Se introdujo el siguiente *payload* en el campo de entrada de nombre:

`<script>alert('XSS')</script>`

![Evidencia de XSS Reflejado](img_pinale/xss_pinale.png)
*(Nota: Asegúrate de guardar la captura de pantalla mostrando la ventana emergente de alerta en el navegador).*

---

## 2. Explicación Técnica (Por qué funciona)
La vulnerabilidad de XSS Reflejado ocurre cuando una aplicación web recibe datos de una solicitud HTTP (por ejemplo, a través de parámetros en la URL) y los incluye inmediatamente en la respuesta HTML sin un proceso previo de validación o codificación segura.

En este escenario, el código PHP subyacente simplemente toma el valor del parámetro (ej. `$_GET['name']`) y lo imprime con un `echo`. Al inyectar etiquetas HTML y JavaScript puro (`<script>...`), el navegador de la víctima no distingue entre el código legítimo del portal y el código malicioso inyectado. Como resultado, el navegador ejecuta el script asumiendo que proviene de una fuente confiable.

---

## 3. Severidad y Puntaje CVSS 3.1
Esta vulnerabilidad representa un riesgo de nivel Medio, focalizado en la seguridad de las cuentas individuales de los clientes.

* **Puntaje Base:** 6.1 (Medio)
* **Vector CVSS:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`

**Justificación de las métricas:**
* **Vector de Ataque (AV: Network):** Explotable remotamente a través de internet.
* **Complejidad (AC: Low):** Crear un enlace con el payload codificado es trivial.
* **Privilegios Requeridos (PR: None):** El atacante no necesita estar autenticado para generar el enlace malicioso.
* **Interacción del Usuario (UI: Required):** A diferencia de la inyección SQL, el ataque requiere que un cliente haga clic en un enlace manipulado (ingeniería social).
* **Alcance (S: Changed):** El componente vulnerable es el servidor web, pero el impacto de seguridad (la ejecución del código) ocurre en un componente diferente: el navegador web de la víctima.
* **Confidencialidad e Integridad (C: Low, I: Low):** Un atacante puede robar las *cookies* de sesión de un cliente (`document.cookie`), secuestrar su sesión en el portal, visualizar su historial de compras y canjear fraudulentamente sus puntos de fidelización.
* **Disponibilidad (A: None):** No afecta el tiempo de actividad del portal web.

---

## 4. Políticas y Controles de Seguridad

### Política de Prevención (Estratégico)
Se debe implementar una política de **Codificación de Salida (*Output Encoding*)**. Cualquier dato ingresado por un usuario debe ser tratado como no confiable y debe codificarse según el contexto (HTML, atributo, JavaScript) antes de ser renderizado en el navegador. Por ejemplo, convertir caracteres especiales como `<` y `>` en sus respectivas entidades HTML (`&lt;` y `&gt;`).

### Control de Mitigación (Técnico)
Para proteger a los clientes de forma inmediata:
1. **Cookies Seguras (HttpOnly):** Configurar todas las *cookies* de sesión con el atributo `HttpOnly`. Esto impide que los scripts del lado del cliente (como el payload inyectado) puedan acceder al token de sesión, neutralizando el secuestro de cuentas.
2. **Content Security Policy (CSP):** Implementar cabeceras HTTP CSP estrictas que prohíban la ejecución de scripts *inline* (como `<script>...</script>`) y restrinjan la carga de scripts externos únicamente a dominios autorizados y controlados por la empresa.