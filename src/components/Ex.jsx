import React,  {useState} from "react";
import { useEffect } from "react";

export default function Ex() {
   
    function ex1() { 
        const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
        const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
        
        function addItem() {
            const newThingText = `Thing ${thingsArray.length+1}`
            setThingsArray(prevArray => [...prevArray, newThingText])
        }

        return (
            <div>
                <button onClick={addItem}>Add Item</button>
                {thingsElements}
            </div>
        )
    }

    function greeting(name){
        const date = new Date()
        const hours = date.getHours()

        let timeOfDay
        if(hours>= 4 && hours<12) {
            timeOfDay="morning"
        } else if(hours>=12 && hours<17) {
            timeOfDay="afternoon"
        } else if(hours>=17 && hours<20) {
            timeOfDay="evening"
        } else {
            timeOfDay="night"
        }
        return `Good ${timeOfDay}, ${name}!`
    }

    function main1() {
        const [count, setCount] = React.useState(0)

        function add() {
            setCount(function(oldValue){
                return oldValue + 1
            })
        }
        function reduce() {
            setCount(prevCount => prevCount-1)
        }

        return (
            <div className="counter">
                <button className="counter--minus" onClick={reduce}>–</button>
                <div className="counter--count">
                    <h1>{count}</h1>
                </div>
                <button className="counter--plus" onClick={add}>+</button>
            </div>
        )
    }

    function main2() {
       const [isGoingOut, setIsgoingOut] = React.useState(true)
    
       function changeMind() {
            setIsgoingOut(prevState => !prevState)
       }
        return (
            <div className="state">
                <h1 className="state--title">Do I feel like going out tonight?</h1>
                <div className="state--value"
                onClick={changeMind}>
                    <h1>{isGoingOut ? "yes" : "no"}</h1>
                </div>
            </div>
        )
    }

    function main3() {
        const [contact, setContact] = React.useState({
            firstName: "John",
            lastName: "Doe",
            phone: "+1 (719) 555-1212",
            email: "itsmyrealname@example.com",
            isFavorite: false
        })
        
        function toggleFavorite() { 
            setContact(prevContact => {
                return [...prevContact, isFavorite=!prevContact.isFavorite]
            })
        }
        
        let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

        return (
            <main>
                <article className="card">
                    <img src="./images/user.png" className="card--image" />
                    <div className="card--info">
                        <img 
                            src={`../images/${starIcon}`} 
                            className="card--favorite"
                            onClick={toggleFavorite}
                        />
                        <h2 className="card--name">
                            {contact.firstName} {contact.lastName}
                        </h2>
                        <p className="card--contact">{contact.phone}</p>
                        <p className="card--contact">{contact.email}</p>
                    </div>
                    
                </article>
            </main>
        )
    }

    function main4() {
        const [box, setBox] = useState(boxes)
        
        function toggle(id) {
           setBox(prevBox => {
            return prevBox.map(box => {
                return box.id === id ? {...box, on:!box.on} : box
            })
           })
        }

        const boxesArray=box.map(thing => (
            <Box 
                key={box.id} 
                on={box.on} 
                id={box.id}
                handleClick={toggle}
            />
        ))
        
        return (
            <main>
                {boxesArray}
            </main>
            )
    }

    function Box(props) {
        const styles= {
            backgroundColor: color ? "3456" : "2345"
        }

        return(
            <div 
                className="box" 
                style={styles} 
                onClick={props.toggle}>
            </div>
        )
    }

    function joke(props) {
        const [isShown, setIsShown] = useState("false")

        function toggle() {
            setIsShown(prevShown => !prevShown)
        }

        return (
            <div>
                {props.setup && <h3>{props.setup}</h3>}
                {isShown && <p>{props.punchline}</p>}
                <button onClick={toggle}>{isShown ? "Hide" : "Show"}</button>
            </div>
        )
    }

    function message() {
        const [messages, setMessages] = useState("yes", "no")

        return (
            <div>
                {
                    messages.length===0 ? <h1>"No message"</h1> : 
                    <h1>"At least 1"</h1>
                }
            </div>
        )
    }
   function main5() {
    const [show, setShow] = useState(true)

    function toggle() {
        setShow(prevShow => !prevShow)
    }

    function windowTracker() {
        const [windowWidth, setiWindowWidth] = useState(window.innerWidth)

        useEffect(() => {
            function watchWidth() {
                setiWindowWidth(window.innerWidth)
            }
            window.addEventListener("resize",watchWidth )
            return function() {
                window.removeEventListener("resize", watchWidths)
            }
        }, [])
    }
    return (
        <div>
            <button>Toggle WindowTracker</button>
            (show && <windowTracker/>)
        </div>
    )

   }
}