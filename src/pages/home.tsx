import React, { useState } from "react";
import "./home.css"
import { Row, Col, Button } from "react-bootstrap";
import { z } from "zod";

const FormDataSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  birthday: z.coerce.date(),
  email: z.string().email(),
  password: z.string().min(8, "Must be atleast 8 characters long"),
});


function Home(){
    const [formData, setFormData] = useState({});
    
    const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const output=FormDataSchema.safeParse({
        //     firstname: "1",
        //     lastname: "1",
        //     birthday: "2023/12/01",
        //     email: "test@gmail.com",
        //     password: "12345678",
        // });
        console.log(formData);
        const validation = FormDataSchema.safeParse(formData);
        console.log(validation);
      };

    const [firstName, setFirstName]= useState<string>("");
    const [lastName, setLastName]= useState<string>("");

    const typeFirstName = (e:string) => {
        setFirstName(e);
    }

    const typeLastName = (e:string) => {
        setLastName(e);
    }

    return (
        <div className="body">
            
            <div className="header">
                <div>
                    {/* <img></img> */}
                </div>
                <div>
                    <h1 className="brand">GAMER POINTS<span className="tm">™</span></h1>
                    <h3 className="heading">REGISTRATION</h3>
                </div>

                <div className="forms">
                    <div className="name">
                        <div>
                            <p className="half-tag">First Name</p>
                            <input type="text" className="cont" onChange={(e) => typeFirstName(e.target.value)}></input>
                        </div>

                        <div>
                            <p className="half-tag">Last Name</p>
                            <input type="text" className="cont" onChange={(e) => typeLastName(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="birthday">
                        <p className="tag">Birthday</p>
                        <input type="text" className="cont" style={{width: '730px'}}></input>
                    </div>

                    <div className="birthday">
                        <p className="tag" style={{left: '-340px'}}>Email</p>
                        <input type="text" className="cont" style={{width: '730px'}}></input>
                    </div>

                    <div className="name">
                        <div>
                            <p className="half-tag" style={{left: '-145px'}}>Password</p>
                            <input type="text" className="cont"></input>
                        </div>

                        <div>
                            <p className="half-tag" style={{left: '-120px'}}>Password Retype</p>
                            <input type="text" className="cont"></input>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <Button className="bttn">Cancel</Button>
                    <Button className="bttn" style={{backgroundColor: '#F2CB05'}}>Sign Up</Button>
                </div>
            </div>

        </div>
    );
};

export default Home;