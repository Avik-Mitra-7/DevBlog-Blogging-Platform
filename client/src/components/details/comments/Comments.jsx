import { useState, useEffect, useContext } from "react";
import {
  Box,
  TextareaAutosize,
  Button,
  styled,
  Typography,
} from "@mui/material";

import { DataContext } from "../../../context/DataProvider";
import { API } from "../../../service/api";

// components
import Comment from "./Comment";

const Container = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "40px",
  },
}));

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
});

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  minHeight: "100px",
  width: "100%",
  margin: "0 20px",
  padding: "10px",
  fontSize: "16px",
  outline: "none",
  borderRadius: "5px",
  border: "1px solid #d3d3d3",
  [theme.breakpoints.down("sm")]: {
    margin: "0",
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  height: 40,
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

const initialValue = {
  name: "",
  postId: "",
  date: new Date(),
  comments: "",
};

const Comments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comment, setComment] = useState(initialValue);
  const [comments, setComments] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { account } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      if (post && post._id) {
        try {
          const response = await API.getAllComments(post._id);
          if (response.isSuccess) {
            setComments(response.data);
          }
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      }
    };
    getData();
  }, [post._id, toggle]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const addComment = async () => {
    // TOPPER STOP: Prevent empty submissions or missing auth data
    if (!comment.comments.trim() || !account.username || !post._id) {
      console.warn("Incomplete comment data. Submission blocked.");
      return;
    }

    const commentPayload = {
      name: account.username,
      postId: post._id,
      comments: comment.comments,
      date: new Date(),
    };

    try {
      let response = await API.newComment(commentPayload);
      if (response.isSuccess) {
        setComment({ ...initialValue, comments: "" }); // Clear field
        setToggle((prev) => !prev); // Refresh list
      }
    } catch (error) {
      console.error("API Call Failed:", error);
    }
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea
          minRows={5}
          placeholder="what's on your mind?"
          onChange={(e) => handleChange(e)}
          value={comment.comments}
        />
        <PostButton
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => addComment()}
        >
          Post
        </PostButton>
      </Container>
      <Box style={{ marginTop: "20px" }}>
        {comments && comments.length > 0 ? (
          [...comments]
            .reverse()
            .map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                setToggle={setToggle}
              />
            ))
        ) : (
          <Typography
            style={{ color: "#878787", marginTop: "30px", textAlign: "center" }}
          >
            No comments yet. Be the first to share your thoughts!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Comments;
