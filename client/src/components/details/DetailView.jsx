import { useState, useEffect, useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

// components
import Comments from "./comments/Comments";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    padding: "0 15px", // Topper Move: Prevents text from touching screen borders on mobile
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  cursor: pointer;
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
  color: #ff0000;
  cursor: pointer;
`;

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "38px",
  fontWeight: 600,
  textAlign: "center",
  margin: "50px 0 10px 0",
  wordBreak: "break-word",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px", // Compact heading for 400px mobile
    margin: "20px 0 10px 0",
  },
}));

const Author = styled(Box)(({ theme }) => ({
  color: "#878787",
  display: "flex",
  margin: "20px 0",
  [theme.breakpoints.down("sm")]: {
    display: "block", // Stacks author and date vertically on small screens
  },
}));

// Topper Move: This preserves line breaks and spaces from your database
const Description = styled(Typography)`
  word-break: break-word;
  white-space: pre-line; /* CRITICAL: This fixes the 'no space' issue while viewing */
  line-height: 1.6;
  font-size: 18px;
  color: #333;
  margin-top: 30px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

const DetailView = () => {
  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

  return (
    <Container>
      <Image src={post.picture || url} alt="post" />

      <Box style={{ float: "right" }}>
        {account.username === post.username && (
          <>
            <Link to={`/update/${post._id}`}>
              <EditIcon color="primary" />
            </Link>
            <DeleteIcon onClick={() => deleteBlog()} color="error" />
          </>
        )}
      </Box>

      <Heading>{post.title}</Heading>

      <Author>
        <Link
          to={`/?username=${post.username}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography>
            Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
          </Typography>
        </Link>
        <Typography style={{ marginLeft: "auto" }}>
          {new Date(post.createdDate).toDateString()}
        </Typography>
      </Author>

      <Description>{post.description}</Description>
      
      <Comments post={post} />
    </Container>
  );
};

export default DetailView;

// import { useState, useEffect, useContext } from "react";

// import { Box, Typography, styled } from "@mui/material";
// import { Delete, Edit } from "@mui/icons-material";
// import { Link, useNavigate, useParams } from "react-router-dom";

// import { API } from "../../service/api";

// import { DataContext } from "../../context/DataProvider";

// // components
// import Comments from "./comments/Comments";

// const Container = styled(Box)(({ theme }) => ({
//   margin: "50px 100px",
//   [theme.breakpoints.down("md")]: {
//     margin: 0,
//   },
// }));

// const Image = styled("img")({
//   width: "100%",
//   height: "50vh",
//   objectFit: "cover",
// });

// const EditIcon = styled(Edit)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const DeleteIcon = styled(Delete)`
//   margin: 5px;
//   padding: 5px;
//   border: 1px solid #878787;
//   border-radius: 10px;
// `;

// const Heading = styled(Typography)`
//   font-size: 38px;
//   font-weight: 600;
//   text-align: center;
//   margin: 50px 0 10px 0;
// `;

// const Author = styled(Box)(({ theme }) => ({
//   color: "#878787",
//   display: "flex",
//   margin: "20px 0",
//   [theme.breakpoints.down("sm")]: {
//     display: "block",
//   },
// }));

// const DetailView = () => {
//   const url =
//     "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

//   const [post, setPost] = useState({});
//   const { account } = useContext(DataContext);

//   const navigate = useNavigate();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       let response = await API.getPostById(id);
//       if (response.isSuccess) {
//         setPost(response.data);
//       }
//     };
//     fetchData();
//   }, []);

//   const deleteBlog = async () => {
//     await API.deletePost(post._id);
//     navigate("/");
//   };

//   return (
//     <Container>
//       <Image src={post.picture || url} alt="post" />
//       <Box style={{ float: "right" }}>
//         {account.username === post.username && (
//           <>
//             <Link to={`/update/${post._id}`}>
//               <EditIcon color="primary" />
//             </Link>
//             <DeleteIcon onClick={() => deleteBlog()} color="error" />
//           </>
//         )}
//       </Box>
//       <Heading>{post.title}</Heading>

//       <Author>
//         <Link
//           to={`/?username=${post.username}`}
//           style={{ textDecoration: "none", color: "inherit" }}
//         >
//           <Typography>
//             Author: <span style={{ fontWeight: 600 }}>{post.username}</span>
//           </Typography>
//         </Link>
//         <Typography style={{ marginLeft: "auto" }}>
//           {new Date(post.createdDate).toDateString()}
//         </Typography>
//       </Author>

//       <Typography>{post.description}</Typography>
//       <Comments post={post} />
//     </Container>
//   );
// };

// export default DetailView;
