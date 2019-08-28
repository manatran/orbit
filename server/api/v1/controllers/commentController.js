const models = require("./../models");

// Get comments by post id
exports.get_comment = (req, res, next) => {
	const { id } = req.params;
	models.Comment.findAll({
		where: { postId: id },
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			}
		]
	})
		.then(comment => {
			res.status(200).json(comment);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Get comments by author
exports.get_comments_by_author = (req, res, next) => {
	const { authorId } = req.params;
	models.Comment.findAll({
		where: { authorId: authorId },
		include: [
			{
				model: models.User,
				as: "author",
				attributes: {
					exclude: ["accessToken"]
				}
			}
		]
	})
		.then(comments => {
			res.status(200).json(comments);
		})
		.catch(err => {
			return res.status(401).json({ error: err });
		});
};

// Create comment
exports.create_comment = (req, res, next) => {
	const { id } = req.user;
	const { content, postId } = req.body;

	if (!content || !postId) {
		return res.status(400).json({
			error: "Comment must have content and parent post"
		});
	}

	const args = {
		content: content,
		pinned: false,
		authorId: id,
		postId: postId
	};

	models.Comment.create(args)
		.then(comment => {
			models.User.increment('reputation', { by: 5, where: { id }});
			res.status(201).json(comment);
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};

// Delete comment
exports.delete_comment = (req, res, next) => {
	const { id } = req.params;
	models.Comment.findByPk(id)
		.then(comment => {
			comment
				.destroy()
				.then(success => {
					models.User.increment('reputation', { by: 5, where: { id: comment.authorId }});
					res.status(200).json({
						success: "Comment sucessfully deleted"
					});
				})
				.catch(err => {
					return res.status(500).json({ error: err });
				});
		})
		.catch(err => {
			return res.status(500).json({ error: err });
		});
};
