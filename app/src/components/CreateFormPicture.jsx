import { useState } from "react";

function createFormPicture({createNewPictureProps}) {

    const [namePicture, setNamePicture] = useState('')
    const [authorPicture, setAuthorPicture] = useState('')
    const [yearPicture, setYearPicture] = useState('')
    const [imagePicture, setImagePicture] = useState('')
    const [descriptionPicture, setDescriptionPicture] = useState('')

    function sendFormPicture(event) {
        event.preventDefault()    // previene que cuando se envia al pulsar boton se recargue la pagina
        const packagePicture = {
            name: namePicture,
            author: authorPicture,
            year: yearPicture,
            image: imagePicture,
            description: descriptionPicture
        }
        createNewPictureProps(packagePicture)
    }
    return (

        <div>
            <form onSubmit={sendFormPicture}> 
                <div className="Formulario">
                    <label> Nombre Obra</label>
                    <input
                        value={namePicture} onChange={(event) => { setNamePicture(event.target.value) }}
                    />
                </div>

                <div className="Formulario">
                    <label> Autor</label>
                    <input
                        value={authorPicture} onChange={(event) => { setAuthorPicture(event.target.value) }}
                    />
                </div>
                <div className="Formulario">
                    <label> Año</label>
                    <input
                        value={yearPicture} onChange={(event) => { setYearPicture(event.target.value) }}
                    />
                </div>
                <div className="Formulario">
                    <label> Imagen</label>
                    <input
                        value={imagePicture} onChange={(event) => { setImagePicture(event.target.value) }}
                    />
                </div>
                <div className="Formulario">
                    <label> Descripción</label>
                    <input
                        value={descriptionPicture} onChange={(event) => { setDescriptionPicture(event.target.value) }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default createFormPicture;

