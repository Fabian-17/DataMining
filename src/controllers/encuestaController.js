import { Genero, Localidad, NivelEstudio, Encuesta, Pregunta, Respuesta, RespuestaEncuesta } from '../models/model.js';

export const obtenerEncuestas = async (req, res) => {
    try {
        const encuestas = await Encuesta.findAll({
          include: [
            {
              model: Respuesta,
              include: Pregunta,
            },
          ],
        });
        res.json(encuestas);
      } catch (error) {
        console.error('Error al obtener encuestas:', error);
        res.status(500).send('Error interno del servidor');
      }
};

// se pude hacer de las siguientes 2 maneras

// export const crearEncuesta = async (req, res) => {
//   try {
//     const nuevaEncuesta = await Encuesta.create(req.body);
//     res.status(201).json(nuevaEncuesta);
//   } catch (error) {
//     console.error('Error al crear una nueva encuesta:', error);
//     res.status(500).send('Error interno del servidor');
//   }
// };

export const crearEncuesta = async (req, res) => {
    try {
      const { edad, generos, estudios, artista, genero, mejoras, momentos, horarios, frecuencia, sugerencias } = req.body;
  
      const nuevaEncuesta = await Encuesta.create({
        edad,
        generos,
        estudios,
        artista,
        genero,
        mejoras,
        momentos,
        horarios,
        frecuencia,
        sugerencias,
      });
  
      res.status(201).json(nuevaEncuesta);
    } catch (error) {
      console.error('Error al crear una nueva encuesta:', error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
