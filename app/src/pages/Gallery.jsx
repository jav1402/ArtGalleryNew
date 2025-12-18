import Room from "../components/Room";
import { useState, useEffect } from "react";
import CreateFormGallery from "../components/CreateFormGallery";
import UpdateFormGallery from "../components/UpdateFormGallery";
import createRoom from "../logic/createRoom";
import getRoom from "../logic/getRoom";
import deletedRoom from "../logic/deleteRoom";
import updateRoom from "../logic/updateRoom";

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
            console.error("DELETE", err)

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


    //Manejo general de actulizacion de la room
    async function handleUpdateRoom(updateIdRoom, packageGallery) {
        try {
            //hace la peticion espera que le conteste
            const response = await updateRoom(updateIdRoom, packageGallery)
            //apaga el formulario
            setRoomUpdate(null)
            //pide de nuevo todas las rooms
            handleGetRoom()
        }
        catch (err) {
            console.error("UPDATE", err)
        }

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

            <div className="gallery-actions">
                <button
                    className={!showFormCreate ? "btn btn-primary" : "btn btn-ghost"}
                    onClick={() => setShowFormCreate(!showFormCreate)}
                > Crear Nueva Room
                </button>
            </div>

            {showFormCreate && (
                <CreateFormGallery createNewRoomProps={createNewRoom} closeForm={()=>{setShowFormCreate(false)}}/>
            )} {/* Renderizado condicional */}

            {roomUpdate && (
                <UpdateFormGallery
                    updateNewRoomProps={handleUpdateRoom}
                    oldRoomProps={roomUpdate}
                    closeForm={() => setRoomUpdate(false)}
                />
            )} {/* Renderizado condicional */}
        </div>
    );
}
export default Gallery;

