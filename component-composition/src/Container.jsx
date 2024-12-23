import { useState } from "react"

export function Container({title, children}){
    const[collapsed,setCollapsed]=useState(false)
function handleToggle(){
    setCollapsed(t=> !t)
}
    return(
        <div className="app">
            <div className="app-title">{title} <button onClick={handleToggle}>Toggle</button></div>
          {!collapsed && <div className="app-children">{children}</div> }  
            

        </div>
    )
}