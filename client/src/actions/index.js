import axios from "axios";

export function  getUser  () {
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/nmacenco");
        return dispatch({
          type: "GET-INFO",
          payload: info.data,
        });
      };
}
export function  getCommits  () {
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/get-api-info/nmacenco");
        return dispatch({
          type: "GET-COMMIT-INFO",
          payload: info.data,
        });
      };
}
