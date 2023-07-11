import React, { useState } from "react";
import "./home.css"
import { Row, Col, Button } from "react-bootstrap";
// import logo from "./images/GP_logomark yellow.png";

// import { Password } from 'primereact/password';

function Home(){

    const [firstName, setFirstName]= useState<string>("");
    const [lastName, setLastName]= useState<string>("");
    // const [lastName, setLastName]= useState<string>("");
    const [email, setEmail]= useState<string>("");
    const [Password, setPassword]= useState<string>("");
    const [retypePass, setRetypePass]= useState<string>("");
    // const []

    // const [showPass, setShowPass] = useState<boolean>(false);
    // const [showRetype, setShowRetype] = useState<boolean>(false);

    const typeFirstName = (e:string) => {
        setFirstName(e);
    }

    const typeLastName = (e:string) => {
        setLastName(e);
    }

    const typeEmail = (e:string) => {
        setEmail(e);
    }

    const typePassword = (e:string) => {
        setPassword(e);
    }

    const retypePassword = (e:string) => {
        setRetypePass(e);
    }

    // const handleShowPassword = () => {

    // }

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setRetypePass('');
    }

    return (
        <div className="body">
            
            <div className="header">
                <div>
                    {/* <img src={require("./images/GP_logomark yellow.png")}></img> */}
                </div>
                <div>
                    <h1 className="brand">GAMER POINTS<span className="tm">™</span></h1>
                    <h3 className="heading">REGISTRATION</h3>
                </div>

                <form className="forms">
                    <div className="name">
                        <div>
                            <label className="half-tag">First Name</label>
                            <input type="text" className="cont" onChange={(e) => typeFirstName(e.target.value)} value={firstName}></input>
                        </div>

                        <div>
                            <label className="half-tag">Last Name</label>
                            <input type="text" className="cont" onChange={(e) => typeLastName(e.target.value)} value={lastName}></input>
                        </div>
                    </div>

                    <div>
                        <label className="tag">Birthday</label>
                        <input type="text" className="cont" style={{width: '728px'}}></input>
                    </div>

                    <div>
                        <label className="tag" style={{left: '-340px'}}>Email</label>
                        <input type="text" className="cont" style={{width: '728px'}} onChange={(e) => typeEmail(e.target.value)} value={email}></input>
                    </div>

                    <div className="password">
                        <div>
                            <label className="half-tag" style={{left: '-145px'}}>Password</label>
                            <input type="text" className="cont" onChange={(e) => typePassword(e.target.value)} value={Password}></input>
                        </div>

                        <div>
                            <label className="half-tag" style={{left: '-120px'}}>Password Retype</label>
                            <input type="password" className="pass-cont" onChange={(e) => retypePassword(e.target.value)} value={retypePass}></input>
                        </div>
                    </div>
                    
                    <div className="buttons">
                        <button className="bttn" onClick={() => resetForm()}>Cancel</button>
                        <button className="bttn" style={{backgroundColor: '#F2CB05'}} type="submit">Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Home;