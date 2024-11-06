import React, {useRef} from "react";

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(`Phone Number: ${phoneRef.current.value}`);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" ref={phoneRef} placeholder="Enter your phone number"></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledInput;