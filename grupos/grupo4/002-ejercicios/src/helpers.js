// 5) Crear un objeto 'helpers' que contenga las funciones como métodos.
// 6) Mover helpers y el todo el código a un módulo, creando un nuevo archivo helpers.js.

// 1) Importar el objeto 'database' del archivo "./basededatos".
import { database } from './baseDeDatos';

/**
 * @typedef {import('./baseDeDatos').TId} TId
 */

export const printResult = (...args) => {
  console.info('\n' + '='.repeat(40) + '\n');
  console.info(...args);
};

/**
 * @function
 * @template TInstance
 * @param {TInstance[]} collection
 */
const entity = (collection) => ({
  /**
   * @typedef {{
   *    [key: keyof TInstance]: any
   * }} TInstanceFilter
   */

  /**
   * @private
   * @param {TInstanceFilter} filter
   * @return {(TInstance) => boolean}
   */
  _checkProperties(filter) {
    return (instance) => {
      for (const [key, value] of Object.entries(filter)) {
        if (instance[key] !== value) {
          return false;
        }
      }

      return true;
    };
  },

  /**
   * Get first match.
   *
   * @param {TInstanceFilter} filter
   * @return {TInstance | undefined}
   */
  findOne(filter) {
    return collection.find(this._checkProperties(filter));
  },

  /**
   * Get all matches.
   *
   * @param {TInstanceFilter} filter
   * @return {TInstance[]}
   */
  find(filter) {
    return collection.filter(this._checkProperties(filter));
  },

  /**
   * @param {TId} id
   * @return {TInstance}
   */
  getById(id) {
    return this.findOne({ id });
  },

  /**
   * @return {TId[]}
   */
  getIds() {
    return collection.map((instance) => instance.id);
  },

  /**
   * 7) Crear un nuevo método en helpers que devuelva el último ID utilizado en una tabla.
   *
   * @return {TId}
   */
  getLastId() {
    return Math.max.apply(null, this.getIds());
  },

  /**
   * @return {TId}
   */
  getNextId() {
    return this.getLastId() + 1;
  },

  /**
   * 9) Implementar una función que permite insertar una nueva provincia en la base de datos.
   *
   * @param {TInstance} data
   * @return {TId}
   */
  insert(data) {
    const id = this.getNextId();
    const newData = Object.assign({}, data, { id });
    collection.push(newData);
    return id;
  },
});

export const Universidades = entity(database.universidades);
export const Profesores = entity(database.profesores);

export const Materias = {
  ...entity(database.materias),

  /**
   * 10) Implementar una función que reciba el id de una materia y
   * devuelva la materia son los ids de universidad y profesores
   * resueltos a sus nombres.
   *
   * @param {TId} id
   * @return {import('./baseDeDatos').TModelMateria & {
   *    profesores: string[],
   *    universidad: string
   *  }}
   */
  getByIdMap(id) {
    const materia = this.getById(id);

    materia.profesores = materia.profesores.map(
      (profesorId) => Profesores.getById(profesorId)?.nombre
    );

    materia.universidad = Universidades.getById(materia.universidad)?.nombre;

    return materia;
  },
};

export const Provincias = entity(database.provincias);
export const Calificaciones = entity(database.calificaciones);

// 11) Implementar una función que muestre en consola la información para todos los alumnos de la siguiente manera:
// NOTAS DE ALUMNOS
// ----------------
// RIGOBERTO MANCHU        <-- En mayúsculas
// Análisis matemático: 5
// ....
// ALUMNO 2
// ...
export const Totales = () => {
  printResult();
  console.info('NOTAS DE ALUMNOS');
  console.info('----------------');

  for (const alumno of database.alumnos) {
    console.info(alumno.nombre.toUpperCase());

    Calificaciones.find({ alumno: alumno.id }).forEach((calificacion) => {
      const materia = Materias.getById(calificacion.materia);
      console.info(`${materia.nombre}: ${calificacion.nota.toFixed(2)}`);
    });

    console.info();
  }
};
