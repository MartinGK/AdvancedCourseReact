import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveComment, fetchComments } from 'store/actions';

export default function CommentBox() {
    const [comment, setComment] = useState('')
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(saveComment(comment));

        setComment('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={handleChange} value={comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className='fetch-comments' onClick={()=>dispatch(fetchComments())}>Fetch Comments</button>
        </div>
    )
}