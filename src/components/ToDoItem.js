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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20em',
    },
    unchecked: {
        display: 'flex',
        background: 'linear-gradient(45deg, #FE6B8B 90%, #FF8E53 30%)',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '20em',  
        alignItems:"center",       
    },
}
)
const boxProps = {
    borderRadius: 16,
    m:1,
    p:1,
    border: 1,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    
      
}



// function ToDoItem(props) {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.root}>
//       <div className={classes.details}>
          
//         <div className={classes.controls}>
//         <Checkbox
//             icon = {<CircleUnchecked />} 
//             checkedIcon= {< CircleChecked/> } 
//             checked={props.data.done} 
//             onChange={()=> {props.handleChange(props.data.name)}} 
//             name={props.data.name} 
//             />
//         </div>
//         <CardContent className={classes.content}>
//         <div >
//                 <Typography variant='h6'>{props.data.todoHead}</Typography>
//                 <Typography varient='body2'>{props.data.todoBody}</Typography>
//             </div>   
//         </CardContent>
//       </div>
//     </Card>
//   );
// }

function ToDoItem(props) {
    const classes = useStyles();
    return (
       
        <Box className={props.data.done? classes.checked: classes.unchecked} {...boxProps}>
            
            <Checkbox
            icon = {<CircleUnchecked />} 
            checkedIcon= {< CircleChecked/> } 
            checked={props.data.done} 
            onChange={()=> {props.handleChange(props.data.name)}} 
            name={props.data.name} 
            />

<div >
                <Typography variant='h6'>{props.data.todoHead}</Typography>
                <Typography varient='body2'>{props.data.todoBody}</Typography>
            </div>            
    </Box>
    )
}

export default ToDoItem