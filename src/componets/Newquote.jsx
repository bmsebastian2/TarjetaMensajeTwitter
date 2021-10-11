import React from 'react'
import Button from '@material-ui/core/Button';
const Newquote = ({color, pasarId}) => {
    return (
        <Button id='new-quote' 
                style={
                        {
                        backgroundColor:`${color}`,
                        paddingLeft:'1rem',
                        paddingRight:'1rem',
                        color:'white',
                        transitionDuration: '2s',
                    }
                    } 
                onClick={()=>pasarId()}>
                Nuevo
        </Button>
    )
}

export default Newquote
