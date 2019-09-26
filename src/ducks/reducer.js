

//inital state
const initalState = {
    loggedIn: false,
    user: null
}
//action constants
const UPDATE_USER = 'UPDATE_USER'

//action builders
export const updateUser = (userObj) => {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}
//reducer function

const reducer = (state= initalState, action)=>{
    switch(action.type){
        case UPDATE_USER:
            return {...state, user: action.payload}
        default: return state
    }
}

export default reducer