const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    
  phone: {
      type: Number,
      maxlength:10,
      required: true,
      unique:true,
  },
  name: {
      type: String,
      required:true,
  },
  doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Doctor'
  }
}, {
    timestamps: true
  });


const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;