// 1) Importar el objeto 'database' del archivo "./basededatos"
import { database } from './basededatos';

// 2) Implementar una función que obtenga una universidad por Id
// 🤓 Tip: pueden ir probando las funciones usando console.log() asegurándose que los resultados sean los esperados

// const getById = (table, id) => database[table].find(item => item.id === id);
const getById =  (table) => (id) => database[table].find(item => item.id === id);

// const getUniversidadById = (id) => database.universidades.find(item => item.id === id);
const getUniversidadById = getById('universidades');

// -------------------------------------------------------- line for debug
// console.log('---------------------------------');
// console.log('---------------------------------');

// let c = getUniversidadById(1);
// let d = getById('universidades')(2);

// console.log(c);
// console.log(d);

// console.log('---------------------------------');
// console.log('---------------------------------');
// -------------------------------------------------------- end debug

// 3) Implementar una función que obtenga un profesor por Id
const getProfesorbyId = getById('profesores');

// -------------------------------------------------------- line for debug
// console.log('---------------------------------');
// console.log('---------------------------------');

// let c = getProfesorbyId(1);
// console.log(c);

// console.log('---------------------------------');
// console.log('---------------------------------');
// -------------------------------------------------------- end debug

// 4) Implementar una función que obtenga una materia por Id
const getMateriabyId = getById('materias');

// -------------------------------------------------------- line for debug
// console.log('---------------------------------');
// console.log('---------------------------------');

// let c = getMateriabyId(5);
// console.log(c);

// console.log('---------------------------------');
// console.log('---------------------------------');
// -------------------------------------------------------- end debug

// 🤓 Tip: Comparar con la función del ejercicio (3) y ver si se les ocurre una función genérica que sirva para cualquier tabla

// 5) Crear un objeto 'helpers' que contenga las funciones como métodos
let helpers = {
    getById,
    getUniversidadById,
    getProfesorbyId,
    getMateriabyId,
}
// -------------------------------------------------------- line for debug
// console.log('---------------------------------');
// console.log('---------------------------------');

// let c = helpers.getMateriabyId(5);
// console.log(c);

// console.log('---------------------------------');
// console.log('---------------------------------');
// -------------------------------------------------------- end debug

// 6) Mover helpers y el todo el co´digo a un módulo, creando un nuevo archivo helpers.js

// 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla

// 8) Importar helpers desde su propio módulo

// 9) Implementar una función que permite insertar una nueva provincia en la base de datos
//    La función tomará como parámetro el nombre de la provincia y devolverá el ID de la nueva provincia
// 🤓 Tip: Reusar una o más funciones de helper

// 10) Implementar una función que reciba el id de una materia y devuelva la materia son los ids de universidad y profesores resueltos a sus nombres

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...

// 12) Implementar una función que guarde la calificación de un alumno y una materia
//     La función recibirá: 'nombre del alumno', 'nombre de la materia', 'nota'
//     Si el alumno y/o la materia no existen deberán crearlos en sus respectivas tablas
