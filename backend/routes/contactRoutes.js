const express = require("express");
const Contact = require("../models/Contact");
const {
  postContacts,
  getContacts,
} = require("../controllers/ContactController");

const router = express.Router();

// Add a new contact
router.post("/contacts", postContacts);

// Get all contacts
router.get("/contacts", getContacts);

module.exports = router;
