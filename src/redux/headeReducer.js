const SWITCH_BURGER = 'SWITCH-BURGER'

let initialState = {
  burgerStatus: ''
}

const headerReducer = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_BURGER: {
      return {...state,
      burgerStatus: state.burgerStatus == true ? false : true}
    }
  }
}

export const switchBurger = (value) => {
  return {type: SWITCH_BURGER, value}
}
