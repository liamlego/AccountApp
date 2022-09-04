import axios from "axios";


// Express Endpoint -> http://localhost:3001/endpoint
// Flask Endpoint -> http://localhost:5000
export function submitLogin(username, password) {

        // axios.post('http://127.0.0.1:7777/endpoint/7', {
        //     username: username,
        //     password: password
        // }).then((res) => {
        //     console.log(res.data.name);
        // });

        // Have it as a string
        // I think putting a json object is specific
        // to express and or they do something to receive it, Im not sure
        // This just puts it in the normal body after the header
        //axios.post('http://127.0.0.1:5559', "{username: username, password: password}");

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