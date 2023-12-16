import { useState } from "react"
// import Data from "../Data/Data"



function DateComponent(props){

    const [look,setLook]= useState(false)
    const [formsData, setFormsData] = useState({
        birthdate:""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormsData({ ...formsData, [Date]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formsData);
    };
    const [userSgin, setUserSgin]= useState()

    return(
        <div className="start">
            <h1>learn about your horoscope!</h1>
            <button  onClick={() => setLook(!look)}>{look}click Here To  see todays date!</button>
            {look && <div>{props.currentDate}</div>}
            {look && <form onSubmit={handleSubmit}><div>
                <label for="birthdate">
                    Birthdate:
                    <input type="date" id="birthdate" name="birthdate" onChange={handleInputChange}/>
                    <input type="submit" value="Submit"/>
                    </label></div></form>}
            
            <p> The current zodiac sign is:</p>
        </div>
    )
}


export default DateComponent