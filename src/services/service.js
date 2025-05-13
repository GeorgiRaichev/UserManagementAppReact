const baseUrl = `https://jsonplaceholder.typicode.com/users`;

export const getData = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

export const postData = async (data) => {
    const req = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const response = await req.json();
    return response;
}