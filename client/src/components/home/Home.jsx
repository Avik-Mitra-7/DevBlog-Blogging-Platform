import { Grid, Box, styled } from "@mui/material";

import Banner from "../banner/Banner";
import Categories from "./Categories";
import Posts from "./post/Posts";
const MainContainer = styled(Grid)`
  padding: 10px;

  @media (min-width: 600px) {
    padding: 20px;
  }
`;

const Home = () => {
  return (
    <>
      <Banner />
      <MainContainer container>
        {/* Side/Top Bar: Categories */}
        {/* On 400px (xs), it takes full width. On 600px+ (sm), it takes 2.5 units */}
        <Grid item lg={2.5} sm={3} xs={12}>
          <Categories />
        </Grid>

        {/* Main Content: Posts */}
        {/* We add a small margin on mobile to separate from Categories */}
        <Grid
          item
          lg={9.5}
          sm={9}
          xs={12}
          sx={{
            marginTop: { xs: "20px", sm: "0px" },
            paddingLeft: { sm: "20px", xs: "0px" },
          }}
        >
          <Posts />
        </Grid>
      </MainContainer>
    </>
  );
};

export default Home;
