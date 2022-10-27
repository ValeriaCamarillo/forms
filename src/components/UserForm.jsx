import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [FavLanguage, setFaveLanguage] = useState("");
    const [jobReady, setJobReady] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, ConfirmPassword, FavLanguage, jobReady };

        console.log("Welcome", newUser);
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };

    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("")


    const FirstnameHandler = (event) => {
        setFirstname(event.target.value)
        if (event.target.value.length < 2) {
            setFirstnameError("Your first name must be longer than 2 chars!")
        }
        else {
            setFirstnameError("")
        }
    }

    const LastnameHandler = (event) => {
        setLastname(event.target.value)
        if (event.target.value.length < 2) {
            setLastnameError("Your last name must be longer than 2 chars!")
        }
        else {
            setLastnameError("")
        }
    }

    const EmailHandler = (event) => {
        setEmail(event.target.value)
        if (event.target.value.length < 2) {
            setEmailError("Your email must be longer than 2 chars!")
        }
        else {
            setEmailError("")
        }
    }

    const PasswordHandler = (event) => {
        setPassword(event.target.value)
        if (event.target.value.length < 2) {
            setPasswordError("Your password must be longer than 2 chars!")
        }
        else {
            setPasswordError("")
        }
    }

    const ConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
        if (event.target.value != password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setConfirmPasswordError("")
        }
    }


    // if e.target.value.target != e.target.value.ConfirmPassword

    const dropdown = (event) => {
        setFaveLanguage(event.target.value)
    }

    const checkbox = (event) => {
        setJobReady(event.target.checked)
    }

    return (
        <form onSubmit={(e) => createUser(e)}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstname} onChange={FirstnameHandler} />
                {(firstnameError) ? <p>{firstnameError}</p> : null}
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange={LastnameHandler} />
                {(lastnameError) ? <p>{lastnameError}</p> : null}
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={EmailHandler} />
                {(emailError) ? <p>{emailError}</p> : null}

            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={PasswordHandler} />
                {(passwordError) ? <p>{passwordError}</p> : null}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={ConfirmPassword} onChange={ConfirmPasswordHandler} />
                {(ConfirmPasswordError) ? <p>{ConfirmPasswordError}</p> : null}
            </div>
            <div>
                <label> Favorite Language</label>
                <select onChange={dropdown} value={FavLanguage}>
                    <option>Choose One</option>
                    <option value="js">JavaScript</option>
                    <option value="java">Java</option>
                </select>
            </div>
            <div>
                <label>Job Ready:</label>
                <input type="checkbox" checked={jobReady} onChange={checkbox} />

            </div>
            <input type="submit" value="Create User" />
            <div>
                <p>Your Form Data:</p>
                <p>First Name: {firstname} </p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {ConfirmPassword}</p>
            </div>
        </form>
    );
};

export default UserForm;