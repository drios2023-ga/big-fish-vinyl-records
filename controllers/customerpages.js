

module.exports={
    showAboutUs,
    showRecordsOfTheWeek,
    showContactUs,
    testPage
}

function showAboutUs(req, res){
    res.render('customerpages/aboutus');
}

function showRecordsOfTheWeek(req, res){
    res.render('customerpages/recordsoftheweek');
}

function showContactUs(req, res){
    res.render('customerpages/contactus');
}

function testPage(req, res){
    res.render('customerpages/test');
}

