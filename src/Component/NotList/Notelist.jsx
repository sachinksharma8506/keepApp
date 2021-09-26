import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons'
import { green } from '@material-ui/core/colors'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
const Notelist = (props) => {
    const classes = useStyles();
    
    return (
        <>
        <div key={props.index} id={props.index} className="note-store">
              <Card className={classes.root}>
              <CardContent style={ {textAlign : 'left'} }>
                <Typography variant="body2" component="p">
                  Title : <b>{props.title}</b> 
                </Typography>
                <Typography variant="body2" component="p">
                  Description : <span><b>{props.description}</b> </span> 
                </Typography>
              </CardContent>
              <CardActions>
                  <Button onClick={props.deleteItem}>
                    <Delete></Delete>
                  </Button>
              </CardActions>
            </Card>
            </div>
        </>
    )
}
export default Notelist;