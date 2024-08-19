// Use this api url to copy syntax
// https://jsonplaceholder.typicode.com/

const apiCall = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    console.log(response);
}

// const getTodo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let r = await response.json()
//     return r
// }

const postController = async (PostData) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        }
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    console.log(response);
}



const mainFunc = async () => {
    let todo = {
        title: 'Harry2',
        body: 'bhai2',
        userId: 1100,
    }
    let todor = await apiCall(todo)
    console.log(todor)
    // console.log(await getTodo( ))
}

mainFunc()


// fn1 -> Sending post request