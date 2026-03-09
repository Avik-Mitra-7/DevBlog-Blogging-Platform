import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  /* Added a Linear Gradient over the image for a 'Fancy' professional look */
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg)
      center/cover no-repeat #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Heading = styled(Typography)`
  font-size: 75px;
  color: #ffffff;
  line-height: 1.2;
  font-weight: 700;
  /* Added text-shadow for a premium depth effect */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
`;

const SubHeading = styled(Typography)`
  font-size: 24px;
  color: #ffffff;
  background: rgba(40, 116, 240, 0.8); /* Using a professional Blue accent */
  padding: 5px 20px;
  border-radius: 4px;
  margin-top: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
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
