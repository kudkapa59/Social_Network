import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW' //action types
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users] //users only for this page
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({
    type: FOLLOW, userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW, userId
})
export const setUsers = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE, pageNumber
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})
export const toggleIsFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId
})

export const getUsers = (currentPage, pageSize) => { //ThunkCreator
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (user_id) => { //ThunkCreator
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, user_id))
        usersAPI.follow(user_id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(user_id))
                }
                dispatch(toggleIsFollowingInProgress(false, user_id))
            })
    }
}

export const unfollow = (user_id) => { //ThunkCreator
    return (dispatch) => {
        dispatch(toggleIsFollowingInProgress(true, user_id))  //make loading while waiting for response
        usersAPI.unfollow(user_id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(user_id))
                }
                dispatch(toggleIsFollowingInProgress(false, user_id))
            })
    }
}

export default usersReducer