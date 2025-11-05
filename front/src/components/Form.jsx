import { useState,useEffect } from "react";
import Validation from "./Validation";
import tittlef from './RyM.png'

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
    /* useEffect(()=> {
        document.body.style.backgroundImage= url('https://images.bauerhosting.com/legacy/empire-images/features/59d7b5d65d36143c05ed7dc1/mzzHr6g1yvZ05Mc7hNj3tUdy2bM.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=992&q=80');

        return ()=>{
            document.body.style.backgroundImage=null;
        }
    },[]); */

    return (
        <div className="formStyle">
            <div>
                <img src={tittlef} alt="Bienvenido!!" />
            </div>
            <form className="formformStyle" onSubmit={handleSubmit}>
            <label className="labelForm">Email: </label>
            <input placeholder='example@gmail.com' className="input1" type="text" value={userData.email} name='email' onChange={handleChange}/>
            {userData.email !== ''? <>{errors.email}</> : ''} {/* Para que me muestre X estando vacío usar errors no userData */}
            <br />
            <label className="labelForm">Password: </label>
            <input placeholder='*******' type="password" className="input1" value={userData.password} name='password' onChange={handleChange}/>
            {userData.password !== ''? <>{errors.password}</> : ''}
            <br />
            <button type="submit" /* onClick={handleSubmit} Así había que hacer */>Submit</button>

        </form>
        </div>
        
    )
}
export default Form;