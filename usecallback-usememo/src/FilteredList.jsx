import { useMemo } from "react";

export function FilteredList(){
    const filteredList= useMemo(()=>{
return list.filter(item => item.age>=18)
    },[list])

    return(
        <div>
            <h3>Lista Filtrata</h3>
            <ul>
                {filteredList.map(item=>(
                    <li key={item.id}> {item.name} (Age: {item.age}</li>
                ))}
            </ul>
        </div>
    )
}