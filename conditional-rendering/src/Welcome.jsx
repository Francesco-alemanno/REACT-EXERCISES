import Age from "./Age"

function Welcome ({name,age}){
    return(
        <>
        <p>Welcome, {name}
            {age>18 && <Age age={age}></Age>}
            {age && <Age age={age}></Age>}
            {age>18 && age<65 && <Age age={age}></Age>}
            {age>18 && name==='Jhon' && <Age age={age}></Age>}
            <Age age={age}></Age>
        </p>

        
        </>
    )
}

export default Welcome