import {} from "../types";

// export const registrationSuccess = data => {
//     return {
//         type: REGISTRATION,
//         payload: data
//     }    
// }
// export const registration = data => dispatch => {    
//     fetch("http://localhost:8080/users/register",{
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(res => res.json())
//         .then(data => {
//             dispatch(registrationSuccess(data))            
//         })
//         .catch((err)=>{
//             console.log("ERR ", err)
//         })
// }
