import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
      center/cover no-repeat #000;
  height: 45vh; /* Laptop Height */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  /* Mobile (400px) Tweaks: Make it much shorter */
  @media (max-width: 600px) {
    height: 25vh;
  }
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1.2;
  font-weight: 700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;

  /* Mobile Font Scaling: 70px is too big for 400px screens */
  @media (max-width: 600px) {
    font-size: 35px;
    letter-spacing: 1px;
  }
`;

const SubHeading = styled(Typography)`
  font-size: 22px;
  color: #ffffff;
  background: rgba(40, 116, 240, 0.8);
  padding: 5px 20px;
  border-radius: 4px;
  margin-top: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Mobile Tweaks */
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 3px 12px;
    margin-top: 5px;
  }
`;

const Banner = () => {
  return (
    <Image>
      <Heading>DevBlog</Heading>
      <SubHeading>Blogging Platform</SubHeading>
    </Image>
  );
};

export default Banner;
