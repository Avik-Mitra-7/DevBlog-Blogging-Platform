import { Box, styled, Typography, Divider, Chip, Stack } from "@mui/material";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "60px 20px",
  maxWidth: "900px",
  margin: "auto",
  marginTop: "100px", 
  textAlign: "center",
  background: "linear-gradient(180deg, #ffffff 0%, #f9fbff 100%)",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 15px",
    marginTop: "60px",
  },
}));

const ProfileImage = styled("img")({
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "20px",
  border: "4px solid #fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
});

const NameHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontSize: "3rem",
  color: "#1a1a1a",
  letterSpacing: "-1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.2rem",
  },
}));

const BioText = styled(Typography)(({ theme }) => ({
  color: "#555",
  lineHeight: 1.8,
  marginTop: "25px",
  fontSize: "1.1rem",
  textAlign: "justify", 
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    textAlign: "center", 
  },
}));

const SkillChip = styled(Chip)`
  background: #f0f5ff;
  color: #2874f0;
  font-weight: 600;
  border: 1px solid #d0e2ff;
  transition: all 0.3s ease;
  &:hover {
    background: #2874f0;
    color: #fff;
    transform: scale(1.05);
  }
`;

const About = () => {
  const skills = [
    "MERN Stack",
    "Java",
    "AI Prompting",
    "Python",
    "Content Writting",
  ];

  return (
    <Wrapper>
      <ProfileImage src="/1773433584568.png" alt="Avik Mitra Profile" />

      <NameHeading>AVIK MITRA</NameHeading>

      <Typography
        variant="h6"
        sx={{ color: "#2874f0", fontWeight: 600, mt: 1 }}
      >
        Full Stack Developer | Google Student Ambassador
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        sx={{ mt: 3, gap: 1 }}
      >
        {skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </Stack>

      <Divider sx={{ my: 4, width: "50%", mx: "auto", opacity: 0.5 }} />

      <BioText>
        I am an Information Technology student in my 6th semester at the College
        of Engineering and Management, Kolaghat. Currently serving as a Google
        Student Ambassador, I specialize in the MERN stack and AI integration.
        My focus is on developing scalable web solutions that bridge the gap
        between technical architecture and user-centric design. I am actively
        pursuing Software Engineering opportunities to apply my full-stack
        expertise.
      </BioText>
    </Wrapper>
  );
};

export default About;
