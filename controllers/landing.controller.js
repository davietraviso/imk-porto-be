const db = require('../models');
const Landing = db.landing;

// GET landing content (first record)
exports.getLanding = async (req, res) => {
  try {
    const data = await Landing.findOne(); // fetch first (or only) row
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST new landing content
exports.createLanding = async (req, res) => {
  try {
    const data = await Landing.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update existing landing content by id
exports.updateLanding = async (req, res) => {
  try {
    const id = req.params.id;
    console.log('Received PUT for ID:', id);
    console.log('Payload body:', req.body);

    const [updated] = await Landing.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedData = await Landing.findByPk(id);
      return res.json(updatedData);
    } else {
      return res.status(404).json({ message: 'Landing content not found' });
    }
  } catch (err) {
    console.error('Error in updateLanding:', err);
    return res.status(500).json({ error: err.message });
  }
};

