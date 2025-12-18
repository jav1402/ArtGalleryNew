import Picture from "../components/Picture"
import { useState, useEffect } from "react";
import CreateFormPicture from "../components/CreateFormPicture";
import getPicture from "./../logic/getPicture"
import createPicture from "../logic/createPicture";
import deletedPicture from "../logic/deletePicture";
import updatePicture from "../logic/updatePicture";
import UpdateFormPicture from "../components/UpdateFormPicture";

function Exposicion() {
    const [showFormCreate, setShowFormCreate] = useState(false)

    const [picturesState, setPicturesState] = useState([])
    const [pictureUpdate, setPictureUpdate] = useState(null)

    useEffect(() => {
        handleGetPicture()
    }, []);

    function handleGetPicture() {
        getPicture()
            .then((data) => {

                console.log("data", data)
                setPicturesState(data)
            })//guardamos los datos recibidos en el estado
            .catch((error) => console.error("Error fetching pictures", error));
    }

    //función para borrar elemento
    async function handleDeletePicture(idDel) {
        try {
            const response = await deletedPicture(idDel)

            handleGetPicture()
        }
        catch (err) {
            console.error("Delete", err)

        }
    }

    //función asíncrona para añadir nueva Picture
    async function createNewPicture(packagePicture) {
        try {
            const response = await createPicture(packagePicture)

            setShowFormCreate(false)
            handleGetPicture()
        }
        catch (err) {
            console.error("Error creating picture", err)
        }
    }

    // Manejo de actualización de picture
    async function handleUpdatePicture(updateIdPicture, packagePicture) {
        try {
            const response = await updatePicture(updateIdPicture, packagePicture) //peticióbn y espera que conteste
            setPictureUpdate(null) //para formulario
            handleGetPicture() //solicita toda las pictures
        }
        catch (err) {
        }
    }


    return (
        <div className="main-exposiciones">
            <h1 className="picture-title">EXPOSICIONES</h1>
            <div className="picture-grid">
                {picturesState.map((dataPictureSingle) => {
                    return <Picture
                        key={dataPictureSingle.id}
                        pictureProp={dataPictureSingle}
                        onDelete={handleDeletePicture}
                        onUpdate={setPictureUpdate} />
                })}
            </div>
            <div className="picture-actions">
                <button
                    className={!showFormCreate ? "btn btn-primary" : "btn btn-ghost"}
                    onClick={() => setShowFormCreate(!showFormCreate)}
                >
                    Crear Nueva Picture
                </button>
            </div>
            {showFormCreate && (
                <CreateFormPicture
                    createNewPictureProps={createNewPicture}
                    closeForm={() => { setShowFormCreate(false); }}
                />
            )} {/* Renderizado condicional */} {/* [web:21] */}

            {pictureUpdate && (
                <UpdateFormPicture
                    updateNewPictureProps={handleUpdatePicture}
                    oldPictureProps={pictureUpdate}
                    closeForm={() => setPictureUpdate(false)}  // o false, según tu estado

                />
            )} {/* Renderizado condicional */}
        </div>
    );
};


export default Exposicion;





