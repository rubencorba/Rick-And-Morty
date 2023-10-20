import { useState,useEffect } from "react";
import Validation from "./Validation";

const Form =({login})=>{

    const [userData, setUserData]= useState({
        email: '',
        password: ''
    })

    const [errors, setErrors]= useState({})

    const handleChange= (event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    useEffect(()=> {
        setErrors(Validation(userData));
    },[userData]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        login(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Email: </label>
            <input type="text" value={userData.email} name='email' onChange={handleChange}/>
            {userData.email !== ''? <>{errors.email}</> : ''} {/* Para que me muestre X estando vacío usar errors no userData */}
            <br />
            <label >Password: </label>
            <input type="password" value={userData.password} name='password' onChange={handleChange}/>
            {userData.password !== ''? <>{errors.password}</> : ''}
            <br />
            <button type="submit" /* onClick={()=>{ */>Submit</button>

        </form>
    )
}
export default Form;