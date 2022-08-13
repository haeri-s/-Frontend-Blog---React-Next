import React, { useState } from 'react';
import { Button, Box, Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { FiSearch } from "react-icons/fi";
import SearchModal from 'containers/SearchModal';

const LogoWrap = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '12px 0',
  borderBottom: '1px solid #d8d8d8'
}));
const LogoContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  padding: '0 20px',
  margin: '0 auto',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
}));
const SearchBtn = styled(Button)(({ theme }) => ({
  height: 42,
  width: '94px',
  borderRadius: '7px',
  fontSize: 18,
  fontWeight: 600,
  color: '#353a3f',
  '&:hover': {
    backgroundColor: '#f5f5f5'
  },
  [theme.breakpoints.down('md')]: { 
    fontSize: 20,
    width: 24,
    height: 24,
    '&:hover': {
      backgroundColor: '#fff'
    }
  },
}));
const Title = styled(Button)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: '#353a3f',
  [theme.breakpoints.down('md')]: { 
    fontSize: 18,
  },
}));


const TopBar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (router.pathname == '/') {
      router.push({query: {'reset': true}})
    } else {
      router.push('/')
    }
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  return (<>
    <Drawer open={open} anchor={'top'} >
      <SearchModal onClose={handleClose} />
    </Drawer>
    <LogoWrap>
      <LogoContainer>
        <Box sx={{zIndex:100, height:32}}>
          <Box className='img-wrap' onClick={handleClick} sx={{cursor: 'pointer', width: {xs: '146px', md: '176px'}, height: {xs: '27px', md: '32px'}}} >
            <Title>블로그 Blog</Title>
          </Box>
        </Box>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <SearchBtn onClick={() => setOpen(true)} disableRipple ><Box component="span" sx={{display:{xs:'none', md:'inline'} }}>검색</Box>
            <FiSearch style={{marginLeft:5}}/>
          </SearchBtn>
        </Box>
      </LogoContainer>
    </LogoWrap>
    </>
  )
}

export default TopBar;
