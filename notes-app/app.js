const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes");
const command = process.argv[2]


//create add command
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
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler(){
        notes.listNotes()
    }
})
//Creating read command
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder:{
      title: {
          describe: 'Title of a note',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()