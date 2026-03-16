import React, { useState, useEffect, useContext } from "react";
import {
  styled,
  Box,
  TextareaAutosize,
  Button,
  InputBase,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { categories } from "../../constants/data";

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
    order: 3,
    borderBottom: "1px solid #f0f0f0",
    paddingBottom: "5px",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  marginRight: "20px",
  height: "40px",
  minWidth: "150px",
  borderRadius: "8px",
  [theme.breakpoints.down("sm")]: {
    marginRight: "0",
    width: "100%",
    order: 1,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    order: 2,
    width: "50%",
  },
}));

const Textarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  border: "none",
  marginTop: "50px",
  fontSize: "18px",
  padding: "10px",
  outline: "none",
  [theme.breakpoints.down("sm")]: {
    marginTop: "20px",
    fontSize: "16px",
  },
}));

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "All",
  createdDate: new Date(),
};

const CreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        setPost((prev) => ({ ...prev, picture: response.data }));
      }
    };
    getImage();
    setPost((prev) => ({
      ...prev,
      categories: location.search?.split("=")[1] || "All",
      username: account.username,
    }));
  }, [file, location.search, account.username]);

  const savePost = async () => {
    await API.createPost(post);
    navigate("/");
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Image src={url} alt="post" />

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
          name="title"
          placeholder="Title"
        />

        <StyledSelect
          label="Category"
          name="categories"
          value={post.categories}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value="All">All Categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.type}>
              {category.type}
            </MenuItem>
          ))}
        </StyledSelect>

        <StyledButton
          onClick={() => savePost()}
          variant="contained"
          color="primary"
        >
          Publish
        </StyledButton>
      </StyledFormControl>

      <Textarea
        minRows={5}
        placeholder="Tell your story..."
        name="description"
        onChange={(e) => handleChange(e)}
      />
    </Container>
  );
};

export default CreatePost;
