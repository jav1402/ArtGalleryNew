import { useEffect, useState } from "react";

function UpdateFormGallery({ updateNewRoomProps, oldRoomProps, closeForm, sendForm }) {

    const [nameGallery, setNameGallery] = useState("")
    const [imageGallery, setImageGallery] = useState("")
    const [descriptionGallery, setDescriptionGallery] = useState("")
    console.log("NameGallery------------", nameGallery)
    console.log("oldRoomProps------------", oldRoomProps)

    useEffect(() => {
        setNameGallery(oldRoomProps.name)
        setImageGallery(oldRoomProps.image)
        setDescriptionGallery(oldRoomProps.description)
        console.log("Cambio detectado")
    }, [oldRoomProps])

    function sendFormGallery(event) {
        event.preventDefault()           // previene que cuando se envia al pulsar boton se recargue la pagina

        const packageGallery = {
            id: oldRoomProps.id,
            name: nameGallery,
            image: imageGallery,
            description: descriptionGallery
        }
        updateNewRoomProps(oldRoomProps.id, packageGallery)
    }
    return (

        <div>
            <div className="form-card-picture">
            <form onSubmit={sendFormGallery}>
                <div className="form">
                    <label>Nombre de la Galería</label>
                    <input

                        value={nameGallery} onChange={(event) => { setNameGallery(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Imagen de la Galería</label>
                    <input

                        value={imageGallery} onChange={(event) => { setImageGallery(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Descripción de la Galería</label>
                    <input

                        value={descriptionGallery} onChange={(event) => { setDescriptionGallery(event.target.value) }}
                    />
                </div >
                <div className="form-actions">

                    <button button onClick={sendForm} className="btn btn-primary" type="submit">Enviar</button>
                    <button onClick={closeForm} className="btn btn-primary" type="button">
                        Cerrar
                    </button> </div>
            </form>
        </div>
</div>
    )
}

export default UpdateFormGallery