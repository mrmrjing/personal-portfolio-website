const express = require('express');
const router = express.Router();

// Assuming 'db' is passed from the main server file
module.exports = (db) => {
  router.get('/', async (req, res) => {
    try {
      const projectsCollection = db.collection("projects");
      const projects = await projectsCollection.find({}).toArray();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to get projects", error });
    }
  });

  return router;
};
