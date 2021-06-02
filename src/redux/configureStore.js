import { Dishes } from './dishes';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {Comments} from './comments'
import {combineReducers, createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            promotions:Promotions,
            comments:Comments
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}