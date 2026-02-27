# Hotel App — Prueba Técnica

Aplicación web desarrollada para la administración y reserva de hoteles.  
El proyecto fue construido siguiendo buenas prácticas de arquitectura frontend, separación de responsabilidades y manejo estructurado del estado.

La aplicación cuenta con dos módulos principales:

- Administración de hoteles (perfil agencia)
- Reserva de hoteles (perfil viajero)

---

## Tecnologías utilizadas

- React (versión: 19.2.4)
- Node.js (versión: 24.13.1)
- Material UI (MUI) para diseño de interfaz (versión: 7)
- React Context API para manejo global de estado
- Persistencia de datos local (mock API / almacenamiento local)
- React Testing Library para pruebas unitarias

---

## Arquitectura y decisiones técnicas

- Separación clara entre UI, lógica y manejo de estado.
- Uso de Context API para centralizar información global como hoteles, habitaciones y reservas.
- Persistencia de datos para simular comportamiento de backend.
- Componentes reutilizables y modulares para facilitar escalabilidad.
- Formularios controlados con validaciones.
- Manejo de estados de carga y control básico de errores.
- Roles diferenciados para agencia y viajero.

---

## Funcionalidades

### Módulo Agencia
- Crear hoteles
- Editar hoteles
- Activar / desactivar hoteles
- Crear habitaciones asociadas a un hotel
- Editar habitaciones
- Activar / desactivar disponibilidad
- Visualizar reservas por hotel
- Ver detalle de reservas

### Módulo Viajero
- Búsqueda de hoteles por ciudad
- Visualización de hoteles disponibles
- Selección de habitaciones
- Registro de datos del huésped
- Confirmación de reserva con notificación de éxito

---

## Usuarios de prueba

### Usuario Agencia
User: ultragroup@agencia  
Pass: ultra123group+

### Usuario Viajero
User: usuario@viajero.com  
Pass: viajero123ultra+

---

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone [<URL_DEL_REPOSITORIO>](https://github.com/josedgl/hotel-app-jose.git)
