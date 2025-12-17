// Este archivo define un componente llamado Artist.
// Entre los paréntesis recibimos dos cosas que vienen del componente padre:
// 1. artistProp: un OBJETO con toda la información del artista.
// 2. onDelete: una FUNCIÓN que se usará cuando el usuario pulse el botón eliminar.
import { useState } from "react";

function Artist({ artistProp, onDelete, onUpdate }) {
    // Aquí estamos "abriendo" el objeto artistProp
    // El objeto artistProp tiene varias propiedades: id, name, description, age, image.
    // Desestructuramos para poder usarlas directamente sin tener que escribir artistProp.id, etc. 
    const { id, name, description, image } = artistProp;
    // Todo lo que pongamos dentro de return es lo que se va a mostrar en la pantalla.
    return (
        // Este div es la caja que envuelve toda la tarjeta del artista.
        <div className="artist-card">
            <div className="Artist-image-wrap"> </div>
            <div className="artist-image">
                {/* La etiqueta img mostrará la imagen usando la url que viene en la propiedad image.
                    El atributo alt es para accesibilidad, describe la imagen si no se carga o para lectores de pantalla. */}
                <img src={image} alt="Artistas" className="artist-image" />
            </div>
            <div className="artist-body">
                {/* <p>{id}</p>*/}

                <p className="artist-name">{name}</p>
                {/* La descripción del artista */}
                <p className="artist-desc">{description}</p>

            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>
            {/* Botón para eliminar el artista.
                Cuando se hace clic, se llama a la función onDelete que viene del componente padre,
                pasándole el id del artista para saber cuál eliminar */}
            <button onClick={() => onUpdate(artistProp)}>Actualizar Artista</button>
        </div>


    )

}
export default Artist