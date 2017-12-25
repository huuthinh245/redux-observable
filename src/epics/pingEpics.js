import * as ActionTypes from '../types';

const ping = () => ({ type: types.PING });

export default action$ => action$.ofType(ActionTypes.PING)
    .delay(1000)
    .mapTo({ type: ActionTypes.PONG })


