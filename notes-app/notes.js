const chalk = require('chalk')
const fs = require("fs")

const addNote =  (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
  
    saveNotes(notes)
    console.log("New Note Added!")
  } else {
    console.log('Note title taken.')
  }

}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not Found'))
  }  

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }
};

const removeNote = (title) => {
  const note = loadNotes()
  const notesToKeep = note.filter((note) => note.title !== title)

  if (note.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note Removed'));
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No Note Found'));
  }

}

const listNotes = function () {
  const notes = loadNotes()
  console.log(chalk.inverse('Your Notes'))

  notes.forEach((note) => {
    console.log(note.title)
  });
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
