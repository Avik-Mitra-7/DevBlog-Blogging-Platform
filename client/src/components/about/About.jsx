import { Box, styled, Typography, Divider } from "@mui/material";

const Wrapper = styled(Box)`
  padding: 50px;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const BioText = styled(Typography)`
  color: #4a4a4a;
  line-height: 1.8;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const About = () => {
  return (
    <Wrapper>
      <Typography variant="h3" fontWeight="bold">
        Avik Mitra
      </Typography>
      <Typography variant="h6" color="primary">
        IT Professional | Google Student Ambassador 2025 | Full Stack Developer
      </Typography>
      <Divider sx={{ my: 4 }} />
      <BioText>
        I am an Information Technology student in my 6th semester at the College
        of Engineering and Management, Kolaghat. Aspiring Full-Stack Developer
        proficient in the MERN stack (MongoDB, Express, React, Node.js).
        Experienced in building scalable web applications and AI-driven
        solutions. Proven leader as a Google Student Ambassador, effectively
        bridging technical development with project coordination. Actively
        seeking Software Engineering or AI-focused internships to deploy
        scalable web solutions and drive innovation.
      </BioText>
    </Wrapper>
  );
};

export default About;
