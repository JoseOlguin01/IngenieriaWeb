# Proyecto de Ingenieria Web - HiFitness

## EP1 - Análisis de funcionalidades

HiFitness es una aplicación web dirigida a deportistas que gusten de escuchar música mientras realicen sus actividades físicas. El presente documento tiene por función aclarar de manera analítica la funcionalidad de cada elemento en el proyecto.

Para comenzar a utilizar HiFitness, el usuario debe iniciar su sesión. Si no posee una, el usuario debe crearla. La experiencia HiFitness es personalizada de inmediato mediante las preferencias del usuario,. Mediante un formulario presentado tras el registro del usuario, HiFitness seleccionará una serie de listas de reproducción afín a sus tendencias musicales y necesidades físicas. Esto se realizará, de manera preliminar, asignando a cada lista predefinida una serie de palabras claves que permitan encontrar, según las indicaciones del usuario, la(s) lista(s) de reproducción que más se adecúen a este.

Cabe mencionar que la música encontrada en cada playlist, además de estar predefinida como se menciona con anterioridad, será indexada a YouTube, puesto que no se posee la licencia para las canciones a utilizar.

El inicio del sitio tras inciar sesión consta de una barra de búsqueda de música, rutinas o playlists. Los resultados de la búsqueda no son universales, sino que, nuevamente, estarán predefinidos. Bajo la barra de búsqueda, una vista de las rutinas-playlists recomendadas, y su lado, una vista de temas aleatorios recomendados para la escucha del usuario, junto a una información relevante a cada canción y los ejercicios físicos recomendados para realizar escuchando dicho tema.

La pestaña "Listas de reproducción" muestra al usuario cada rutina-playlist a disposición de este en el sitio, mientras que la pestaña "Mi biblioteca" muestra al usuario cada rutina-playlist o canción suelta que este mismo ha guardado.

## EP3 - Análisis de funcionalidades

Para la tercera entrega parcial del proyecto, se implementó el framework Vue.js en la aplicación web. El ambiente que ofrece Vue.js.

Con su enfoque en componentes reutilizables, Vue permite construir rápidamente piezas de código reutilizables. Además, su rendimiento optimizado y características como la carga diferida de componentes garantizan una experiencia de usuario fluida.

Otra ventaja es Vue Router, que facilita la gestión de rutas y la navegación en tu aplicación, permitiendo una experiencia de navegación suave al cambiar entre páginas y secciones de la aplicación. Además, Vue CLI se basa en la reactividad, lo que significa que los cambios en el estado de la aplicación se reflejan automáticamente en la interfaz de usuario, permitiendo actualizar dinámicamente la información en pantalla.

Con fines de contrastar con las entregas anteriores, se almacenó la implementación del framework en la carpeta EP3. Esto, además, permite reflejar los cambios existentes en las entregas anteriores con respecto a la última actualización.

Para ejecutar la aplicación web de HiFitness, el usuario debe:

1. Ejecutar una terminal en el directorio EP3/ProyectoWebVue/src/server
2. Ejecutar el comando:
```
node server.js
```
3. Con el terminal anterior abierto, abrir otro terminal en el directorio EP3/ProyectoWebVue
4. Ejecutar el comando:
```
npm run dev
```