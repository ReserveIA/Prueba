# Preguntas Frecuentes (FAQ)

## General

### ¿Qué es este servicio?
Nuestro servicio es una plataforma de gestión de reservas inteligente que automatiza y optimiza el proceso de reservas para su negocio.

### ¿Cómo funciona el sistema?
El sistema utiliza inteligencia artificial para procesar solicitudes de reservas, gestionar disponibilidad y coordinar con Google Sheets para mantener registros actualizados.

### ¿Es seguro mi información?
Sí, utilizamos protocolos de seguridad estándar de la industria y todas las comunicaciones están encriptadas.

## Configuración y Uso

### ¿Cómo configuro el sistema por primera vez?
1. Importe el archivo workflow.json en su instancia de n8n
2. Configure las credenciales de Google Sheets
3. Reemplace YOUR_GOOGLE_SHEET_ID con su ID de hoja real
4. Active el workflow

### ¿Qué formato debe tener mi Google Sheet?
Su hoja debe tener las siguientes columnas:
- **Name**: Nombre del cliente
- **Availability**: Estado de disponibilidad
- **Notes**: Notas adicionales

### ¿Cómo busco información de un cliente?
Haga una petición GET a:
```
https://su-instancia-n8n/webhook/search-client?name=NombreCliente
```

## Funcionalidades

### ¿Puedo buscar clientes por nombre parcial?
Sí, el sistema busca coincidencias parciales. Por ejemplo, buscar "Juan" encontrará "Juan Pérez", "Juan Carlos", etc.

### ¿Qué información retorna la búsqueda?
Para cada cliente encontrado, retorna:
- Nombre completo
- Estado de disponibilidad
- Notas asociadas

### ¿Puedo obtener múltiples resultados?
Sí, el sistema retorna un array con todos los clientes que coincidan con el nombre buscado.

## Técnico

### ¿Qué es n8n?
n8n es una plataforma de automatización de flujos de trabajo que permite conectar diferentes servicios y APIs.

### ¿Necesito conocimientos técnicos para usar el sistema?
No, una vez configurado, el sistema es completamente automático y fácil de usar.

### ¿Puedo personalizar el workflow?
Sí, puede modificar el archivo JSON para agregar más funcionalidades o cambiar la lógica de búsqueda.

## Integración

### ¿Qué servicios puedo integrar?
- Google Sheets (incluido)
- Bases de datos externas
- APIs de terceros
- Sistemas de correo electrónico
- Aplicaciones de mensajería

### ¿Cómo conecto con mi base de datos existente?
Puede agregar nodos adicionales en n8n para conectarse a su base de datos preferida.

### ¿Puedo exportar datos a otros formatos?
Sí, n8n soporta múltiples formatos de exportación como CSV, JSON, XML, etc.

## Mantenimiento

### ¿Con qué frecuencia se actualiza la información?
La información se actualiza en tiempo real cada vez que se hace una búsqueda.

### ¿Cómo hago backup de mis datos?
Recomendamos hacer copias de seguridad regulares de su Google Sheet y del workflow de n8n.

### ¿Qué pasa si se cae el servicio?
Tiene acceso directo a su Google Sheet como respaldo, y puede restaurar el workflow desde el archivo JSON.

## Costos y Licencias

### ¿Hay costos ocultos?
No, solo necesita una cuenta de n8n (que puede ser gratuita para uso básico) y Google Sheets (gratuito).

### ¿Puedo usar el sistema con múltiples usuarios?
Sí, el sistema puede manejar múltiples usuarios simultáneamente.

### ¿Hay límites en el número de búsquedas?
Los límites dependen de su plan de n8n. El plan gratuito tiene límites mensuales.

## Soporte

### ¿Cómo obtengo ayuda técnica?
Puede contactarnos a través de:
- Email: soporte@servicio.com
- Documentación: docs.servicio.com
- Comunidad: community.servicio.com

### ¿Ofrecen capacitación?
Sí, ofrecemos sesiones de capacitación personalizadas y documentación detallada.

### ¿Puedo solicitar nuevas funcionalidades?
Sí, aceptamos sugerencias y podemos desarrollar funcionalidades personalizadas.

## Seguridad y Privacidad

### ¿Dónde se almacenan mis datos?
Los datos se almacenan en Google Sheets y n8n, ambos con altos estándares de seguridad.

### ¿Cumplen con GDPR?
Sí, nuestro sistema cumple con las regulaciones de protección de datos.

### ¿Puedo eliminar datos de clientes?
Sí, puede eliminar datos directamente desde Google Sheets o a través del sistema.

## Escalabilidad

### ¿El sistema puede manejar grandes volúmenes de datos?
Sí, Google Sheets puede manejar hasta 10 millones de celdas y n8n puede procesar grandes volúmenes de datos.

### ¿Puedo agregar más columnas a mi hoja?
Sí, puede agregar columnas adicionales y modificar el workflow para incluirlas en las búsquedas.

### ¿El sistema funciona 24/7?
Sí, una vez activado, el workflow está disponible las 24 horas del día.

## Migración

### ¿Puedo migrar desde otro sistema?
Sí, podemos ayudarle a migrar datos desde otros sistemas de gestión.

### ¿Qué formatos de datos soportan?
Soportamos CSV, Excel, JSON, XML y otros formatos comunes.

### ¿Hay pérdida de datos durante la migración?
No, realizamos migraciones seguras con validación de datos.

---

**¿No encontró la respuesta que buscaba?**
Contacte a nuestro equipo de soporte en soporte@servicio.com 