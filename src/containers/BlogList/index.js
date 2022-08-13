import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { requestAPI } from "common/apis/requestAPI";
import useSWR from "swr";
import { useRouter } from "next/router";
import BlogItem from "./BlogItem";
import MyPagination from "common/components/MyPagination";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function BlogList({ total, page, limit, keyword, onChangePage, windowSize }) {
    const router = useRouter();
    const { data: blogs } = useSWR(
        `/blogs?limit=${limit}&offset=${(page - 1) * limit}&keyword=${keyword}`,
        (url) => requestAPI("GET", url)
    );
    const {} = useSWR(
        blogs && blogs.next
            ? `/blogs?limit=${limit}&offset=${page * limit}&keyword=${keyword}`
            : null,
        (url) => requestAPI("GET", url)
    ); // 빠른 로딩 속드를 위해 다음 페이지 미리 가져와 캐시 저장

    const handleClick = (id) => {
        router.push({
            pathname: `/posts/${id}`,
        });
    };

    return (
        <Box>
            {!!keyword ? (
                <div className="searchResult">
                    <span>'{keyword}'</span>에 해당하는 검색결과 <span>{total}건</span>
                </div>
            ) : (
                <Typography variant="h1" sx={{mb: {xs: '36px', md: '60px'}}} >블로그 이야기</Typography>
            )}
            <Grid container columnSpacing={3} rowSpacing={{xs: 5, md:8.5}} sx={{mb: total > 9 ? 0 : 15}} >
                {blogs?.data?.length > 0 &&
                    blogs.data.map((blog, idx) => (
                        <BlogItem
                            key={`b_${idx}_${uuidv4()}`}
                            width={windowSize.width}
                            blog={blog}
                            onClick={() => handleClick(blog.id)}
                        />
                    ))}
            </Grid>
            {total > 9 && <MyPagination page={page} totalPage={Math.ceil(total / limit)} onChange={onChangePage} />}
        </Box>
    );
}

BlogList.propTypes = {
    total: PropTypes.number, // 전체 블로그 글 수
    page: PropTypes.number, // 현재 페이지 수
    limit: PropTypes.number, // 한 페이지에 나타낼 블로그 글 수
    keyword: PropTypes.string, // 검색 키워드
    onChangePage: PropTypes.func.isRequired,  // 페이지 변경 시 실행될 Func
    windowSize: PropTypes.object // 화면 사이즈 { width, height }
}
export default BlogList;
