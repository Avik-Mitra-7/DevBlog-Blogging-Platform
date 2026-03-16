import { useContext } from "react";
import { Typography, Box, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { API } from "../../../service/api";
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 30px;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
`;

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    marginBottom: '5px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
    }
}));

const Name = styled(Typography)`
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
    cursor: pointer;
    color: #878787;
    transition: color 0.2s ease;
    &:hover {
        color: #ff0000;
    }
`;

const Comment = ({ comment, setToggle }) => {
    // 1. Get account from context
    const { account } = useContext(DataContext);

    const removeComment = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
        
        if (confirmDelete) {
            // 2. Await the response so the UI doesn't refresh too early
            let response = await API.deleteComment(comment._id);
            if (response.isSuccess) {
                // 3. Functional update ensures the toggle ALWAYS flips correctly
                setToggle((prev) => !prev); 
            }
        }
    };

    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
                
                {/* 4. Safety Logic: Check if account exists before comparing */}
                {account && account.username && comment.name === account.username && (
                    <DeleteIcon onClick={() => removeComment()} />
                )}
            </Container>
            <Typography style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }}>
                {comment.comments}
            </Typography>
        </Component>
    );
};

export default Comment;