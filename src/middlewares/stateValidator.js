import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
    next(action);

    console.log(getState());
    if(!tv4.validate(getState(), stateSchema)){
        console.warm("Invalid state schema detected");
    }
};



