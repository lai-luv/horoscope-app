import '../App.css'




function HorosopePicker(props) {

    return (
        <div className='horosope'>
            <div className='zodiac'>
                {props.data.map((item) => {
                    return (

                        <div className="zodiac-sign">{item.sign}

                        </div>

                    )
                })}
            </div>
        </div>
    )
}




export default HorosopePicker



