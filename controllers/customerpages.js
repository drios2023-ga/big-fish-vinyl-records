
const Record =  require('../models/managerecord.js');

module.exports={
    showAboutUs,
    showRecordsOfTheWeek,
    showRecordOfTheWeek,
    showContactUs,
    testPage
}

function showAboutUs(req, res){
    res.render('customerpages/aboutus');
}

async function showRecordsOfTheWeek(req, res){
    const allRecords = await Record.find();
    console.log(allRecords);
    res.render("customerpages/recordsoftheweek",{
        records: allRecords
    });
}

async function showRecordOfTheWeek(req, res) {
      
    res.render('customerpages/recordoftheweek',{
      record:await Record.findById({ _id: req.params.id }),
      title: 'Record Details'
    });
  }

function showContactUs(req, res){
    res.render('customerpages/contactus');
}

function testPage(req, res){
    res.render('customerpages/test');
}



