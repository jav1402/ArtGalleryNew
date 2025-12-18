import { useState } from "react";

function CreateFormPicture({ createNewPictureProps, closeForm, sendForm }) {

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
            imageUrl: imagePicture,
            description: descriptionPicture
        }
        createNewPictureProps(packagePicture)
    }
    return (

        <div className="form-card-picture">
            <form onSubmit={sendFormPicture}>
                <div className="field-label-pìcture">
                    <label> Nombre Obra</label>
                    <input className="cell_form"
                        value={namePicture} onChange={(event) => { setNamePicture(event.target.value) }}
                    />
                    <div><label> Autor</label>
                        <input className="cell_form"
                            value={authorPicture} onChange={(event) => { setAuthorPicture(event.target.value) }}
                        />
                    </div>
                    <div><label> Año</label>
                        <input className="cell_form"
                            type="number"
                            value={yearPicture} onChange={(event) => { setYearPicture(event.target.value) }}
                        />
                    </div>
                    <div><label> Imagen</label>
                        <input className="cell_form"
                            value={imagePicture} onChange={(event) => { setImagePicture(event.target.value) }}
                        />
                    </div>
                    <div><label> Descripción</label>
                        <input className="cell_form"
                            value={descriptionPicture} onChange={(event) => { setDescriptionPicture(event.target.value) }}
                        />
                    </div>
                </div>
                <button onClick={sendForm} className="btn btn-primary" type="submit"> Enviar</button>
                <button onClick={closeForm} className="btn btn-primary" type="button">Cerrar </button>  
            </form>
        </div>
    )
}

export default CreateFormPicture;

