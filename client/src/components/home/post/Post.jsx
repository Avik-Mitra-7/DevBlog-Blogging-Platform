import { styled, Box, Typography } from "@mui/material";

const Container = styled(Box)`
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  margin: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 380px;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;

  /* Topper Move: The Hover Lift & Shadow Deepening */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    border-color: #2874f0;
  }

  & > img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  & > p {
    padding: 0 15px 5px 15px;
  }
`;

const Image = styled("img")({
  borderRadius: "15px 15px 0 0",
});

const CategoryTag = styled(Typography)`
  color: #2874f0;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 15px;
`;

const AuthorText = styled(Typography)`
  color: #878787;
  font-size: 13px;
  font-style: italic;
`;

const Heading = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50; /* Deep, aesthetic charcoal */
  margin-top: 8px;
  text-align: center;
`;
const Details = styled(Typography)`
  font-size: 14px;
  color: #666;
  word-break: break-word;
  text-align: center;
  margin-top: 10px;
  line-height: 1.5;
`;

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str && str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Container>
      <Image src={url} alt="post" />
      <CategoryTag>{post.categories}</CategoryTag>
      <Heading>{addEllipsis(post.title, 25)}</Heading>
      <AuthorText>
        By:{" "}
        <span style={{ color: "#2874f0", fontWeight: 600 }}>
          {post.username}
        </span>
      </AuthorText>
      <Details>{addEllipsis(post.description, 80)}</Details>
    </Container>
  );
};

export default Post;
