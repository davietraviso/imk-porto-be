const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import database
const db = require('./models');

// Sync database
db.sequelize.sync().then(() => {
  console.log('DB Synced');
});

// Simple test route
app.get('/api', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Landing page hook up
const landingRoutes = require('./routes/landing.routes');
app.use('/api/landing', landingRoutes);

// Projects inside landing page hook up
const projectRoutes = require('./routes/project.routes');
app.use('/api/projects', projectRoutes);

// Article page hook up
const articleRoutes = require('./routes/article.routes');
app.use('/api/articles', articleRoutes);

// Contact page hook up
const contactRoutes = require("./routes/contact.routes");
app.use("/api/contacts", contactRoutes);

