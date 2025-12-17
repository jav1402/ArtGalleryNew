export default function Room({ roomProp, onDelete, onUpdate }) {
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

                <div className="room-actions">
                    <button className="btn btn-danger" onClick={() => onDelete(id)}>Eliminar</button>
                    <button className="btn btn-primary" onClick={() => onUpdate(roomProp)}>Actualizar Room</button>
                </div>
            </div>

        </article>
    );
}
