import "./App.css";
import Newquote from "./componets/Newquote";
import ButtonTweter from "./componets/ButtonTweter";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import listTool from './jsonObject.json';
import { useState } from "react";
import { Opacity } from "@material-ui/icons";



function App() {

  const [idstate, setIdstate] = useState(1);
  const [op, setOp] = useState('100%')
  
  // const funcionOp = () => {
    
  //   pasarId()
  // }
  
  
  const pasarId = ()=>{      
          setTimeout(
            function(){ 
              setOp('0%'); 
            }, 500);
         
         
         setTimeout(
          function(){ 
            ( (idstate<6)? setIdstate( idstate + 1):setIdstate(1) );
            setOp('100%'); 
          }, 2000);
         
          
    }

 

  return (
    <div className="App" style={{ background:`${listTool[idstate-1].color}`, transitionDuration: '2s'}}>
     
      <div id="quote-box" className="border">


        <div className="header">
          <div
            id="text"
            className="border"
            style={{
              fontSize: "2.7rem",
              color: `${listTool[idstate-1].color}`,
              marginLeft: "2rem",
              marginRight: "2rem",
              transitionDuration: '2s',
              opacity:`${op}`,
              
            }}
          >
            <FormatQuoteIcon style={{ fontSize: 50 }} id='mensaje' />
            { listTool[idstate-1].mensaje}
          </div>

          <div id="author" className="border" 
                style={{ 
                    color: `${listTool[idstate-1].color}`, 
                    transitionDuration: '2s' ,
                    opacity:`${op}`,
                    }}>
            <p id='author2'>-  { listTool[idstate-1].author}</p>
          </div>
        </div>



        <div className="footer">
                <div className="footerIcon">
                    <div>                      
                        <ButtonTweter color={listTool[idstate-1].color} mensaje={listTool[idstate-1].mensaje}/>
                    </div>
                </div>

                <div>
                     <Newquote color={listTool[idstate-1].color} pasarId={ pasarId }/>
                </div>
        </div>
      
      

      </div>


    </div>
  );
}

export default App;
