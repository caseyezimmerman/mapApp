import axios from 'axios'

function MapAction(currentLocation,distance,navigator){
	var axiosPromise = axios({
	method: 'POST',
	url: 'http://localhost:3000/map',
	data: {
		currentLocation: currentLocation,
		distance: distance
		}
	})
	.then((data)=>{
		console.log('hi')
		console.log(data)
		navigator.navigate('RunningMap')
		return data
	})
    return {
        type: 'MAPMAKER',
        payload: axiosPromise
    };
};

export default MapAction