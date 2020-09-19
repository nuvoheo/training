import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const actionTypes = {
    fetchPosts: 'FETCH_POSTS',
    fetchUser: 'FETCH_USER'
}
export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: actionTypes.fetchPosts, payload: response.data });
}

export const fetchUser = (id) => async (dispatch) => {
    _fetchUser(id, dispatch);
}


const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: actionTypes.fetchUser, payload: response.data });
})