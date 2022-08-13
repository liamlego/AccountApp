import axios from "axios";


// Express Endpoint -> http://localhost:3001/endpoint
// Flask Endpoint -> http://localhost:5000
export function submitLogin(username, password) {

    
        // Returns a promise that axios returns
        return axios.post('http://localhost:3001/endpoint/login', {
            username: username,
            password: password
        }   
        ).catch((error) => {
            console.log("ERROR could not Reach http://localhost:3001/endpoint/login");
            return {
                    data: {
                        response: "ERROR"
                    }
                }
        });
}

export function getDescription(username) {
    return axios.post('http://localhost:3001/endpoint/profile', {
        username: username
    }).catch((error) => {
        console.log("ERROR could not Reach http://localhost:3001/endpoint/profile");
        return {
                data: {
                    response: "ERROR"
                }
            }
    });
}

export function getApps(username) {
    return axios.post('http://localhost:3001/endpoint/apps', {
        username: username
    }).catch(error => {
        console.log("ERROR could not Reach http://localhost:3001/endpoint/apps");
        return {
                data: {
                    response: "ERROR"
                }
            }
    });
}

export function requestApp(username, app) {
    return axios.post('http://localhost:3001/endpoint/addApp', {
        username: username,
        app: app
    }).catch(error => {
        console.log("ERROR could not Reach http//localhost:3001/endpoint/getApp");
        return {
            data: {
                response: "ERROR"
            }
        }
    })
}