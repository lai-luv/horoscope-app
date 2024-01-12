import HoroscopePicker from "../Component/HoroscopePicker";
// import DateComponent from "../Component/DateComponent";
import HoroscopeData from "../Data/Data";
import DateComponent from "../Component/DateComponent";
import { useState } from "react";

function Home() {
    const data = HoroscopeData.horoscopes.astroSigns
    console.log(data)
    const [see, setSee] = useState(false)
    const [view, setView] = useState(false)
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const todaysDate = new Date().toLocaleDateString("en-US", options)
    const currentDate = new Date()
    const [userSign, setUserSign] = useState("")
    const [todaySign, setTodaySign] = useState("")

    const [formsData, setFormsData] = useState({
        birthdate: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormsData({ ...formsData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date(formsData.birthdate)
        
        setUserSign(findZodiacSign(date))
        console.log("Form submitted:", formsData);

    };


    function findZodiacSign(date) {
        const currentZodiacSign = data.find((sign) => {
            const dateRange = sign.dateRange.split("-")
            const startDate = new Date(dateRange[0] + " " + currentDate.getFullYear());
            const endDate = new Date(dateRange[1] + " " + currentDate.getFullYear());
            if (date >= startDate && date <= endDate) {
                return true;
            }
            return false;
        });
        console.log(currentZodiacSign , "currentZodiacSign")
        return currentZodiacSign.sign;
    }

    function getDaySign() {
        const sign = findZodiacSign(currentDate)
        console.log(sign)
        setTodaySign(sign)
        // setSee(!see)
    }
    
    function start(){
        setSee(!see)
    }

    return (
        <div>

            <button onClick={start}>{see ? 'Hide' : 'start'}</button>
            {see && <div>
                <div><DateComponent currentDate={todaysDate} currentZodiac={todaySign} /></div>

                <h3>would you like to choose an astrological sign? </h3>
                <button onClick={() => setView(!view)}>{view}Yes please</button>
                <button>No thank you!</button>


                {view && <div> <form onSubmit={handleSubmit}>
                    <label for="birthdate">
                        Birthdate:
                        <input type="date" id="birthdate" name="birthdate" onChange={handleInputChange} />
                        <input type="submit" value="Submit" />
                    </label></form>
                    <div><HoroscopePicker data={data} /></div></div>}
                {userSign && <p>your sign is :{userSign}</p>}
            </div>}

        </div>
    )
}

export default Home