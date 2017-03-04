console.log('Starting app.js');

// require loads modules from the built-in library
// https://nodejs.org/api/

// 3rd party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// my modules
const notes = require('./notes.js');

const argv = yargs.argv
const command = argv._[0]; /* returns an array containing the command line arguments */
console.log(`Command: ${command}`);
console.log('Yargs:', argv)

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note successfully created.');
        notes.logNote(note);
    } else {
        console.log(`Note with title "${argv.title}" already exists.`)
    }
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    let findNote = notes.getNote(argv.title)
    if (findNote) {
        console.log('Note found');
        notes.logNote(findNote);
    } else {
        console.log('Note not found')
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let msg = noteRemoved ? `"${argv.title}" removed.` : `"${argv.title}" not found.`
    console.log(msg)
} else {
    console.log('Command not recognized')
};