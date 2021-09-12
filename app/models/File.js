const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({
  filename: { type: String, required: true },
  originalname: { type: String, required: true },
  mimetype: { type: String, required: true },
  destination: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Files', FileSchema)