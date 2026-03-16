import React, { useState, useEffect } from "react";
import {
  Box,
  styled,
  TextareaAutosize,
  Button,
  FormControl,
  InputBase,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

import { API } from "../../service/api";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: "10px 0",
    padding: "0 15px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "15px",
  },
}));

const InputTextField = styled(InputBase)(({ theme }) => ({
  flex: 1,
  margin: "0 30px",
  fontSize: "25px",
  [theme.breakpoints.down("sm")]: {
    margin: "0",
    fontSize: "22px",
    order: 2,
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "5px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    order: 1,
    width: "50%",
  },
}));

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  border: "none",
  marginTop: "50px",
  fontSize: "18px",
  padding: "10px",
  outline: "none",
  whiteSpace: "pre-line",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    fontSize: "16px",
  },
}));

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "codeforinterview",
  categories: "Tech",
  createdDate: new Date(),
};

const Update = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { id } = useParams();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        if (response.isSuccess) {
          setPost((prev) => ({ ...prev, picture: response.data }));
        }
      }
    };
    getImage();
  }, [file]);

  const updateBlogPost = async () => {
    let response = await API.updatePost(post);
    if (response.isSuccess) {
      navigate(`/details/${id}`);
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Image src={post.picture || url} alt="post" />

      <StyledFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" color="action" style={{ cursor: "pointer" }} />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <InputTextField
          onChange={(e) => handleChange(e)}
          value={post.title}
          name="title"
          placeholder="Title"
        />
        <StyledButton
          onClick={() => updateBlogPost()}
          variant="contained"
          color="primary"
        >
          Update
        </StyledButton>
      </StyledFormControl>

      <StyledTextArea
        minRows={5}
        placeholder="Tell your story..."
        name="description"
        onChange={(e) => handleChange(e)}
        value={post.description}
      />
    </Container>
  );
};

export default Update;
