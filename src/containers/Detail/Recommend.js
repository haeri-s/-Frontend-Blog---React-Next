import React from 'react';
import moment from 'moment';
import { sortArray } from 'utils/sortArray';
import { Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { BLUR_URL } from 'utils/defaultValue'
import PropTypes from 'prop-types';


// 추천 블로그 글
function Recommend({ data }) {

    return (
        <div className="rc_wrap">
            <p className="dtItem_tit">이런 글은 어떠세요?</p>
            <Grid container spacing={3} >
                {sortArray(data, 'desc', 'created_at').slice(0, 3).map(blog => {
                    const { tags, title, created_at } = blog;
                    return (
                        <Grid key={`rec_${blog.id}`} item xs={12} sm={4} >
                            <Link href="/posts/[blog_id]" as={`/posts/${blog.id}`}>
                                <div className="dtItem" >
                                    <div >
                                        <Image loading="eager" priority={true} src={blog.thumb_img} layout='responsive' placeholder="blur" blurDataURL={BLUR_URL} width={300} height={178} alt={blog.title} />
                                    </div>
                                    <div className="dtItem_01">
                                        {tags && tags.split(',').map(tag => (<a>#{tag}</a>))}
                                    </div>
                                    <div className="dtItem_03">{moment(created_at).format('YYYY-MM-DD')}</div>
                                    <div className="dtItem_02">{title}</div>
                                </div>
                            </Link>
                        </Grid>
                    )
                })
                }
            </Grid>
        </div>
    );
}

Recommend.prototype = {
    data: PropTypes.object.isRequired // 블로그 목록 상세
}

export default Recommend;