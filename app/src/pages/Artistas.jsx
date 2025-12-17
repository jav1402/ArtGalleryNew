import Artist from "../components/Artist"
import { useState } from "react"
import { useEffect } from "react";
import CreateFormArtist from "../components/CreateFormArtist.jsx"
import getArtist from "../logic/getArtist.js"
import createArtist from "../logic/createArtist.js";
import deleteArtist from "../logic/deleteArtist.js";
import updateArtist from "../logic/updateArtist.js";
import UpdateFormArtist from "../components/UpdateFormArtist.jsx";
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
    //función para modificar elemento
    async function handleUpdateArtist(updateIdArtist, packageArtist) {
        try {
            const response = await updateArtist(updateIdArtist, packageArtist)

            setArtistUpdate(null) // Cierra el formulario de actualización
            handleGetArtist() // Refresca la lista de artistas
        }
        catch (err) {
            console.error("Update", err)
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
<<<<<<< HEAD

            <div className="artist-actions">
                <button
                    className={!showFormCreate ? "btn btn-primary" : "btn btn-ghost"}
                    onClick={() => setShowFormCreate(!showFormCreate)}
                >
                    Crear Nueva Artista
                </button>
            </div>

            {showFormCreate && (
                <CreateFormArtist
                    createNewArtistProps={createNewArtist}
                    closeForm={() => { setShowFormCreate(false); }}
                />
            )} {/* Renderizado condicional */} {/* [web:21] */}

            {artistUpdate && (
                <UpdateFormArtist
                    updateNewArtistProps={handleUpdateArtist}
                    oldArtistProps={artistUpdate}
                />
            )} {/* Renderizado condicional */}
=======
            <div className="artist-actions">
                <button
                    className={!showFormCreate ? "btn btn-primary" : "btn btn-ghost"}
                    onClick={() => setShowFormCreate(!showFormCreate)}
                >
                    {!showFormCreate ? "Crear Nueva Artist" : "Cerrar Formulario"}
                </button>

                {showFormCreate && (
                    <CreateFormArtist createNewArtistProps={createNewArtist} />
                )} {/* Renderizado condicional */} {/* [web:21] */}

                {artistUpdate && (
                    <UpdateFormArtist
                        updateNewArtistProps={handleUpdateArtist}
                        oldArtistProps={artistUpdate}
                    />
                )} {/* Renderizado condicional */} {/* [web:21] */}
            </div>

>>>>>>> 913938ea6ad9ec9682946ba260b80a2ffd62334c
        </div>
    );
};
            export default Artistas;