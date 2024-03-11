import { API_SOCIAL_URL } from "../api/constants.mjs";

const action = "/auth/register";
const method = "post";


export async function register (profile){
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL,{
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    return result
}