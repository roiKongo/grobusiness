import { put, call, takeLatest} from "redux-saga/effects"
import { loginUser,loginUserSuccess,loginUserFailure } from "../reducers/slices/authSlice";
import { authenticateUser } from "../../services/auth";
function* loginWorker (action){

    try {
        const {username,password} = action.payload;
        const user  = yield call(authenticateUser,username,password);
        yield  put(loginUserSuccess(user));
        
    } catch (error) {

        yield put(loginUserFailure(error.message));
        
    }
}

function* authSaga (){
    yield  takeLatest(loginUser.type,loginWorker);
}

export default authSaga;
