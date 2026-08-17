import { useState } from "react"

const Input =({className}) => {
const [emailInput,setEmailInput]=useState("")
const [isValidEmail,setIsValidEmail]=useState(false);


const handleEmailInput = (e) => {
const value = e.target.value;

const isValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);


setEmailInput(value)
setIsValidEmail(isValid)
}


return(
<input
type="email"
value={emailInput}
name="email"
placeholder="Updates in your inbox..."
onChange={handleEmailInput}
className={`${className}`}
/>



)
}
export default Input