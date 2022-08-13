import React, { useEffect, useState } from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Typography } from '@mui/material';
import dynamic from 'next/dynamic';
const KakaoStoryShareButton = dynamic(()=> import('common/components/KakaoStoryShareButton'));
const KakaoTalkShareButton = dynamic(()=> import('common/components/KakaoTalkShareButton'));
import bandIcon from "common/assets/image/link_band.png";
import PropTypes from 'prop-types';


// 공유 기능
function SocialLink({ id, data}) {
    const [show, setShow] = useState(false)
    const url = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/posts/${id}`;

    useEffect(() => {
        setShow(false)
    }, [id])

    return (
        <>
            <div className="dt_sns">
                <ul>
                    <li>
                        <FacebookShareButton
                            url={url}
                            quote={data.title}
                            hashtag="#블로그BLOG"
                        >
                            <img src={'/imgs/link_facebook.svg'} width={40} height={40} />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton
                            url={url}
                            quote={data.title}
                            hashtag="#블로그BLOG"
                        >
                            <img src={'/imgs/link_twitter.svg'} width={40} height={40} />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <a href={`https://band.us/plugin/share?body=${encodeURI(data.title)}&route=${url}`} target="_blank" >
                            <img style={{borderRadius: 50}} src={bandIcon} />
                        </a>
                    </li>
                    <li>
                        <KakaoTalkShareButton title={data.title} url={url} contents={data.contents} image={data.mobile_img} path={id} />
                    </li>
                    <li>
                        <KakaoStoryShareButton title={data.title} url={url} />
                    </li>
                    <li>
                        <CopyToClipboard text={url} onCopy={() => setShow(true)} >
                        <img src={'/imgs/link.svg'} width={40} height={40} />
                        </CopyToClipboard>
                    </li>
                </ul>
            </div>
            <Typography variant="caption" style={{ display: 'block', textAlign: 'center', color: '#6f358a', marginTop: 10 }} >{ show ? '복사되었습니다.' : null}</Typography>
        </>   
    );
}

SocialLink.prototype = {
    id: PropTypes.number, // 블로그 id
    data: PropTypes.object // 블로그 상세
}
export default SocialLink;