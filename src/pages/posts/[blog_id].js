import Dashboard from "common/layouts/Dashboard";
import PropTypes from 'prop-types';
import moment from 'moment';
import FroalaView from 'common/components/FroalaView';
import dynamic from "next/dynamic";
import Recommend from "containers/Detail/Recommend";
import { NextSeo } from 'next-seo'
import useWindowSize from "utils/useWindowSize";
import { MOBILE_WIDTH, THUMB_WIDTH } from "utils/defaultValue";
import api, { BASE_URL } from 'mixins/api';
import { Box } from '@mui/material';
const SocialLink = dynamic(() => import('containers/Detail/SocialLink'));

// 블로그 상세 페이지
function BlogDetails({ blog, latest }) {
    const windowSize = useWindowSize();

    return (
        <Dashboard>
            {!!blog && <>
                <NextSeo
                    title={blog.title}
                    description={blog.tags}
                    openGraph={{
                        url: `http://127.0.0.1:3000/${blog.id}`,
                        title: blog.title,
                        description: blog.tags,
                        images: [
                            {
                                url: blog.thumb_img,
                                width: 800,
                                height: 400,
                                alt: blog.title,
                            },
                        ],
                        site_name: '127.0.0.1:3000',
                    }}
                    twitter={{
                        handle: '@handle',
                        site: '@site',
                        cardType: 'summary_large_image',
                    }}
                />
                <div className="dt_wrap">
                    <div className="hash">
                        {blog.tags && (
                            blog.tags.map(tag => (<span>#{tag} </span>))
                        )}
                    </div>
                    <div className="dt_tit">{blog.title}</div>
                    <div className="dt_date">{moment(blog.created_at).format('l LT')} | <Box component={'span'} sx={{color: 'primary.main', fontWeight:600}}>view {blog.view_count}</Box></div>
                    <div className="dt_img">
                        <img src={windowSize.width < MOBILE_WIDTH ? blog.mobile_img : blog.thumb_img } />
                    </div>
                    <div className="dt_con">
                        <FroalaView
                            config={{ key: process.env.NEXT_PUBLIC_FROALA_KEY }}
                            model={blog.contents}
                        />
                    </div>
                    <SocialLink data={blog ? blog : { title: '' }} id={blog.id} />
                </div>
            </>}
            {latest && latest.length > 0 && <Recommend data={latest} width={windowSize.width} />}
        </Dashboard>
    )

}

BlogDetails.propTypes = {
    blog: PropTypes.object.isRequired, // 블로그 상세 내용
    latest: PropTypes.array // 최신 블로그 글 목록
};


export async function getServerSideProps({ params }) {
    try{
        const res = await api.get(encodeURI(BASE_URL + `/blogs/${params.blog_id}`))
        const sub = await api.get(encodeURI(BASE_URL + '/blogs?offset=0&limit=3'))
        return {
            props: {
                blog: res.data?.result || {},
                latest: sub.data?.result?.data || []
            },
        }
        
    } catch(err) {
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            }
        }
    }
}

export default BlogDetails;