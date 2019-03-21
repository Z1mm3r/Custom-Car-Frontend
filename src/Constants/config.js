const baseurl = "http://localhost:3000/api/v1"

const endpoints = {
  car_models: `${baseurl}/car_models`,
  car_parts: `${baseurl}/car_models/parts`,
}

const WELCOME = "WELCOME";
const CAR_SELECTION = "CAR_SELECTION"

export const TABS = {WELCOME,CAR_SELECTION}


export default endpoints
