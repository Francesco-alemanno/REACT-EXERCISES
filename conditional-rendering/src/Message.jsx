import Age from "./Age";

function Message({age}){
    return (
        <>
        {age>18 ? <Age age={age}></Age> : <p>You are very young</p>}
        </>
    )
}
export default Message