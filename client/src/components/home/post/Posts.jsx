import { useEffect, useState } from "react";
import { Grid, Box, } from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { API } from "../../../service/api";
import Post from "./Post";

const Posts = () => {
  const [posts, getPosts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        getPosts(response.data);
      }
    };
    fetchData();
  }, [category]);

  return (
    <Grid container spacing={1}>
      {posts?.length ? (
        posts.map((post) => (
          /* xs=12: 1 card on phone (400px)
                       sm=6:  2 cards on tablet (600px)
                       md=4:  3 cards on laptop (900px)
                       lg=3:  4 cards on big screens
                    */
          <Grid item lg={4} md={6} sm={12} xs={12} key={post._id}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to={`details/${post._id}`}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          No Blog is available for selected category
        </Box>
      )}
    </Grid>
  );
};

export default Posts;
