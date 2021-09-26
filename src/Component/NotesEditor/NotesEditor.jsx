import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
// import { green } from '@material-ui/core/colors';
// import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Notelist from '../NotList/Notelist';
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
  const useStyles1 = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '53ch',
      },
    },
    addIcon: {
      '& > span': {
        margin: theme.spacing(2),
      },
    },
  }));

const NotesEditor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const classes = useStyles();
    const classes1 = useStyles1();
    const[note, setNote] = useState({
      title: '',
      description: ''
    });
    const[notesArray, setNotesArray] = useState([]);
    const eventchange = (event) => {
        const name = event.target.name;
        const value = event.target.value; 
        setNote((prevValue) => {
          return{
            ...prevValue,
            [name] : value
          }
        });
        console.log('lastData', note);
    }
    const addNote = (event) => {
      event.preventDefault();
      setNotesArray((prevData)=> {
        return [...prevData, note];
      })
      setNote({
        title: '',
        description: ''
      });
    }
    const deleteItem = () => {
      console.log('test')
    }
    return (
        <>
        <div>
        <div className="width-100">
          <div className="col-md-12 note-editor">
            <Card className={classes.root}>
            <CardContent>
              <form className={classes1.root} onSubmit={addNote} autoComplete="off">
                <TextField id="standard-obasic" onChange={eventchange} value={note.title} label="Title" name = "title" />
                <TextField
                    onChange={eventchange}
                    id="standard-textarea"
                    label="Description"
                    placeholder="Placeholder"
                    name="description"
                    value= {note.description}
                    multiline
                />
                <CardActions>
                  <div className={classes.addIcon}>
                    <Button type="submit" variant="contained" color="primary">
                      <AddIcon ></AddIcon>
                    </Button>
                  </div>
                </CardActions>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
        
        <div className="width-100">
        {
          notesArray.map((item, index) => {
            return (
              <Notelist 
              key={index} 
              id={index} 
              title={item.title} 
              description={item.description}
              delete-Item = {deleteItem}
              ></Notelist>
            )
          })
        }
        </div>
      </div>
      </>
    )
}
export default NotesEditor;