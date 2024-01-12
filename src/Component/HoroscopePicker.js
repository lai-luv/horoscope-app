import '../App.css'
import { useState } from 'react'




function HorosopePicker(props) {
    const [zodiac, setZodiac]=useState("") 

    function horoscopeClicker(item){
        
        setZodiac(item.sign)
        
            console.log( item.sign,"clicked") 
        
        
        //add an onClick to the div in the map
            //the onClick will have to be an arrow function (you can google "add arrow function to onClick React")
        //see "clicked" in the console
        //see the key number in the console when clicked
        //see the name of the horoscope in the console
        //show a paragraph when clicked 
        //the paragraph should say "you want to learn about _____"
    }
    
    
    return (
        <div className='horosope'>
            
            <div className='zodiac'>
                {props.data.map((item, key) =>{
                    return(
                            <div onClick={()=> horoscopeClicker(item)} key={key} className='zodiac-sign'> {item.sign}</div>
                    )
                })}
            </div>
            <p>you want to learn about {zodiac} </p>
        </div>
    )
}




export default HorosopePicker



