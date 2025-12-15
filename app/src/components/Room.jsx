export default function Room({ roomProp, onDelete, onUpdate}) {
    const { id, name, image, description } = roomProp;
    console.log(roomProp)

    
    return (
        <article className="room-card" >
            <div className="room-image-wrap">
                <img
                    className="room-image"
                    src={image}
                    alt={name}
                    loading="lazy"

                />
            </div>
            <div className="room-body">
                <h2 className="room-name">{name}</h2>
                <p className="room-desc">{description}</p>
            </div>
            <button onClick={() => onDelete(id)}>Eliminar</button>
            <button onClick={() => onUpdate(roomProp)}>Actualizar Room</button>

        </article>
    );
}


// <div className="room">
//     <p>{id}</p>
//     <p>{name}</p>
//     <img src={image} alt="" />
//     <p>{description}</p>
// </div>
//     )
// }


