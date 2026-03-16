import { Box, styled, Typography, Link, Stack } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: "20px",
  background: "#f8f9fa",
  marginTop: "64px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "40px",
  },
}));

const ContactCard = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  padding: "60px 40px",
  borderRadius: "30px",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.05)",
  textAlign: "center",
  maxWidth: "450px",
  width: "100%",
  border: "1px solid #f0f0f0",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
  },
}));

const ContactButton = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "15px",
  marginTop: "18px",
  padding: "16px",
  fontSize: "1rem",
  fontWeight: "600",
  textDecoration: "none",
  borderRadius: "15px",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  border: "1px solid #eee",
  color: "#444",
  background: "#fff",

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    borderColor: "#2874f0",
    color: "#2874f0",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "12px",
    fontSize: "0.95rem",
  },
}));

const Contact = () => {
  return (
    <Wrapper>
      <ContactCard>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.7rem", sm: "2.3rem" },
            color: "#1a1a1a",
            mb: 1,
          }}
        >
          Getting in touch is easy!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#777",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            mb: 4,
          }}
        >
          Feel free to reach out for collaborations or just a friendly tech
          talk.
        </Typography>

        <Stack spacing={0}>
          <ContactButton
            href="mailto:avikmitra.officially@gmail.com"
            target="_blank"
          >
            <Email sx={{ color: "#ea4335", fontSize: "1.4rem" }} />
            Email Me
          </ContactButton>

          <ContactButton
            href="https://www.linkedin.com/in/avik-mitra-74b965370"
            target="_blank"
          >
            <LinkedIn sx={{ color: "#0077b5", fontSize: "1.4rem" }} />
            LinkedIn Profile
          </ContactButton>

          <ContactButton href="https://github.com/Avik-Mitra-7" target="_blank">
            <GitHub sx={{ color: "#333", fontSize: "1.4rem" }} />
            GitHub Portfolio
          </ContactButton>
        </Stack>
      </ContactCard>
    </Wrapper>
  );
};

export default Contact;
