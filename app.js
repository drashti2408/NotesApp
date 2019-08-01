const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')

// console.log(process.argv);

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOptions: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        notes.listNotes();
    }
})


yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe:'read',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();
