import { URL_ROOTS } from '../../../config';


// method get
export async function getDataPoints(id){
    
    let PUSH_ENDPOINT = `${URL_ROOTS.WOOMIO}/user/gdprrequests/?rid=${id}`;

    try {
        const response = await fetch(PUSH_ENDPOINT, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        })
            // console.log("notifications:", response.json());
            return response.json();
        } catch (error) {
            console.error('error', { error })
            return error
        }
}


fetch('http://example.com/movies.json')
.then((response) => {
    return response.json();
})
.then((json) => {
    // console.log(json);
});        


// method post
export async function setDataAccess({ id, isOpen, mediaId }) {
    try {
      const response = await fetch(`${URL_ROOTS.WOOMIO}/connect/OpenMediaData`, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isOpen, mediaId }),
      })
      // return response.json()
    } catch (error) {
      console.error({ error })
      return error
    }
}
  
