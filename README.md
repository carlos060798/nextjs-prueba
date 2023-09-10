# contenido del proyecto
la carpeta page es la carpeta pricipal del proyecto

## creacion  en rutamiento en next js
1. crear la carpeta  about en pages
con el archivo y esto crea la ruta sin nesesidad de especificar la ruta en el archivo de rutas  se crea  en la carpeta about el archivo page.jsx y esto crea ya la ruta 

## layaut es el contenedor de todas las paginas 
se peude crear la navegacion  de un menu para que sea visible entodas las paginas
se crea la carpeta components y se crea el archivo nav.jsx 

## crear  rutas dinamicas
se crea la carpeta post y se crea el archivo [id].jsx y se crea la ruta dinamica en users

## solicitar datos en next js 

no hay nesesidad de manejar estados como hooks en reac normal

funcion para obtener datos 
async function Data() {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json();
  return console.log(data);
}

## crear  interactividad en el proyecto
se usa en el componete que etnga eventos o hooks el uso  de la anotacion  
"use client"