import Picture from "../components/Picture"
import dataPicture from "../data/dataPicture";
import { useState } from "react";


function Exposicion() {
    const [picturesState, setPicturesState] = useState(dataPicture)
    console.log(picturesState)
    const [namePicture, setNamePicture] = useState('')
    const [authorPicture, setAuthorPicture] = useState('')
    const [yearPicture, setYearPicture] = useState('')
    const [imagePicture, setImagePicture] = useState('')
    const [descriptionPicture, setDescriptionPicture] = useState('')
    

    //variable para borrar elemento
    const deletePicture = (idDelPict) => {
        let index = -1; //variable para meter datos 
        let copy = [...picturesState] //crea copia galleryState

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
//funcion para añadir picture
    function createNewPicture (event){
        event.preventDefault()
        let originalLenght =picturesState.length
        const newPicture = {
            id:++originalLenght,
            name:namePicture,
            autor: authorPicture,
            año: yearPicture,
            image: imagePicture,
            description: descriptionPicture
        }
        console.log (newPicture)

        let copy =[...picturesState]
        copy.push(newPicture)
        setPicturesState(copy)

    }
    



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
                <form onSubmit={createNewPicture}>
                    <div className="Formulario">
                        <label> Nombre Obra</label>
                        <input
                            value={namePicture} onChange={(event) => { setNamePicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label> Autor</label>
                        <input
                            value={authorPicture} onChange={(event) => { setAuthorPicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label> Año</label>
                        <input
                            value={yearPicture} onChange={(event) => { setYearPicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label> Imagen</label>
                        <input
                            value={imagePicture} onChange={(event) => { setImagePicture(event.target.value) }}
                        />
                    </div>
                    <div className="Formulario">
                        <label> Descripción</label>
                        <input
                            value={descriptionPicture} onChange={(event) => { setDescriptionPicture(event.target.value) }}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </div>
    );
}

export default Exposicion;





