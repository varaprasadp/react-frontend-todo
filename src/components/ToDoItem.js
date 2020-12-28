import React from "react"
import {Checkbox} from "@material-ui/core"
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import CircleChecked from '@material-ui/icons/CheckCircleOutline'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    checked: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20em',
        colorTextPrimary: 'blue'
    },
    unchecked: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'left',
        background: 'linear-gradient(45deg, #FE6B8B 90%, #FF8E53 30%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20em',
        colorTextPrimary: 'red'

    },
}
)
const boxProps = {
    borderRadius: 16,
    m:1,
    p:1,
    border: 1,
    zIndex: "modal",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display:"block",
    
}
function ToDoItem(props) {
    const classes = useStyles();
    const n=props.data.name
    return (
       
        <Box className={props.data.done? classes.checked: classes.unchecked} {...boxProps}>
            
            <Checkbox 
            icon = {<CircleUnchecked />} 
            checkedIcon= {< CircleChecked/> } 
            checked={props.data.done} 
            onChange={()=> {props.handleChange(n)}} 
            name={props.data.name} 
            />
            <hr />
            <div>
                <Typography variant='h6'>{props.data.todoHead}</Typography>
                <Typography varient='body2'>{props.data.todoBody}</Typography>
            </div>            
    </Box>
    )
}

export default ToDoItem