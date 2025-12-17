import { useState } from "react";


function createFormGallery({ createNewRoomProps, closeForm }) {

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

        <div className="popup-form">
            <section className="form-card">
                <header className="form-card__header">
                    <h2 className="form-card__title">Crear nueva sala</h2>
                    <p className="form-card__subtitle">
                        Rellena los campos y pulsa “Crear”.
                    </p>
                </header>

                <form className="form-grid" onSubmit={sendFormGallery}>
                    <label className="field">
                        <span className="field__label">Nombre de la sala</span>
                        <input
                            className="field__input"
                            placeholder="Ej: Sala polivalente"
                            value={nameGallery}
                            onChange={(e) => setNameGallery(e.target.value)}
                        />
                    </label>

                    <label className="field">
                        <span className="field__label">Imagen (URL)</span>
                        <input
                            className="field__input"
                            placeholder="https://..."
                            value={imageGallery}
                            onChange={(e) => setImageGallery(e.target.value)}
                        />
                    </label>

                    <label className="field">
                        <span className="field__label">Descripción</span>
                        <textarea
                            className="field__input field__textarea"
                            placeholder="Ej: Sala polivalente de 250m2..."
                            value={descriptionGallery}
                            onChange={(e) => setDescriptionGallery(e.target.value)}
                        />
                    </label>

                    <div className="form-actions">
                        <button className="btn btn-primary" type="submit">
                            Crear
                        </button>
                        <button onClick={closeForm} className="btn btn-primary" type="button">
                            Cerrar
                        </button>                </div>
                </form>
            </section>
        </div>
    );
}

export default createFormGallery;