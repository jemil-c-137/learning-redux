import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";
import {combineReducers} from "redux";

export function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT){
    return state - 1
  } else if (action.type === ASYNC_INCREMENT) {
    return state + 1
  }

  return state
}

const initTheme = {
  value: 'light',
  disabled: false
}

export function themeReducer(state = initTheme, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload}
    case DISABLE_BUTTONS:
      return {...state, disabled: true}
    case ENABLE_BUTTONS:
      return {...state, disabled: false}
    default: return state

  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})