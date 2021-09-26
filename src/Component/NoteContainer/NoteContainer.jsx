import React from 'react';
import Header from '../Header/Header';
import NotesEditor from '../NotesEditor/NotesEditor';
import Footer from '../Footer/Footer';

const NoteContainer = () => {
    return(
        <>
            <Header></Header>
            <NotesEditor></NotesEditor>
            <Footer></Footer>
        </>
    )
};
export default NoteContainer;