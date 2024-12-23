export function UncontrolledLogin(){
    function handleOnSubmit(event){
event.preventDefault()
const username=event.target.elements.namedItem('username').value
const password=event.target.elements.namedItem('password').value
const checkbox=event.target.elements.namedItem('checkbox').checked

const data= {
    username,
    password,
    checkbox
}
console.log(data)
    }

    const loginWithFormData= (event)=>{
        const formData= new FormData(event.target)

        const data={
            username: formData.get('username'),
            password: formData.get('password'),
            checkbox: formData.get('checkbox')==='on' ? true: false,
        }

        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit} >
            <input type="text" name="username" />
            <input type="password" name="password" />
            <input type="checkbox" name="checkbox" />
            <button type="submit">Login</button>
            <button onClick={loginWithFormData}>Login 2</button>

            </form>
           


        </div>
    )
}