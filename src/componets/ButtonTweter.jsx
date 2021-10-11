import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import TitleIcon from '@material-ui/icons/Title';


const useStyles = makeStyles(() => ({
  
    containerBoton:{
        display:'flex',
        justifyContent:'space-between'
    },
  root: {                   
        color:'white',        
        fontSize:'1.5rem',
        marginLeft:'6px',
        marginTop:'5px',
        marginBottom:'5px',      
    
  },

  boton : {
   
      display:'flex', 
      justifyContent:'center',
      alignItems:'center',
      borderRadius:'0.2rem',
      padding:'0.4rem',
      cursor:'pointer',
     
     

  },
  some_class_name: {
    opacity: '0.1',
  }
}));

const ButtonTweter = ({color,mensaje}) => {
    
    const classes = useStyles();
    const mensajeTwiter = `https://twitter.com/intent/tweet?hashtags=&text=${mensaje}`
    return (
         <div className={classes.containerBoton} >
              {/* <Link href="https://twitter.com/?lang=es" > */}
                <a href={mensajeTwiter} id='tweet-quote'>
                  <div className={classes.boton} style={{ background: `${color}`, transitionDuration: '2s'}} >                    
                    <TwitterIcon className={classes.root} />                    
                  </div>
                </a>
                
              {/* </Link> */}

              {/* <Link href="https://www.tumblr.com/" > */}
              <a href="https://www.tumblr.com/" id="tweet-quote2"> 
                <div className={classes.boton} style={{ background: `${color}`, transitionDuration: '2s'}}>                   
                    <TitleIcon className={classes.root} fontSize='small'/>                    
                </div>
              </a>
              {/* </Link> */}
         </div>
  
    )
}

export default ButtonTweter

