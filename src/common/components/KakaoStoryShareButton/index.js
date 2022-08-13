import React, { useEffect } from 'react'
import kakaoStoryIcon from "common/assets/image/link_kakao.png"


const KakaoStoryShareButton = ({ title, url}) => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY)
        
      }
    }
  }

  const handleCick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      kakao.Story.share({
        url: url,
        text: title,
      })
    }
  }

  return (
    <button className="kakao-story" onClick={handleCick}>
      <img src={kakaoStoryIcon} alt="kakao-share-icon" />
    </button>
  )
}

export default KakaoStoryShareButton;