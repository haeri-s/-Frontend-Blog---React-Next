import React, { useState } from 'react';
import { Modal, Button, IconButton, TextField, InputAdornment, Box } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import ModalContent from 'common/components/ModalContent';
import { CgClose } from "react-icons/cg";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const recommand = [
    '개발', '디자인', '기획', '코딩', 'Django'
]

// 검색창
const SearchModal = ({ onClose }) => {
    const router = useRouter()
    const [searchWord, setSearchWord] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const handleSerchWord = event => {
        try {
            event.persist();
        } catch (err) { }

        setSearchWord(event.target.value)
        if (!!event.target.value) {
            setErrMsg('')
        }
    }

    const handleClose = () => {
        setSearchWord('')
        setErrMsg('')
        onClose()
    }

    const handleSearch = () => {
        if (!searchWord) {
            setErrMsg('검색어를 입력해주세요.')
        }else  {
            router.push({pathname: '/', query: {page: 1, keyword: searchWord}})
            handleClose()
        } 
    }

    const handleKeyPress = event => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }

    const handleClickRecommand = (keyword) => {
        router.push({pathname: '/', query: {page: 1, keyword: keyword}})
        handleClose()
    }

    return <>
        <Box className="drawer" sx={{display: {xs: 'none', md: 'block'}}} >
            <div className="drawer_wrap" >
                <Button disableRipple onClick={onClose} className="closeBtn" ><CgClose /></Button>
                <Box sx={{ textAlign: 'center', pt: '70px' }}>
                    <TextField sx={{ maxWidth: '648px', width: '100%' }}
                        variant='standard'
                        value={searchWord}
                        error={!!errMsg}
                        helperText={errMsg}
                        onChange={handleSerchWord}
                        onKeyPress={handleKeyPress}
                        placeholder="검색어를 입력해주세요."
                        InputProps={{
                            style: { display: 'flex', paddingBottom: 10, paddingLeft: 10 },
                            endAdornment: (<InputAdornment disableRipple poisition="end" style={{ display: 'flex' }}>
                                {!!searchWord && <IconButton disableRipple size="small" onClick={() => setSearchWord('')} ><CancelIcon style={{ color: '#ddd' }} /></IconButton>}
                                <IconButton disableRipple onClick={handleSearch} size="large"><FiSearch style={{ color: '#3D405B' }} /></IconButton>
                            </InputAdornment>
                            )
                        }}
                    />
                </Box>
            </div>
            <div className="searchTag">
                <span style={{ padding: '5px 0', fontSize: '18px', color: '#353a3f', fontWeight: 'bold' }}>검색 키워드 추천</span>
                {recommand.map((keyword, i) => <a key={`mm_${i}`} onClick={() => handleClickRecommand(keyword)} >{ keyword }</a>)}
            </div>
        </Box>
        <Modal
            sx={{display: {xs: 'block', md: 'none'}}}
            open={true}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <ModalContent
                contents={<>
                    <div>
                        <TextField style={{ width: '100%', fontSize: '18px' }}
                            variant='standard'
                            value={searchWord}
                            error={!!errMsg}
                            helperText={errMsg}
                            onChange={handleSerchWord}
                            onKeyPress={handleKeyPress}
                            placeholder="검색어를 입력해주세요."
                            disableRipple
                            InputProps={{
                                style: { display: 'flex', height: '60px' },
                                startAdornment: (<InputAdornment disableRipple poisition="start">
                                    <IconButton onClick={onClose} style={{ fontSize: '28px' }} disableRipple size="large"><FiArrowLeft style={{ color: '#656565' }} /></IconButton>
                                </InputAdornment>

                                ),
                                endAdornment: (<InputAdornment disableRipple poisition="end" style={{ display: 'flex' }}>
                                    {!!searchWord && <IconButton disableRipple size="small" onClick={() => setSearchWord('')} ><CancelIcon style={{ color: '#ddd' }} /></IconButton>}
                                    <IconButton
                                        onClick={handleSearch}
                                        style={{ fontSize: '25px' }}
                                        disableRipple
                                        size="large"><FiSearch style={{ color: '#6f358a' }} /></IconButton>
                                </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div className="search" style={{ padding: '0 15px', marginTop: '30px' }}>
                        <div style={{color: '#25282c', fontWeight: 'bold', fontSize: '18px'}}>검색 키워드 추천</div>
                        <div style={{ marginTop: '16px' }}>
                        {recommand.map((keyword, i) => <a key={`mmm_${i}`} onClick={() => handleClickRecommand(keyword)} >{ keyword }</a>)}
                        </div>
                    </div>
                </>}

            >
            </ModalContent>
        </Modal>
    </>;
}

SearchModal.prototype = {
    onClose: PropTypes.func // 닫힐 때 실행되는 Func
}
export default SearchModal;