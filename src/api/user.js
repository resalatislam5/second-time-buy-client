export const AuthToken = (email,user) =>{
    console.log(email,user)
    fetch(`http://localhost:5000/users?email=${email}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            console.log(data)
            localStorage.setItem('product-token', data.token)
        }
    })
}