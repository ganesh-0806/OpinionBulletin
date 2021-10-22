const initState = {
    posts: [
        {id: '1', title: 'Title1', body: 'Body1'},
        {id: '2', title: 'Title2', body: 'Body2'},
        {id: '3', title: 'Title3', body: 'Body3'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => post.id !== action.id);
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;