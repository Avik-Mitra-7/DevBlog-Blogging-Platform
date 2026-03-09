import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Wrapper = styled(Box)`
  padding: 80px 20px;
  text-align: center;
  background: #fdfdfd;
  min-height: 80vh;
`;

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
  &:hover {
    color: #2874f0;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <Typography variant="h3" fontWeight="bold">
        Getting in touch is easy!
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
        Reach out to me through any of the following platforms:
      </Typography>

      <Box sx={{ mt: 5 }}>
        <ContactLink
          href="mailto:avikmitra.officially@gmail.com"
          target="_blank"
        >
          <Email color="primary" /> Email
        </ContactLink>

        <ContactLink
          href="www.linkedin.com/in/avik-mitra-74b965370"
          target="_blank"
        >
          <LinkedIn color="primary" /> LinkedIn Profile
        </ContactLink>

        <ContactLink href="https://github.com/Avik-Mitra-7" target="_blank">
          <GitHub color="primary" /> GitHub Portfolio
        </ContactLink>
      </Box>
    </Wrapper>
  );
};

export default Contact;
