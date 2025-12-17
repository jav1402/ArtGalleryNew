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
                <div className="field__label">
                    <label> Nombre del Artista </label>
                    <input className="cell_form"

                        value={nameArtist} onChange={(event) => { setNameArtist(event.target.value) }}
                    />
                </div>
                <div className="field__label">
                    <label>Imagen del Artista </label>
                    <input className="cell_form"

                        value={imageArtist} onChange={(event) => { setImageArtist(event.target.value) }}
                    />
                </div>
                <div className="field__label">
                    <label>Descripción del Artista </label>
                    <input className="cell_form"

                        value={descriptionArtist} onChange={(event) => { setDescriptionArtist(event.target.value) }}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>

    )
}

export default CreateFormArtist