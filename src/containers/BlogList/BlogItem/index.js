import { MOBILE_WIDTH } from 'utils/defaultValue';
import { Grid } from "@mui/material";
import moment from 'moment';
import DefaultImg from 'common/assets/image/meta.png';
import PropTypes from 'prop-types';

// 블로그 목록 아이템
const BlogItem = ({ width, blog, onClick }) => {
    return (
        <Grid item md={4} sm={6} xs={12}>
            <div className="thItem">
                <div className="thum">
                    <div className="th_img" onClick={() => onClick(blog)} >
                        <img src={width < MOBILE_WIDTH ? (blog.mobile_img ? blog.mobile_img : DefaultImg) : (blog.thumb_img ? blog.thumb_img : DefaultImg)} />
                    </div>
                    <div className="th_con">
                        <p className="th_01" onClick={() => onClick(blog)}>{moment(blog.created_at).format('YYYY-MM-DD')}</p>
                        <h4 className="cursor" onClick={() => onClick(blog)}>{blog.title}</h4>
                    </div>
                </div>
            </div>
        </Grid>
    )
}

BlogItem.prototype = {
    width: PropTypes.number, // 화면 width 사이즈 
    blog: PropTypes.object.isRequired, // 블로그 상세 내용
    onClick: PropTypes.func // 클릭 이벤트 Func
}

export default BlogItem;