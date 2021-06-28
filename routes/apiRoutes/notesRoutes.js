const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const { validateNote, createNewNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json")

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    
        const newNote = {
            title: req.body.title,
            text: req.body.text
        }
        if(!validateNote(newNote)) {
            return res.status(400).send("fill out both sections");
        } else {
            const note = createNewNote(req.body, notes);
            res.json(note);
        }
});

module.exports = router;