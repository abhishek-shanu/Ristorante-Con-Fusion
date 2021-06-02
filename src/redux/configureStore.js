import { Dishes } from './dishes';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {Comments} from './comments'
import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            promotions:Promotions,
            comments:Comments,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}