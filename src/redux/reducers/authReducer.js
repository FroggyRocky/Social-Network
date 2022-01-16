import { authAPI, SecurityAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

const SET_LOGGED_USER_DATA =
  "social-network/reducers/authReducer/SET-LOGGED-USER-DATA";
const SET_CAPTCHA_URL = "social-network/reducers/authReducer/SET-CAPTCHA-URL";

const initialState = {
  email: null,
  id: null,
  login: null,
  isLogged: false,
  captchaURL: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isLogged: action.isLogged,
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.url,
      };
    default:
      return state;
  }
}

const authUserData = (isLogged, email, id, login) => ({
  type: SET_LOGGED_USER_DATA,
  isLogged,
  userData: { email, id, login },
});

const setCaptchaURLSuccess = (url) => ({ type: SET_CAPTCHA_URL, url });

const toAuth = () => async (dispatch) => {
  const response = await authAPI.auth();
  if (response.resultCode === 0) {
    let { email, id, login } = response.data;
    dispatch(authUserData(true, email, id, login));
  }
};
//10
const logIn = (email, pass, remember, captcha) => {
  return (dispatch) => {
    authAPI.login(email, pass, remember, captcha).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(toAuth());
      } else if (res.data.resultCode === 1 && res.data.messages.length > 0) {
        dispatch(stopSubmit("Login", { _error: res.data.messages[0] }));
      } else if (res.data.resultCode === 10) {
        SecurityAPI.getCaptchaURL().then((res) => {
          dispatch(setCaptchaURLSuccess(res.data.url));
        });
      } else {
        dispatch(
          stopSubmit("Login", {
            _error: "Something went wrong, try one more time",
          })
        );
      }
    });
  };
};

const logOut = () => {
  return (dispatch) => {
    authAPI.logout().then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(authUserData(false, null, null, null));
      }
    });
  };
};

export { toAuth, logIn, logOut };
