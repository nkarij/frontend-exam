// import {  } from '../Constants/Endpoints';
// import {  } from '../Constants/Endpoints';
import { URL } from '../Config/apiconfig'

export default async function fetchAsset(id){
	return fetch('http://localhost:4000/assets/' + id)
		.then(response => response.json())
		.then(data => data)
		.catch(err => console.error("fetch asset", err));
}

