const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state=initialState, action) => {

    switch (action.type){
        case SET_USER_DATA:
            debugger
            return {...state,
                ...action.data,  // will change id, email and login of the state
                isAuth: true
            }
        default:
            return state    
    }
}

export const setAuthUserData = (id, email, login ) => ({
    type: SET_USER_DATA, data: {id, email, login}
})

export default authReducer