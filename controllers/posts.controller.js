const Comments = require("../models/comments.model");
const Posts = require("../models/post.model");

const createPost = async (req, res) => {
  const { name, post_name, comment } = req.body;
  const commentsData = await Comments.create({ comment: comment });
  const postsData = await Posts.create({ name: name, post_name: post_name });
  postsData.comments.push(commentsData._id);
  postsData.save();

  commentsData.posts = postsData._id;
  commentsData.save();

  res.json({ message: "post created successfully", Postsdata: postsData,commentsData:commentsData });
};

module.exports = { createPost };
