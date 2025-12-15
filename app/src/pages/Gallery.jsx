import Room from "../components/Room";
import { useState, useEffect } from "react";
import CreateFormGallery from "../components/CreateFormGallery";
import UpdateFormGallery from "../components/UpdateFormGallery";
import createRoom from "../logic/createRoom";
import getRoom from "../logic/getRoom";
import deletedRoom from "../logic/deleteRoom";


function Gallery() {
    const [showFormCreate, setShowFormCreate] = useState(false)

    const [galleryState, setGalleryState] = useState([])
    const [roomUpdate, setRoomUpdate] = useState(null)
    // console.log("roomupdate--------------", roomUpdate)


    useEffect(() => {
        // Llamamos a nuestra función de lógica
        handleGetRoom()
    }, []);


    function handleGetRoom() {
        getRoom()
            .then((data) => setGalleryState(data)) //guardamos los datos recibidos en el estado
            .catch((error) => console.error("Error fetching posts:", error)); //mostramos el error
    }

    //variable para borrar elemento
    async function handleDeleteRoom(idDel) {
        try {
            const response = await deletedRoom(idDel)

            handleGetRoom()
        }
        catch (err) {
            console.error("Create", err)

        }
    }


//funcion para añadir sala


async function createNewRoom(packageGallery) {
    try {
        const response = await createRoom(packageGallery)

        setShowFormCreate(false)
        handleGetRoom()
    }
    catch (err) {
        console.error("Create", err)

    }
}

function updateRoom(updateIdRoom, packageGallery) {
    let index = -1; //variable para meter datos 
    let copy = [...galleryState]//crea copia galleryState

    //creamos un bucle de la longitud de copy e incrementamos 1
    for (let i = 0; i < copy.length; i++) {
        if (copy[i].id === updateIdRoom) { //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
            index = i //guardo el valor i en index
        }
    }

    if (index !== -1) {  //si tengo index es que he encontrado el elemento
        copy.splice(index, 1, packageGallery) // va a eliminar en la posicion del index un elemento
        // console.log("Paquete galery Splice---------------", copy)
        setGalleryState(copy) // asigno copy a setGalleryState con el elemento eliminado
    }
    setRoomUpdate(null)
}
return (
    <div className="galeria-wrap">
        <h1 className="galeria-title">Salas de Exposición</h1>
        <div className="galeria-grid">
            {galleryState.map(item => (
                <Room
                    key={item.id}
                    roomProp={item}
                    onDelete={handleDeleteRoom}
                    onUpdate={setRoomUpdate} />
            ))}

        </div>
        {showFormCreate && <CreateFormGallery createNewRoomProps={createNewRoom} />} {/* Renderizado condicional  */}
        <button onClick={() => setShowFormCreate(!showFormCreate)}>{!showFormCreate ? "Crear Nueva Room" : "Cerrar Formulario"}</button>

        {roomUpdate && <UpdateFormGallery updateNewRoomProps={updateRoom} oldRoomProps={roomUpdate} />} {/* Renderizado condicional  */}
        {/* <button onClick={() => setShowFormCreate(!showFormCreate)}>{!showFormCreate ?"Actualizar Room":"Cerrar Actualización"}</button> */}
    </div>
);
}
export default Gallery;

