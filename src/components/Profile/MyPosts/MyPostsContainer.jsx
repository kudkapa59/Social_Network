import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogues-reducer";

// const MyPostsContainer = (props) => {
//
//     return (<StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                          posts={state.profilePage.posts}
//                          newPostText={state.profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;