import { useEffect, useState } from "react";

function UpdateNewPictureProps({ updateNewPictureProps, oldPictureProps}){
    
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
                console.log ("Cambio detectado")
    },[oldPictureProps] )

    
    function sendFormPicture(event){
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

export default UpdateNewPictureProps