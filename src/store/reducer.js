const initialState = {
    characters: null,
}

export default(state = initialState,action)=>{
    switch (action.type) {
        case 'ALL_CHARACTERS':{
            return{
                ...state, characters: action.payload
            }
        }
        case 'ADD_FAV':{
            return {...state,
                characters: Object.values({...state.characters,[action.payload]:{...state.characters[action.payload],favorite:true}})
            }
        }
        case 'DELETE_FAV':{
            return {...state,
                characters: Object.values({...state.characters,[action.payload]:{...state.characters[action.payload],favorite:false}})
            }
        }
        case 'ADD_CHARACTER':{
            return{
                ...state, characters: state.characters.concat(action.payload)
            }
        }
        default:
            return state;
    }
}