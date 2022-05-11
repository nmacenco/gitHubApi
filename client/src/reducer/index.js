

const initialState = { 
    user : [] ,
    commits : [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) { 
        case 'GET-INFO' : 
        return {
            ...state, 
            user : action.payload , 
        }
        case 'GET-COMMIT-INFO' : 
        return {
            ...state, 
            commits : action.payload , 
        }
        default :
        return state ; 
    }
}