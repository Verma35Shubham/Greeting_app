import React from "react";
import Heading from './Heading';
import Image from './Image';
// import Youtuber, {myname, village} from "./Rough";
import * as kgf from "./Rough";

function App() {
  // console.log(youtuber);
  return (
    <><div>

      <Heading></Heading>
      <Image />
      <h2>my video {kgf.default}</h2>
      <h2>my name is {kgf.myName()}</h2>
      <h2>I am from  {kgf.village()}</h2>



    </div>
    </>
  );
}


export default App; 