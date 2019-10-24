const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note has been added'))
    } else {
        console.log(chalk.red.inverse('Note title is taken'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToRemove = notes.filter((note) => note.title !== title)
    if (noteToRemove.length < notes.length) {
        saveNotes(noteToRemove)
        console.log(chalk.green.inverse('Note has been removed'))

    } else {
        // console.log(noteToRemove)
        console.log(chalk.red.inverse('No Notes have been removed'))
    }


}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffre = fs.readFileSync('notes.json')
        const dataJSON = dataBuffre.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log('Current Notes')
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title)
    if (findNote) {
        console.log(findNote.title + ': ' + findNote.body)
    } else {
        console.log(chalk.red.inverse('No Notes with ' + title + ' were found!'))
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}