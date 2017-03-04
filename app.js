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
var command = argv._[0]; /* returns an array containing the command line arguments */
console.log(`Command: ${command}`);
console.log('Yargs:', argv)

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized')
};