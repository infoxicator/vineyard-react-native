import { EVENT_FETCH_SUCCESS, EVENT_FETCH_ERROR } from './types';
import { WORDPRESS_BASE_URL } from '../constants/WordpressAPI';

export const eventFetch = () => {
    const url = `${WORDPRESS_BASE_URL}posts/?categories=4`;
    return async (dispatch) => {
        try {
            const response = await fetch(url);
            const responseBody = await response.json();
            dispatch({ type: EVENT_FETCH_SUCCESS, payload: responseBody });
        } catch (e) {
            dispatch({ type: EVENT_FETCH_ERROR });
        }
    };
};
