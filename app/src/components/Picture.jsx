import { useState } from "react";

function Picture({ pictureProp, onDelete }) {
    const { id, name, autor, image, description } = pictureProp;

    const [show, setShow] = useState(true)

    return (
        <div className="card-picture">
            <div className="picture-image">
                <h1>IMÁGENES</h1>
                <p>{id}</p>
                <p>{name}</p>
                <p>{autor}</p>
                <img className="img-picture" src={image} alt="cuadro" />
                <p>{description}</p>
            </div>
            {show && <button onClick={() => onDelete(id)}>Eliminar</button>} {/* Renderizado condicional  */}
            <button onClick={() => setShow(!show)}>Show</button>
        </div>
    
    )



}

export default Picture
