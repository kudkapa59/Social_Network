import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST' //action types
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are u?', likesCount: 11 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 },
        { id: 3, message: 'Hi', likesCount: 11 },
        { id: 4, message: 'Blalbla', likesCount: 11 }
    ],
    newPostText: 'it.com',
    profile: null
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state,
            posts: [...state.posts,{
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }],
            newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
            newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({
    type: ADD_POST
})
export const updateNewPostText = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfileSuccess = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const setUserProfile = (user_id) => { //ThunkCreator
    return (dispatch) => {
        usersAPI.getProfile(user_id)
            .then(data => {
                dispatch(setUserProfileSuccess(data))
            })
    }
}

export default profileReducer