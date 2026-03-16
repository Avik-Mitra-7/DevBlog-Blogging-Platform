import Comment from "../model/comment.js";

export const newComment = async (request, response) => {
  try {
    if (!request.body || Object.keys(request.body).length === 0) {
      return response.status(400).json({ msg: "Comment body is missing" });
    }

    const comment = new Comment(request.body);
    await comment.save();

    response.status(200).json({ msg: "Comment saved successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const getComments = async (request, response) => {
  try {
    const comments = await Comment.find({ postId: request.params.id });

    response.status(200).json(comments);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (request, response) => {
  try {
    const comment = await Comment.findById(request.params.id);

    if (!comment) {
      return response.status(404).json({ msg: "Comment not found" });
    }
    await Comment.findByIdAndDelete(request.params.id);

    response.status(200).json({ msg: "Comment deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
