import { useState } from "react";


function CreateFormArtist({ createNewArtistProps }) {

    const [nameArtist, setNameArtist] = useState("")
    const [imageArtist, setImageArtist] = useState("")
    const [descriptionArtist, setDescriptionArtist] = useState("")

    function sendFormArtist(event) {
        event.preventDefault()           // previene que cuando se envia al pulsar boton se recargue la pagina

        const packageArtist = {
            name: nameArtist,
            description: descriptionArtist,
            image: imageArtist,
    
        }
        createNewArtistProps(packageArtist)
    }
    return (

        <div>
            <form onSubmit={sendFormArtist}>
                <div className="form">
                    <label> Nombre del Artista </label>
                    <input

                        value={nameArtist} onChange={(event) => { setNameArtist(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Imagen del Artista </label>
                    <input

                        value={imageArtist} onChange={(event) => { setImageArtist(event.target.value) }}
                    />
                </div>
                <div className="form">
                    <label>Descripción del Artista </label>
                    <input

                        value={descriptionArtist} onChange={(event) => { setDescriptionArtist(event.target.value) }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default CreateFormArtist