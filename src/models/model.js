import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Genero = sequelize.define('genero', {
    nombre: DataTypes.STRING,
  });
  
  export const Localidad = sequelize.define('localidad', {
    nombre: DataTypes.STRING,
  });
  
  export const NivelEstudio = sequelize.define('nivel_estudio', {
    nombre: DataTypes.STRING,
  });
  
  export const Encuesta = sequelize.define('encuesta', {
    // Otros atributos de la encuesta
    edad: DataTypes.INTEGER,
  });
  
  export const Pregunta = sequelize.define('pregunta', {
    // Otros atributos de la pregunta
    texto: DataTypes.STRING,
  });
  
  export const Respuesta = sequelize.define('respuesta', {
    // Otros atributos de la respuesta
    1: DataTypes.STRING,
    2: DataTypes.STRING,
    3: DataTypes.STRING,
    4: DataTypes.STRING,
    5: DataTypes.STRING,
    6: DataTypes.STRING,
    7: DataTypes.STRING,
  });
  
  export const RespuestaEncuesta = sequelize.define('respuesta_encuesta', {
    // Otros atributos de la relación
  });
  
  // Define las relaciones
  Genero.hasMany(Encuesta);
  Localidad.hasMany(Encuesta);
  NivelEstudio.hasMany(Encuesta);
  Encuesta.belongsTo(Genero);
  Encuesta.belongsTo(Localidad);
  Encuesta.belongsTo(NivelEstudio);
  
  Encuesta.hasMany(RespuestaEncuesta);
  RespuestaEncuesta.belongsTo(Encuesta);
  
  Pregunta.hasMany(Respuesta);
  Respuesta.belongsTo(Pregunta);
  
  Respuesta.hasMany(RespuestaEncuesta);
  RespuestaEncuesta.belongsTo(Respuesta);