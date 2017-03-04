// require loads modules from the built-in library
// https://nodejs.org/api/

// 3rd party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// my modules
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note by title', {
        title: titleOptions
    })
    .help()
    .argv
const command = argv._[0]; /* returns command line arguments of _ array */

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note successfully created.');
        notes.logNote(note);
    } else {
        console.log(`Note with title "${argv.title}" already exists.`)
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note))
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