
import moment from 'moment';
import React from 'react';
import { Box, Container, Grid, SvgIcon, Typography  } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import Image from 'next/image'


const FooterWrap = styled(Grid)(({theme}) => ({
    maxWidth: 1200,
    margin: '0 auto',
    padding: '48px 0',
    fontSize: 14,
    fontWeight: 400,
    [theme.breakpoints.down('lg')]: { 
        padding: '40px 32px 32px 32px'
    },
    [theme.breakpoints.down('md')]: { 
        padding: '32px 16px 20px 16px'
    }

}))
const Title = styled(Typography)(({theme}) => ({
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 12,
    [theme.breakpoints.down('lg')]: { 
        marginTop: 0,
        marginBottom: 8,
    },
    [theme.breakpoints.down('md')]: { 
        marginTop: 8,
        // marginBottom: 8,
    }
}))

const FtLink = styled('a')(({theme}) => ({
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: 12,
    cursor: 'pointer',
    color: '#77808d',
    '& > div': {
        marginRight: '10px !important',
    },
    [theme.breakpoints.down('lg')]: { 
        marginTop: 0,
        marginBottom: 8,
    },
    // [theme.breakpoints.down('md')]: { 
    //     marginBottom: 8,
    // }

}))


function Footer({className, ...rest }) {
    return (<>
        <Grid container sx={{borderTop: '1px solid #d8d8d8'}}>    
            <FooterWrap item xs={12} sx={{color: '#77808d',}}>
                <Container disableGutters maxWidth="lg" sx={{position: 'relative', textAlign: 'center'}} >
                    <Title sx={{mt: {lg: 0, md: '30px', xs:'20px'}, mb: {md: '12px', xs: '4px'} }}>블로그 BLOG</Title>
                    <Box sx={{lineHeight: {md: '1.7', xs: '1.5'}, fontSize: {lg: '14px', md: '13px'}   }}>
                        서울시 중구 태평로1가 50-0&nbsp;&nbsp; <Box component="br" sx={{ display: { md: 'none', lg: 'block'} }} />
                        전화번호: 010-000-0000&nbsp;&nbsp;E-mail: haeri615@naver.com
                        <Box sx={{fontSize:12, mt:'10px' }}>
                            Copyright {moment().format('YYYY')}. 블로그 BLOG All Rights Reserved.
                        </Box>
                    </Box>
                </Container>
            </FooterWrap>
        </Grid>
    </> )
}

export default Footer;