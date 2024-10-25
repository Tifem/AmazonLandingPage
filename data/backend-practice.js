const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);

})

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

//Type of request
//GET = get something from backend,
// POST = create something , PUT = update soemthing, DELETE = to delete something
//the backend can responds to different types of data 