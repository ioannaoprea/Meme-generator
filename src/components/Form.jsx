import React from "react";

export default function From() {
    const [formData, setFormData] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comments:"",
            isFriendly: true,
            employment:"{}",
            favColor:""
        }
    )

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(prevData =>{
            return {
                ...prevData, 
                [name]: type ==="checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        // sumitApi(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox"
                id="isFriendly"
                name="isFriendly"
                checked={true}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>

            <fieldset>
                <legend>Current employemnt staturs</legend>

                <input 
                    type="radio" 
                    id="unemployed"
                    name="employment" 
                    value="unemployed"
                    checked={formData.employment==="unemployed"}
                    onClick={handleChange} 
                />
                <label htmlFor="unemployed">Unemployed</label>

                <input 
                    type="radio" 
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment==="part-time"}
                    onClick={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>

                <input 
                    type="radio" 
                    id="full-time"
                    name="employment" 
                    value="full-time"
                    checked={formData.employment==="full-time"}
                    onClick={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset>

            <label htmlFor="favColor"></label>
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">Choose</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="gree">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit</button>
        </form>
    )

}