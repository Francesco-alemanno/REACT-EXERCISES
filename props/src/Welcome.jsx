import Age from "./Age"

function Welcome({name, age}){
    return (
        <>
        <p>Welcome, <strong>{name}!</strong></p>
        <Age eta={38}></Age>
        </>
    )
}

export default Welcome