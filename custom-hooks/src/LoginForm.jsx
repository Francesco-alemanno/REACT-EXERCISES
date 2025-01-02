export function LoginForm(){
    const {formData, handleChange}=useForm()


    const handleSubmit= (event)=>{
        event.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" value={formData.username} onChange={handleChange} />

            <label>Password:</label>
            <input type="password" value={formData.password} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    )
}