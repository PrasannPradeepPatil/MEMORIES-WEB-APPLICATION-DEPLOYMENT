var express = require("express");
var {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} = require("../controllers/posts");

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;
