import { Dishes } from './dishes';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import {Comments} from './comments'
import {combineReducers, createStore} from 'redux';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            leaders:Leaders,
            promotions:Promotions,
            comments:Comments
        })
    );

    return store;
}