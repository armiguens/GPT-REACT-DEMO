import {Bling as GPT} from "react-gpt";
import React from 'react';
import ReactDOM from 'react-dom';


GPT.enableSingleRequest();

class Application extends React.Component {
    render() {
        return (
        <React.Fragment>
            <div id="root">
                <GPT
                    adUnitPath="/21874062981/testIDTag20192019"
                    slotSize={[300, 600]}
                />
            </div>
            
            <div id="ad-2">
                <GPT
                    adUnitPath="/4595/nfl.test.open"
                    slotSize={[300, 250]}
                />
            </div>
        </React.Fragment>

        );
    }
}

ReactDOM.render(
    <Application />,
    document.getElementById('root')
  );