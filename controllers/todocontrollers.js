module.exports=function(app){

    app.get('/',function(req,res){
        console.log("Checkiotme");
        res.render("index");


        var Diff = require('text-diff');

        var diff = new Diff(); // options may be passed to constructor; see below
        var textDiff = diff.main(' Hello my name 2 is vaiasdvasdasd', 'Hello my   name 62 is vaiasdvasdasd'); // produces diff array
        diff.prettyHtml(textDiff); // produces a formatted


















        console.log(textDiff);

    });

    app.get('/index',function(req,res){
        res.send("THIS IS INDEX PAGE");
    });

};