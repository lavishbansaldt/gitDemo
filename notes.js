const fs= require('fs');
const chalk= require('chalk');



const addNote= (title, body) => {

    const notes= loadNotes();
    const duplicateNote= notes.find( (note) => note.title === title);
    
    debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes);
       console.log(chalk.green.inverse('Note added successfully'));
    }else{
        console.log(chalk.red.inverse('Note title already taken!'));
    }
    

}

const removeNote= (title) => {
   const notes= loadNotes();
   const newNotes=  notes.filter(note => note.title !== title);
    if(newNotes.length === notes.length){
        console.log(chalk.red.inverse('No such note exists by this title!'));
    }else{
        saveNotes(newNotes);
        console.log(chalk.green.inverse('Note with title ' + title+ ' removed.'));
    }

}

const listNotes= () => {
    const notes= loadNotes();
    console.log(chalk.bold('Your notes: '));

    notes.forEach(note => {
        console.log(chalk.yellow.inverse(note.title));
    });
}



const saveNotes= (notes) => {
 const notesJSON= JSON.stringify(notes);
 fs.writeFileSync('./notes.json', notesJSON);
}

const loadNotes= () => {
    try {
        const dataBuffer= fs.readFileSync('notes.json');
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
   
}

const readNote = (title) => {
    const notes= loadNotes();
    const note= notes.find((note) => note.title === title );
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }
    
}
module.exports= {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
   
}