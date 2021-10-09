//AGREGAR PERSONAJES
    const allcharacters = (data) =>{
        return {
            type: "ALL_CHARACTERS",
            payload : data
        }
    }
//AGREGAR A FAVORITOS
    const addfav = (index) =>{
        return {
            type: "ADD_FAV",
            payload : index
        }
    }
    const deletefav = (index) =>{
        return {
            type: "DELETE_FAV",
            payload : index
        }
    }

//AGREGAR A PERSONAJE
const addcharacter = (data) =>{
    return {
        type: "ADD_CHARACTER",
        payload : data
    }
}

export {allcharacters,addfav,deletefav,addcharacter}