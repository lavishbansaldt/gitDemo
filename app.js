const notes = require('./notes.js');
const yargs= require('yargs');
yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'Note body goes here',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Title of the note to be removed',
            demand: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler() {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads a note',
    builder: {
        title: {
            describe: 'Title of the note to be read',
            demand: true,
            type: 'string'
        }
    },
    
    handler(argv) {
       notes.readNote(argv.title);
    }
});
yargs.parse();