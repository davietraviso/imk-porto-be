const db = require("../models");
const Contact = db.contact;

exports.createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const messages = await Contact.findAll();
    res.json(messages);
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};