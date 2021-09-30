const router = require("express").Router();
const Project = require('../models/Project');

router.post('/', (req, res, next) => {
	const { title, description } = req.body;
	Project.create({
		title,
		description
	})
		.then(project => {
			// we return http status code 201 - created
			res.status(201).json(project);
		})
		.catch(err => {
			next(err);
		})
})


module.exports = router;