const Validation= (Data)=>{
    /* if((!/\S+@\S+\.\S+/.test(Data.email)) && (Data.password.length<6 || Data.password>10))return {email: "X",password: "X"}
    if((!/\S+@\S+\.\S+/.test(Data.email)) && (Data.password.length>=6 && Data.password<=10))return {email: "X",password: "✓"}
    if((/\S+@\S+\.\S+/.test(Data.email)) && (Data.password.length<6 || Data.password>10))return {email: "✓",password: "X"}
    if((/\S+@\S+\.\S+/.test(Data.email)) && (Data.password.length>=6 && Data.password<=10))return {email: "✓",password: "✓"} */

    if((/\S+@\S+\.\S+/.test(Data.email))&& Data.email.length<35){
        if(Data.password.length>=6 && Data.password.length<=10 && (/\d/.test(Data.password))) {return {email: "✓",password: "✓"};
    }else{return {email: "✓",password: "X"}}
    }else if(Data.password.length>=6 && Data.password.length<=10 && (/\d/.test(Data.password))) {return {email: "X",password: "✓"};
    }else{return {email: "X",password: "X"}}

    

}
export default Validation;

// /\S+@\S+\.\S+/