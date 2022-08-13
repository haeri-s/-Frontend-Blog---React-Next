import React, { useEffect, useState } from 'react'
import kakaoIcon from "common/assets/image/link_kakaotalk.png"


const KakaoTalkShareButton = ({ title, contents, image, path}) => {
  const [desc, setDesc] = useState('')
  
  useEffect(() => {
    createKakaoButton()
  }, [])

  useEffect(() => {
    let content =  '';
    try {
      content = contents.split(/<.+?>/).join(' ').split('&nbsp;').join(' ');
      setDesc(content.length > 100 ? content.slice(0, 100) : content)
    } catch(err) {
      console.log(err)
    }
  }, [contents])

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
      return kakao.Link.sendCustom({
        templateId: 38121,
        templateArgs: {
          title,
          desc,
          image,
          path
        }
      })
    }
  }

  return (
    <button className="kakao-talk" onClick={handleCick}>
      <img className="kakatalk-img" src={kakaoIcon} alt="kakao-share-icon" />
    </button>
  )

}

export default KakaoTalkShareButton;