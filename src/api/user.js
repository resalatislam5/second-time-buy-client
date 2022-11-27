export const AuthToken = (email,user) =>{
    fetch(`https://second-time-bye-server.vercel.app/users?email=${email}`,{
        method: 'PUT',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            localStorage.setItem('product-token', data.token)
        }
    })
}