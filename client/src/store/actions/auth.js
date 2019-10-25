import IS_REGISTER_OR_LOGIN from "../types";

export const setIsRegisterOrLogin = (isRegistration, isLogin) => {
    return {
        type: "IS_REGISTER_OR_LOGIN",
        payload: {
            isRegistration,
            isLogin
        }
    }    
}

// export const fetchToDos = () => dispatch => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(res => res.json())
//         .then(data => {
//             dispatch(fetchToDosSuccess(data))            
//         })
//         .catch((err)=>{
//             console.log("ERR ", err)
//         })
// }