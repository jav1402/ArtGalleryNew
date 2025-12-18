import { useEffect, useState } from "react";

function UpdateNewPictureProps({ updateNewPictureProps, oldPictureProps, closeForm, sendForm }) {

    const [namePicture, setNamePicture] = useState('')
    const [authorPicture, setAuthorPicture] = useState('')
    const [yearPicture, setYearPicture] = useState('')
    const [imagePicture, setImagePicture] = useState('')
    const [descriptionPicture, setDescriptionPicture] = useState('')

    useEffect(() => {
        setNamePicture(oldPictureProps.name)
        setAuthorPicture(oldPictureProps.author)
        setYearPicture(oldPictureProps.year)
        setImagePicture(oldPictureProps.Image)
        setDescriptionPicture(oldPictureProps.description)
        console.log("Cambio detectado")
    }, [oldPictureProps])


    function sendFormPicture(event) {
        event.preventDefault()    // previene que cuando se envia al pulsar boton se recargue la pagina
        const packagePicture = {
            name: namePicture,
            author: authorPicture,
            year: yearPicture,
            image: imagePicture,
            description: descriptionPicture
        }
        updateNewPictureProps(oldPictureProps.id, packagePicture)
    }
    return (

        <div className="popup-form">
            <div className="form-card">
                <form onSubmit={sendFormPicture}>
                    <div className="Formulario">
                        <label> Nombre Obra</label>
                        <input className="field__input"
                            value={namePicture} onChange={(event) => { setNamePicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label className="field__label"> Autor</label>
                        <input className="field__input"
                            value={authorPicture} onChange={(event) => { setAuthorPicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label className="field__label"> Año</label>
                        <input className="field__input"
                            value={yearPicture} onChange={(event) => { setYearPicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label className="field__label"> Imagen</label>
                        <input className="field__input"
                            value={imagePicture} onChange={(event) => { setImagePicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label className="field__label"> Descripción</label>
                        <input className="field__input"
                            value={descriptionPicture} onChange={(event) => { setDescriptionPicture(event.target.value) }}
                        />
                    </div>
                    <div className="form-actions">
                        <button onClick={sendForm} className="btn btn-primary" type="submit">Enviar</button>
                        <button onClick={closeForm} className="btn btn-primary" type="button">
                            Cerrar
                        </button>   </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateNewPictureProps