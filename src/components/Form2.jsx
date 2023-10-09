import React, {useState} from "react";

export default function Form2() {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmedPassword:"",
        isJoining:true,
    })

    function handleSubmit(e) {
        e.preventDefault

        if(formData.password===formData.confirmedPassword) {
            console.log ("ok")
        } else {
            return "no"
        }
        if(formData.isJoining){
            console.log("Thanks")
        }
    }

    function handleChange(e) {
        const {name, value, type, checked} = e.target
        setFormData(prevData => { ({
            ...prevData,
            [name]: type==="checkbox" ? checked : value
        })})
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email address" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    name="confirmedPassword"
                    value={formData.confirmedPassword}
                    onChange={handleChange}
                />

                <div>
                    <input 
                        type="checkbox"
                        id="okayToEmail"
                        checked={formData.isJoining}
                        name="isJoining"
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newslatter</label>
                </div>

                <button>Sign up</button>
            </form>
        </div>
    )
}