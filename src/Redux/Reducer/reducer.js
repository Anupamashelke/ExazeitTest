import { USER } from '../action';

const initialState = {
    name:'' 

}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER:
           console.log('reducer',action)
            return {
                ...state,
                name: action.data
            }

        default:
            return state;
    }
}

export default userReducer;