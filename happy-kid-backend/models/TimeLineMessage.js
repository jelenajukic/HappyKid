const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimeLineMessageSchema = new Schema({
  //title: String,
  images: Array,
  messageTitle: String,
  messageBody: String,
  kidID: {
    type: Schema.ObjectId,
    ref: 'Kid',
    required: true
  },
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const TimeLineMessage = mongoose.model('TimeLineMessage', TimeLineMessageSchema);
module.exports = TimeLineMessage;
