exports.index = function(req, res){
    //res.render('index.html');
    res.sendfile('/home/nhk/WebstormProjects/tk/app/index.html');
};

exports.awesomeThings = function(reg,res){
    res.send(["Ilia", "Alexander"]);
};