const FOLLOW = 'FOLLOW' //action types
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        { id: 1, followed: true, fullName: 'Dmitry', status: 'I\'m a boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 2, followed: false, fullName: 'Sasha', status: 'I\'m a boss too', location: {city: 'Aktau', country: 'Kazakhstan'}},
        { id: 3, followed: true, fullName: 'John', status: 'I\'m a boss too', location: {city: 'Prague', country: 'Czech Republic'}},
        { id: 4, followed: false, fullName: 'Alex', status: 'Me too', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const followAC = () => ({
    type: FOLLOW
})
export const unfollowAC = () => ({
    type: UNFOLLOW
})

export default usersReducer