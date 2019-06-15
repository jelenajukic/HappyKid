const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const kidSchema = new Schema({
  kidName: String,
  kidLastName: String,
  group: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Kid = mongoose.model('Kid', kidSchema);
module.exports = Kid;
