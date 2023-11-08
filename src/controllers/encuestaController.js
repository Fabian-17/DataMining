import { Genero, Localidad, NivelEstudio, Encuesta, Pregunta, Respuesta } from '../models/model.js';

export async function guardarRespuestas(req, res) {
  try {
    const {
      edad,
      genero,
      localidades,
      estudios,
      artista,
      mejoras,
      generoMusical,
      preferencia,  
      horarios,
      frecuencia,
      sugerencias,
    } = req.body;

    const encuesta = await Encuesta.create({ edad });

    // Para las entidades Genero, Localidad y NivelEstudio, primero debes buscar si ya existen en la base de datos y luego asociarlas con la encuesta
    const generoInstance = await Genero.findOrCreate({ where: { nombre: generoMusical } });
    const localidadInstance = await Localidad.findOrCreate({ where: { nombre: localidades } });
    const nivelEstudioInstance = await NivelEstudio.findOrCreate({ where: { nombre: estudios } });

    // Crear una respuesta con los valores adecuados
    const respuesta = await Respuesta.create({
      1: artista,
      2: generoMusical,
      3: mejoras,
      4: horarios,  // Corregir el número de propiedad
      5: frecuencia,
      6: sugerencias,
      7: preferencia
    });

    // Asociar las instancias de Genero, Localidad y NivelEstudio con la encuesta
    await encuesta.setGenero(generoInstance[0]);
    await encuesta.setLocalidad(localidadInstance[0]);
    await encuesta.setNivelEstudio(nivelEstudioInstance[0]);

    // Asociar la respuesta con la encuesta
    await encuesta.addRespuesta(respuesta);

    res.status(201).json({ message: 'Respuestas almacenadas con éxito' });
  } catch (error) {
    console.error('Error al almacenar respuestas:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
}
