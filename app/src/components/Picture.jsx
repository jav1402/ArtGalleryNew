import { useState } from "react";

function Picture({ pictureProp, onDelete, onUpdate }) {
    const { id, name, author, image, description, year } = pictureProp;

    // const [show, setShow] = useState(true)

    return (

        <div className="card-picture">
            <div className="picture-image">
                
                <img className="img-picture" src={image} alt="cuadro" />
                {description}
            </div>
            <div className="picture-body">
                <h2 className="picture-name">{name}</h2>
                <p className="picture-desc">{author}</p>
                <p className="picture-desc">{description}</p>
                <p className="picture-desc">{year}</p>
                <div className="picture-actions">

                    <button className="btn btn-danger" onClick={() => onDelete(id)}>
                        Eliminar
                    </button>
                    {/* Renderizado condicional */} {/* [web:21] */}

                    {/*<button className="btn btn-secondary" onClick={() => setShow(!show)}>
                        Show
                    </button> {/* Toggle true/false */} {/* [web:68] */}

                    <button className="btn btn-primary" onClick={() => onUpdate(pictureProp)}>
                        Actualizar picture
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Picture
