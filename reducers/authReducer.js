// const defaultState = {
//     isLoggedIn: false,
//     username: '',
//     password: ''
// };

// export default function reducer(state = defaultState, action) {
//     switch (action.type) {
//         case 'LOGIN': 
//             return Object.assign({}, state, { 
//                 isLoggedIn: true,
//                 username: action.username,
//                 password: action.password
//             });
//         case 'LOGOUT':
//             return Object.assign({}, state, { 
//                 isLoggedIn: false,
//                 username: '',
//                 password: ''
//             });
//         default:
//             return state;
//     }
// }

function reducer (state=[], action){
	if(action.type === 'LOGIN'){
		// im going to update
		return action.payload.data
	}else if (action.type === 'LOGOUT'){
		return []
	}else{
		// i dont care about this action. just return state
		return state
	}
	
	
}

export default reducer