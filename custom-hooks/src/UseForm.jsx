import { useState } from "react";

export function UseForm(){
    const [formData, setFormData]=useState({
        username:'',
        password:'',
    })


    const handleChange= (event)=>{
        const {name, value}= event.target;
        setFormData(prevState=> ({
            ...prevState,
            [name]: value
        }))
    }

    return {
        formData, handleChange
    }
}