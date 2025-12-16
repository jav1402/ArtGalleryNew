import { useState } from "react";

function Picture({ pictureProp, onDelete, onUpdate }) {
    const { id, name, autor, image, description } = pictureProp;

    const [show, setShow] = useState(true)

    return (
        <div className="card-picture">
            <div className="picture-image">
                <p>{name}</p>
                <p>{autor}</p>
                <img className="img-picture" src={image} alt="cuadro" />
                <p>{description}</p>
            </div>
            {show && <button onClick={() => onDelete(id)}>Eliminar</button>} {/* Renderizado condicional  */}
            <button onClick={() => setShow(!show)}>Show</button>
            <button onClick={() => onUpdate(pictureProp)}>Actualizar Picture</button>
        </div>

    )



}

export default Picture
