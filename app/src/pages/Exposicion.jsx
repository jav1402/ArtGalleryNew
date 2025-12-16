import Picture from "../components/Picture"
import { useState, useEffect } from "react";
import CreateFormPicture from "../components/CreateFormPicture";
import getPicture from "./../logic/getPicture"
import createPicture from "../logic/createPicture";



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

    //variable para borrar elemento
    const deletePicture = (idDelPict) => {
        let index = -1; //variable para meter datos 
        let copy = [...picturesState] //crea copia pictureState

        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDelPict)  //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i; //guardo el valor i en index
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1) // va a eliminar en la posicion del index un elemento
            console.log(copy)
            setPicturesState(copy) // asigno copy a setGalleryState con el elemento eliminado
            console.log(picturesState)
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
            handleGetPicture() //solicita toda las rooms
        }
        catch (err) {
        }
    }

    //función para modificar
    function updatePicture(updateIdPicture, packagePicture) {
        let index = -1;
        let copy = [...picturesState]
        //creamos un bucle de la longitud de copy e incrementamos 1
        for (let i = 0; i < copy.length; i++) {
            if (copy[i].id === idDelPict)  //si el id  del elemento del array es igual a el id pasado por parametros(idDel)
                index = i; //guardo el valor i en index
        }

        if (index !== -1) {  //si tengo index es que he encontrado el elemento
            copy.splice(index, 1, packagePicture) // va a eliminar en la posicion del index un elemento
            console.log(copy)
            setPicturesState(copy) // asigno copy a setGalleryState con el elemento eliminado
            console.log(picturesState)
        }
        setPictureUpdate(null)
    }




    //funcion para añadir picture
    /*function createNewPicture(event) {
        event.preventDefault()
        let originalLenght = picturesState.length
        const newPicture = {
            id: ++originalLenght,
            name: namePicture,
            autor: authorPicture,
            año: yearPicture,
            image: imagePicture,
            description: descriptionPicture
        }
        console.log(newPicture)*/

    /*let copy = [...picturesState]
    copy.push(newPicture)
    setPicturesState(copy)*/



    return (
        <div className="main-exposiciones">
            <h1>Pictures</h1>
            <div className="picture-grid">
                {picturesState.map((dataPictureSingle) => {
                    return <Picture
                        key={dataPictureSingle.id}
                        pictureProp={dataPictureSingle}
                        onDelete={deletePicture} />
                })}
            </div>
            <div>
                {showFormCreate && <CreateFormPicture createNewPictureProps={createNewPicture} />} {/* Renderizado condicional */}
                <button onClick={() => setShowFormCreate(!showFormCreate)}>{!showFormCreate ? "Crear Nueva Picture" : "Cerrar Formulario"}</button>

                {pictureUpdate && <UpdateFormPicture updateNewPictureProps={handleUpdatePicture} oldPictureProps={pictureUpdate} />}  {/* Renderizado condicional */}

            </div>
        </div>


    );
}

export default Exposicion;





