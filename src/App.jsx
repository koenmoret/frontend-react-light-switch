import { useState } from 'react';
import ToggleButton from "./toggleButton.jsx";
import './App.css';

function App() {

    const [light, setLight] = useState(false);
    console.log("De status van de lamp is: "+light);

    // const toggleLight = () => {
    //     setLight(!light);
    //     console.log("De status van de lamp is: "+light);
    // }

    return (
        <main className={ light === true ? "on" : "of"}>
            <section>
                <div className="dot"></div>

                {/*Button one
                   Uncommon the above function to work
                */}
                {/*<button type="button" onClick={toggleLight}>Turn on/off</button>*/}

                {/*Button two*/}
                {/*<button type="button" onClick={()=>setLight(!light)}>{light === true ? "Turn off" : "Turn on"}</button>*/}

                {/*Button three
                   Import button
                */}
                <ToggleButton object={setLight} state={light} />

            </section>
        </main>
    );
}

export default App;
