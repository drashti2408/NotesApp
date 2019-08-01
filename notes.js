const fs = require ('fs');

const getNotes = function(){
    return "Your Notes...";
}

const addNote = function(title,body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note)=>{
        return(note.title === title);
    })

    if(duplicateNotes.length===0){
        notes.push({
            title : title,
            body: body
        })
        console.log(notes);
        saveNotes(notes);
        console.log('Added a new Note!');
    }
    else{
        console.log('Note title already taken');
    }
}

const removeNote = function(title){
    const notes= loadNotes();
    const notesToKeep = notes.filter(note => note.title!=title); 
    if(notes.length > notesToKeep.length ){
        console.log('Removed a note');
        console.log(notesToKeep);
        saveNotes(notesToKeep);
    }
    else{
        console.log('no note removed');
    }
}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}
const loadNotes = function(){
    
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}

const listNotes = function(){
    const notes = loadNotes();
    notes.forEach(element => {
        console.log("Title:" +element.title);
    });
}

const readNote = function(title){
    const notes = loadNotes();
    const note = notes.find(note => note.title === title)    
    if(note){
        console.log("note title:", note.title);
        console.log("note body:", note.body);
    }else{
        console.log('No note found !')
    }
    
}
module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote
};