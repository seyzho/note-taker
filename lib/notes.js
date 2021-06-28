const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function validateNote() {
    if (!createNewNote.title || typeof createNewNote.title !== "string"){
        return false;
    }
    if (!createNewNote.text || typeof createNewNote.text !== "string") {
        return false;
    }
    return true;
};
module.exports = {
    createNewNote,
    validateNote
};