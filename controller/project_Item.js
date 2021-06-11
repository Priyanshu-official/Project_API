const project_Item = require('../models/project_Item')
const mongoose = require('mongoose')

function create(req,res,next) {
    let projectName    =   req.body.projectName;
    let projectAuthor  =   req.body.projectAuthor;
    let projectAbout   =   req.body.projectAbout;
    let projectDemo    =   req.body.projectDemo;
    let projectLink    =   req.body.projectLink;
    let projectSource  =   req.body.projectSource;

    let item = new project_Item({
        projectName,
        projectAuthor,
        projectAbout,
        projectDemo,
        projectLink,
        projectSource,
    })
    item.save()
    .then((data) => 
        {res.send(data)
    })
} 

function view(req,res,next){
    project_Item.find({})
    .then((data) => res.send(data))
}

function update(req,res,next){
    project_Item.findByIdAndUpdate(req.params.id,req.body, (err, item)=>{
        if (err) {
            return res.status(500).send({error: "Problem with Updating the Project Item recored "})
        };
        res.send({success: "Updation successfull"});
    })
}

function remove(req,res,next){
    project_Item.findByIdAndDelete(req.params.id, (err,item)=>{
        if(err){
            return res.status(500).send({error: "Problem with Deleting the Project Item recored "})
        };
        res.send({success: 'Project Item deleted successfully'})
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove