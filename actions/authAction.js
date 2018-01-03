import axios from 'axios'

function signup(name,email,password){
	var axiosPromise = axios({
	method: 'POST',
	url: 'http://localhost:3000/signup',
	data: {
		name: name,
		email: email,
		password: password
		}
	})
    return {
        type: 'SIGNUP',
        payload: axiosPromise
    };
};

export default signup

export const logout = () => {
    return {
        type: 'LOGOUT'
    };
};