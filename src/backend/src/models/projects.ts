import mongoose from 'mongoose';

const ProjectsSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  imageURL: String,
  projectURL: String,
});

const Projects = mongoose.model('projects', ProjectsSchema, 'Projects');

export default Projects;
