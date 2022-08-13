import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../common/layouts/Dashboard';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import useWindowSize from 'utils/useWindowSize';
import { NextSeo } from 'next-seo'
import api, { BASE_URL } from 'mixins/api';
import { SWRConfig } from 'swr';
import BlogList from 'containers/BlogList';
import Bookmark from 'containers/BlogList/Bookmark';

// 메인 페이지
const Home = ( { fallback, initialPage, limit, total, bookmarks }) => {
  const windowSize = useWindowSize()
  const router = useRouter()
  const [page, setPage] = useState(initialPage)

  useEffect(()=> {
    if (router?.query?.reset) {
      setPage(1)
      router.push({ query: {page: 1} }, null, { shallow: true })
    } else if(router?.query?.page) {
      try {
          setPage(Number(router.query.page))
      } catch(err) {
          setPage(1)
      }
    } else {
      router.push({ query: {page: 1} }, null, { shallow: true })
    }
  }, [router.query])


  const handleChagePage = (newPage) => {
    if(newPage > 0) {
        router.push({query: {...router.query, page: newPage}}, null, {shallow: true})
    }
  }

  return (
    <>
    {/* SEO를 위한 설정 */}
      <NextSeo
        title={'블로그 BLOG'}
        description={'블로그입니다'}
        openGraph={{
          url: `http://localhost:3000`,
          title: '블로그BLOG',
          description: '블로그입니다',
          images: [
            {
              url: 'http://127.0.0.1:3000/imgs/meta.png',
              width: 800,
              height: 400,
              alt: '블로그 BLOG',
            },
          ],
          site_name: 'localhost:3000',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Dashboard >
        <div className="content">
          <SWRConfig value={{ fallback }}>
            <Container disableGutters sx={{mt: !!router?.query?.keyword ? {xs: '0px', md:'60px',} : {xs: '50px', md:'100px',}}} >
              {!!!router?.query?.keyword && bookmarks && bookmarks.length > 0 && <Bookmark blogs={bookmarks} windowSize={windowSize} />}
              <BlogList total={total} limit={limit} page={page} keyword={router?.query?.keyword || ''} onChangePage={handleChagePage} windowSize={windowSize} />
            </Container>
          </SWRConfig>
        </div>
      </Dashboard>
    </>
  )
}

Home.propTypes = {
  fallback: PropTypes.object.isRequired, // swr 로딩 중일 때 표시될 기본 블로그 목록
  initialPage: PropTypes.number, // 처음 접근한 페이지
  limit: PropTypes.number, // 페이지 최대 표시 블로그 글 수
  total: PropTypes.number, // 총 페이지
  bookmarks: PropTypes.array // 최신 인기 블로그 글 목록
};

export async function getServerSideProps({ query }) {
  let page = Number(query.page ?? '1') || 1;
  if(page < 1) {
      page =1
  }
  let props = { initialPage: page, limit: 9, total: 0 }
  let normal = { data: [], total: 0, next: null, previous: null }
  let keyword = query.keyword || '';
  let blog_url = `/blogs?limit=${props.limit}&offset=${(page - 1) * props.limit}&keyword=${keyword}` 
  let bookmark_url = '/blogs/bookmark';

  let bookmarks = []
  try {
      // 1. 블로그 인기글 가져오기
      const bookRes = await api.get(encodeURI(BASE_URL + bookmark_url))
      if (bookRes.data?.result?.data) {
        bookmarks = bookRes.data?.result.data
      }
    } catch(err) {
      console.log(err)
    }
    try {
      // 2. 블로그 목록 가져오기
      const url = encodeURI(BASE_URL + blog_url )
      const blogRes = await api.get(url)
      if (blogRes.data?.result) {
          normal = blogRes.data.result;
          props.total = normal.total;
      }
  } catch (err) {
      console.log('blog err ', err)
  }

  const res = { 
      props: {
          fallback: {
              [blog_url]: normal,
          },
          ...props,
          bookmarks,
      } 
  }

  return res
}



export default Home;