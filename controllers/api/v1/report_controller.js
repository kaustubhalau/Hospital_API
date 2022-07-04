const Patient = require('../../../models/patient');
const Doctor = require('../../../models/doctor');
const Report = require('../../../models/report');

module.exports.create_report= async function(req,res){
  

  console.log("Inside report controller");

  const doctor =req.doctor._id;
  console.log("Dr:"+ doctor);

 try{
    console.log("Inside try");

    const report = await Report.create({
      doctor:doctor,
      patient:req.params.id,
      status:req.body.status
    });

    return res.status(200).json({
      success:true
    });
 }
 catch (err) {
  // Error handling
  return res.status(401).json({
    success: false,
    msg:err.message,
  });
}
}

//find patient with id and send report
module.exports.all_reports= async function(req,res){
   try{
    const reports = Report.find({ "patient": req.params.id });
    reports.exec(function (err, report) {
      return res.send(report);
  })
   }
   catch (err) {
    // Error handling
    return res.status(401).json({
      success: false,
      msg:err.message,
    });
  }
  
}

//send report by status
module.exports.report_by_status = async (req,res) => {

  try {
      const reports = Report.find({ "status": req.params.status });
      reports.exec(function (err, rep) {
          return res.send(rep);
      });

  } catch (err) { 
      return res.status(500).json({
          message: err.message
      });
  }

}