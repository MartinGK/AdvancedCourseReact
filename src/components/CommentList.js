import React from 'react'
import { useSelector } from 'react-redux';

export default () => {
    const comments = useSelector(state => state.comments)

    return (
        <div><h1>Comment List</h1>
            <ul>
                {comments.map((comment, i) => <li key={i}>{comment}</li>)}
            </ul>
        </div>
    )
}
