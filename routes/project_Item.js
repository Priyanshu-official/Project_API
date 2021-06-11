const express = require('express')
var router = express()

const create = require('../controller/project_Item')
const view = require('../controller/project_Item')
const update = require('../controller/project_Item')
const remove = require('../controller/project_Item')

const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.post('/create', create.create)
router.get('/', view.view)
router.patch('/:id',update.update)
router.delete('/delete/:id',remove.remove)

module.exports = router