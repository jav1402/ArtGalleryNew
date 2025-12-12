import { useEffect, useState } from "react";

function UpdateFormGallery({ updateNewRoomProps, oldRoomProps }) {

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
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default UpdateFormGallery