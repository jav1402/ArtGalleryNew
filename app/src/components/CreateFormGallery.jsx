import { useState } from "react";


function createFormGallery({ createNewRoomProps }) {

    const [nameGallery, setNameGallery] = useState("")
    const [imageGallery, setImageGallery] = useState("")
    const [descriptionGallery, setDescriptionGallery] = useState("")

    function sendFormGallery(event) {
        event.preventDefault()           // previene que cuando se envia al pulsar boton se recargue la pagina

        const packageGallery = {
            name: nameGallery,
            image: imageGallery,
            description: descriptionGallery
        }
        createNewRoomProps(packageGallery)
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

export default createFormGallery