const form= document.querySelector('.form')
const email= document.querySelector('.email')
const password= document.querySelector('.password')
let  html= document.querySelector('.unregistered')
const  usuario= document.querySelector('.usuario')

const users= [
    {
        email: 'user@gmail.com',
        password: 123
    },
    {
        email: 'admin@admin.com',
        password: 1234
    }
]

let user={}

form.addEventListener('submit', function (e){
    // e.preventDefault()

    user= {
        email: email.value,
        password: password.value
    }

    const isRegistered= users.find(el=>el.password === Number(user.password) && el.email === user.email)

    if(!isRegistered){
        html.innerHTML=`unregistered user, <strong class="text-danger">Create an account</strong>`;
        e.preventDefault()

    }else{
        return user
    }
})


user === '' || user === undefined? usuario.innerHTML= `User`: usuario.innerHTML= `${user?.email}`;
