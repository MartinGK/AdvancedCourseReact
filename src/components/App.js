import React, { useEffect } from 'react'
import { Route, Link, useHistory } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from 'store/actions/index'
import RequireAuth from './RequireAuth';

export default (props) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const renderButton = () => {
        if (auth) {
            return (
                <button onClick={() => dispatch(changeAuth(!auth))}>Sing Out</button>
            )
        } else {
            return (
                <button onClick={() => dispatch(changeAuth(!auth))}>Sing In</button>
            )
        }
    }

    const renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    {renderButton()}
                </li>
            </ul>
        )
    }

    return (
        <div>
            {renderHeader()}
            <RequireAuth>
                <Route path='/post' component={CommentBox} />
            </RequireAuth>
            <Route path='/' exact component={CommentList} />
        </div>
    )
}
