import { styled, Box, Typography } from "@mui/material";

const Container = styled(Box)`
  border: 1px solid #e0e0e0;
  border-radius: 16px; /* Pinterest uses slightly rounder corners */
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  width: 100%; /* Important for Masonry */

  /* CRITICAL: Remove fixed height for the Pinterest staggered look */
  height: auto;
  padding-bottom: 15px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    border-color: #2874f0;
  }

  @media (max-width: 600px) {
    margin: 5px 0;
  }
`;

const Image = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "250px",
  objectFit: "cover",
  borderRadius: "16px 16px 0 0",
});

const CategoryTag = styled(Typography)`
  color: #2874f0;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-top: 12px;
  background: #f0f5ff; /* Soft blue background for the tag */
  padding: 2px 8px;
  border-radius: 4px;
`;

const AuthorText = styled(Typography)`
  color: #878787;
  font-size: 12px;
  margin-top: 4px;
`;

const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 10px;
  text-align: center;
  padding: 0 12px;
  line-height: 1.3;
`;

const Details = styled(Typography)`
  font-size: 14px;
  color: #555;
  word-break: break-word;
  text-align: center;
  margin-top: 8px;
  line-height: 1.4;
  padding: 0 15px;
`;

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str && str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <Container>
      <Image src={url} alt="post" />
      <CategoryTag>{post.categories || "General"}</CategoryTag>
      <Heading>{addEllipsis(post.title, 35)}</Heading>
      <AuthorText>
        by{" "}
        <span style={{ color: "#2874f0", fontWeight: 600 }}>
          {post.username}
        </span>
      </AuthorText>
      <Details>{addEllipsis(post.description, 90)}</Details>
    </Container>
  );
};

export default Post;
