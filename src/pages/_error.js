import React from "react";
import Head from "next/head";
import { Box, Button, Container, Link, SvgIcon, Typography } from "@mui/material";
import Dashboard from "common/layouts/Dashboard";

// 에러 페이지 - 404
const Error = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>블로그 BLOG</title>
        <meta name="description" content="React.js, Next.js를 활용하여 개발한 블로그 입니다." />
      </Head>
      <Dashboard subscribe={false}>
        <Container maxWidth="lg" sx={{textAlign: 'center'}} >
          <Box className='img-wrap' sx={{width: {xs: '100%', md: '512px', margin: '90px auto 0'}}}>
            <img className='image' src="/imgs/404-error-purple.png" layout="fill" alt="404 image" />
          </Box>
          <Typography variant="h2" sx={{fontWeight: 800, mt: '30px', mb: 5}} >잘못된 요청입니다. :(</Typography>
          <Box sx={{textAlign: 'center', mb: {xs: '60px', md: '148px'}}}>
            <Link href="/?page=1"><Button variant="contained" sx={{fontWeight: 'bold', height: {xs: '48px', md: '52px'}, fontSize: {xs:'16px', md: '18px' }, width: '100%', maxWidth: {xs: '100%', md: '224px'}}}>블로그 둘러보기</Button></Link>
          </Box>
        </Container>
        </Dashboard>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};


export default Error;