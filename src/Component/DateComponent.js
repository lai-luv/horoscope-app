import { useState } from "react"
// import Data from "../Data/Data"



function DateComponent(props) {

    const [look, setLook] = useState(false)

    return (
        <div className="start">
            <h1>learn about your horoscope!</h1>
            <button onClick={() => setLook(!look)}>{look}click Here To  see todays date!</button>
            {look && <div> <p>{props.currentDate}</p><p> The current zodiac sign is:{props.currentZodiac}</p></div>}


        </div>
    )
}


export default DateComponent