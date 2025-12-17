import Artist from "../components/Artist"
import { useState } from "react"
import { useEffect } from "react";
import CreateFormArtist from "../components/CreateFormArtist.jsx"
import getArtist from "../logic/getArtist.js"
import createArtist from "../logic/createArtist.js";
import deleteArtist from "../logic/deleteArtist.js";
import updateArtist from "../logic/updateArtist.js";
// este es el paso 3
function Artistas() {
    const [showFormCreate, setShowFormCreate] = useState(false)
    const [artistUpdate, setArtistUpdate] = useState(null)
    const [artistState, setArtistState] = useState([]);


    useEffect(() => {
        // Llamamos a nuestra función de lógica
        handleGetArtist()
    }, []);


    function handleGetArtist() {
        getArtist()
            .then((data) => setArtistState(data))
            .catch((error) => console.error()); //mostramos el error
    }

    //funcion para añadir artista
    async function createNewArtist(packageArtist) {
        try {
            const response = await createArtist(packageArtist)

            setShowFormCreate(false)
            handleGetArtist()
        }
        catch (err) {
            console.error("Create", err)

        }
    }

    //variable para borrar elemento
    async function handleDeleteArtist(idDel) {
        try {
            const response = await deleteArtist(idDel)

            handleGetArtist()
        }
        catch (err) {
            console.error("Delete", err)

        }
    }



    return (
        <div className="Artistas-wrap">
            <h1 className="Artistas-title">Artistas</h1>
            <div className="Artistas-grid">
                {artistState.map(item => (
                    <Artist
                        key={item.id}
                        artistProp={item}
                        onDelete={handleDeleteArtist}
                        onUpdate={setArtistUpdate} />
                ))}

            </div>
            {showFormCreate && <CreateFormArtist createNewArtistProps={createNewArtist} />} {/* Renderizado condicional  */}
            <button onClick={() => setShowFormCreate(!showFormCreate)}>{!showFormCreate ? "Crear Nueva Artist" : "Cerrar Formulario"}</button>

            {artistUpdate && <updateFormArtist updateNewArtistProps={handleUpdateArtist} oldArtistProps={artistUpdate} />} {/* Renderizado condicional  */}
            {/* <button onClick={() => setShowFormCreate(!showFormCreate)}>{!showFormCreate ?"Actualizar Artist":"Cerrar Actualización"}</button> */}
        </div>
    );
}
export default Artistas;