const express = require("express");
const router = express.Router();
const { homepage } = require("../actions/api/noteActions");

const noteAction = require("../actions/api/noteActions");

//chce powiedzieć pod ścieżką główną zaczytaj to test aaction
//po przejesciu do strony głownej powinna sie wykonac akcja saveNote-stworzenie nowej notatki

//pobieranie notatek - stosujemy get - get stosujemy gdy chcemy pobrac jakies zasoby z serwera
router.get("/notes", noteAction.getAllNotes);
//pobranie konkretnej notatki
router.get("/notes/:id", noteAction.getNote);
//zapisanie  notatki
router.post("/notes/", noteAction.saveNote);
//edycja notatek
router.put("/notes/:id", noteAction.editNote);
//usuwanie notatek
router.delete("/notes/:id", noteAction.deleteNote);

module.exports = router;
