import React from "react";

function Home(){
    return <div>
        <h2>Registration Form</h2>
        <form className="flex flex-col" action="">
            <input type="text" name="First Name" id="firstname" />
            <input type="text" name="Last Name" id="lastname" />
            <input type="date" name="Birthday" id="birthday" />
            <input type="text" name="Email" id="email" />
            <input type="text" name="Password" id="password" />
            <input type="button" value="Submit" />
        </form>
    </div>
};

export default Home;