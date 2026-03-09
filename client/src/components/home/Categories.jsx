import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  Paper,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../constants/data";

const StyledPaper = styled(Paper)`
  margin: 10px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const StyledTable = styled(Table)`
  border: none;
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #2874f0; 
  color: #fff;
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    background: #1a5bb8;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(40, 116, 240, 0.3);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
`;

const CategoryCell = styled(TableCell)`
  padding: 15px 20px;
  font-size: 1rem;
  color: #4a4a4a;
  transition: all 0.3s ease;
  border-bottom: 1px solid #f0f0f0;

  &:hover {
    background-color: #f1f3f6;
    padding-left: 30px; /* Fancy 'push' effect */
    color: #2874f0;
    cursor: pointer;
  }
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink to={`/create?category=${category || ""}`}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </StyledLink>

      <StyledPaper elevation={0}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <CategoryCell
                sx={{ fontWeight: 800, fontSize: "1.1rem", bgcolor: "#fafafa" }}
              >
                <StyledLink to={"/"}>All Categories</StyledLink>
              </CategoryCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <CategoryCell>
                  <StyledLink to={`/?category=${category.type}`}>
                    {category.type}
                  </StyledLink>
                </CategoryCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    </>
  );
};

export default Categories;
