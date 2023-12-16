import HoroscopePicker from "../Component/HoroscopePicker";
// import DateComponent from "../Component/DateComponent";
import HoroscopeData from "../Data/Data";
import DateComponent from "../Component/DateComponent";
import { useState } from "react";

function Home() {
    const data = HoroscopeData.horoscopes.astroSigns
    console.log(data)
    const [see, setSee] = useState(false)
    const [view, setView]=useState(false)
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const todaysDate = new Date().toLocaleDateString("en-US", options)

   
        
    


    return (
        <div>

            <button onClick={() => setSee(!see)}>{see ? 'Hide' : 'start'}</button>
            {see && <div><DateComponent currentDate={todaysDate} /></div>}
            
            <h3>would you like to choose an astrological sign? </h3>
            <button onClick={() => setView(!view)}>{view}Yes please</button><button>No thank you!</button>
            {view && <div><HoroscopePicker data={data} /></div>}
    </div>
    )
}

export default Home