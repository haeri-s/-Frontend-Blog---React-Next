import React from "react";
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import BlogItem from "../BlogItem";
import { v4 as uuidv4 } from 'uuid';

// 인기 블로그 글 목록
function Bookmark({ blogs, windowSize }) {
    const router = useRouter();

    const handleClick = (id) => {
        router.push({
            pathname: "/posts/[blog_id]",
            query: { blog_id: id },
        });
    };

    return (
        <Box sx={{mb: {xs: '100px', md: '140px'}}}>
        <Typography variant="h1" sx={{mb: {xs: '36px', md: '60px'}}} >블로그 인기글</Typography>
            <Grid container columnSpacing={3} rowSpacing={{xs: 5, md:8.5}}>
                {blogs?.length > 0 &&
                    blogs.map((blog, idx) => (
                        <BlogItem
                            key={`bk_${idx}_${uuidv4()}`}
                            width={windowSize.width}
                            blog={blog}
                            onClick={() => handleClick(blog.id)}
                        />
                    ))}
            </Grid>
        </Box>
    );
}

Bookmark.prototype = {
    blogs: PropTypes.array.isRequired, // 인기 블로그 목록
    windowSize: PropTypes.object // 화면 사이즈 { width, height }
}
export default Bookmark;
