import React from 'react';
import './index.css';


const heading = {
    color: "#fa9191",
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "80px 0",
    fontFamily: "'Roboto', sans-serif",
};


function Heading() {
    const flname = "Shubham Verma";
    let cur_date = new Date(2022, 4, 4, 23);
    cur_date = cur_date.getHours();
    let greeting = '';
    const css_style = {};

    if (cur_date >= 0 && cur_date < 12) {
        greeting = 'Good Morning';
        css_style.color = 'green';
    }
    else if (cur_date >= 12 && cur_date < 19) {
        greeting = 'Good Afternoon';
        css_style.color = 'orange';
    }
    else {
        greeting = 'Goood Evening';
        css_style.color = 'pink';
    }
    return <div id="greet">
        <h1 contentEditable="true" style={heading} >Hello World ! My name is {flname},<span style={css_style}>{greeting}</span></h1>
    </div>
}

export default Heading;