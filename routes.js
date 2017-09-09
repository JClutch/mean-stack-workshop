const router = require('express').Router()
const Link = require('./models/link')
const Pageres = require('pageres');
const pageres = new Pageres()
const path = require('path')

// /api/links
router.get('/links', function(req, res) {
  Link.find({})
    .then(function(links){
      res.send(links || [])
    })
})

router.post('/links', function(req, res) {
  var url = req.body.url
  var imageUrl = url
    .replace('.', '-')
    .replace(':', '-')
    .replace('//', '-')
    .replace('/', '-')
  pageres.src(url, ['320x256'], {
    filename: imageUrl,
    crop: true
  })
	.dest(path.resolve(__dirname, './public/assets'))
	.run()
	.then(() => {
    Link.create({
      url: url,
      image: imageUrl
    })
    .then(() => {
      res.sendStatus(201)
    })
  });
})

module.exports = router
