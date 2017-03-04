console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title, /* ES6 */
        body
    };

    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const getAll = () => {
    console.log('Getting all notes');
};

const getNote = (title) => {
    console.log('Getting note', title)
};

const removeNote = (title) => {
    console.log('Removing note', title)
};

module.exports = {
    addNote, /* same as "addNote: addNote" (ES6) */
    getAll,
    getNote,
    removeNote
};