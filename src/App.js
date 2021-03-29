import React, {useState} from 'react'
import './App.css';
import { RenderCard } from './components/Card/Card';
import city from "./images/1.jpg";
import city1 from "./images/2.jpg";
import city2 from "./images/3.jpg";
import city3 from "./images/4.jpg";
import city4 from "./images/5.jpg";
import city5 from "./images/6.jpg";


const data = [
      { title: "Moscow", 
      Naselenya: 65000000,
      img: city },
      { title: "USA",
      Naselenya: 120000000,
        img: city1 },
      { title: "Japon", 
      Naselenya: 150000000, 
      img: city2 },
      { title: "Jerman",
      Naselenya: 80000000,
        img: city3 },
      { title: "Kyrgyzstan",
      Naselenya: 8000000,
        img: city4 },
      { title: "Fransia",
      Naselenya: 90000000,
        img: city5 },

];

    function App() {
      const [title, setTitle] = useState(false);
      const [text, setText] = useState("");
      
      const getText = (data) => {
        setText(data.title)
        setTitle(true);

      }
      return (
      <div className="Card" >
      <h1 className="textTitle">
          {title ? text : ""}
        </h1>
      <div className='App'>
          <RenderCard data={data} getText={getText} />
        </div>
        </div>
    );
    }

export default App