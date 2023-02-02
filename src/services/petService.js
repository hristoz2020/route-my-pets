const baseUrl = 'http://localhost:3030/data';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);

    let pets = await response.json();

    // let result = Object.values(pets);
   
    return pets;
}

export const create = async (petData, token) => {
    console.log('petData  ', petData);
    console.log('petData JSON ', JSON.stringify(petData));

    let response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...petData, likes: []})
    });
    
    let result = await response.json();
   
    return result;
}

export const getOne = (petId) => {
    return fetch(`${baseUrl}/pets/${petId}`)
        .then(res => res.json())
};