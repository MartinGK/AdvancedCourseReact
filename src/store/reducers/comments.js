import { SAVE_COMMENT, FETCH_COMMENT } from 'store/actions/types';

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload]
        case FETCH_COMMENT:
            const comments = action.payload.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state;
    }
}