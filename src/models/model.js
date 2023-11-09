import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Genero = sequelize.define('genero', {
    nombre: {
      type: DataTypes.STRING
     },
  });
  
  export const Localidad = sequelize.define('localidad', {
    nombre: {
      type: DataTypes.STRING
     },
  });
  
  export const NivelEstudio = sequelize.define('nivel_estudio', {
    nombre: {
     type: DataTypes.STRING
    },
  });
  
  export const Encuesta = sequelize.define('encuesta', {
    // Otros atributos de la encuesta
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
  });
  
  export const Pregunta = sequelize.define('pregunta', {
    // Otros atributos de la pregunta
    texto:{
      type: DataTypes.STRING
     },
  });
  
  export const Respuesta = sequelize.define('respuesta', {
    // Otros atributos de la respuesta
    1: {
      type: DataTypes.STRING
     },
    2: {
     type: DataTypes.STRING
    },
    3: {
     type: DataTypes.STRING
    },
    4: {
     type: DataTypes.STRING
    },
    5: {
     type: DataTypes.STRING
    },
    6: {
     type: DataTypes.STRING
    },
    7: {
     type: DataTypes.STRING
    },
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
  Encuesta.belongsTo(NivelEstudio, {
    as: 'nivelEstudio',
    foreignKey: 'nivelEstudioId',
  });
  
  Encuesta.hasMany(RespuestaEncuesta);
  RespuestaEncuesta.belongsTo(Encuesta);
  
  Pregunta.hasMany(Respuesta);
  Respuesta.belongsTo(Pregunta);
  
  Respuesta.hasMany(RespuestaEncuesta);
  RespuestaEncuesta.belongsTo(Respuesta);

Encuesta.hasMany(Respuesta);
Respuesta.belongsTo(Encuesta);