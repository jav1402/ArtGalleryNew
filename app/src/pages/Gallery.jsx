import Room from "../components/Room";
import dataGallery from "../data/dataGallery";
import { useState, useEffect } from "react";
import CreateFormGallery from "../components/CreateFormGallery";
import UpdateFormGallery from "../components/UpdateFormGallery";
import getDataGallery from "../logic/getDataGallery";


function Gallery() {
    const [showFormCreate, setShowFormCreate] = useState(false)

    const [galleryState, setGalleryState] = useState([])
    const [roomUpdate, setRoomUpdate] = useState(null)
    // console.log("roomupdate--------------", roomUpdate)


    useEffect(() => {
                // Llamamos a nuestra función de lógica
        getDataGallery()
            .then((data) => setGalleryState(data)) //guardamos los datos recibidos en el estado
            .catch((error) => console.error("Error fetching posts:", error)); //mostramos el error
    }, []);

    //variable para borrar elemento
    const deleteCard = function (idDel) {
        let index = -1; //variable para meter datos 
        let copy = [...galleryState]//crea copia galleryState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDel) { //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i //guardo el valor i en index
            }
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1) // va a eliminar en la posicion del index un elemento
            setGalleryState(copy) // asigno copy a setGalleryState con el elemento eliminado
        }

    }

    //funcion para añadir sala

    function createNewRoom(packageGallery) {

        let originalLenght = galleryState.length
        packageGallery.id = ++originalLenght //añadimo +1 al ultimo id

        let copy = [...galleryState]    //crea copia galleryState
        copy.push(packageGallery)              //metemos los datos nuevos en copy, lo nuevo es Newroom 
        setGalleryState(copy)           //Asignamos a setGallerystate el valor de copy

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
                    <Room key={item.id} roomProp={item} onDelete={deleteCard} onUpdate={setRoomUpdate} />
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

