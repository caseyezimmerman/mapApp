import axios from 'axios'

function login(name,email,password){
	var axiosPromise = axios({
	method: 'POST',
	url: 'localhost:3000/login',
	data: {
		name: name,
		email: email,
		password: password
		}
	})
    return {
        type: 'LOGIN',
        payload: axiosPromise
    };
};

export default login

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};