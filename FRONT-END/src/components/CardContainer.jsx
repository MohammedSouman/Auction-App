import React, { useState } from "react";
import Card from "./Card";
import './Card.css'
import football from '../assets/images/football.jpg'
import messiSigned from '../assets/images/messiSigned.jpg'
import antiquieWatch from '../assets/images/antiqueWatch.jpeg'
import painting from '../assets/images/painting.jpeg'


const CardContainer = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident maiores facilis ea dignissimos reiciendis? Dolor impedit ipsam voluptatem inventore.")
  return (
    <div>
      <div className="d-flex flex-row justify-content-around my-5">
        <Card title = "Football" desc={text} img={football}/>
        <Card title = "Messi Signed Jersey" desc={text} img={messiSigned}/>
        <Card title = "Painting" desc={text} img={painting}/>
        <Card title = "Messi Signed Jersey" desc={text} img={messiSigned}/>
      </div>
    </div>
  );
};

export default CardContainer;
