const ADD_POST = 'ADD-POST' //action types
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are u?', likesCount: 11 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 },
        { id: 3, message: 'Hi', likesCount: 11 },
        { id: 4, message: 'Blalbla', likesCount: 11 }
    ],
    newPostText: 'it.com'
}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer