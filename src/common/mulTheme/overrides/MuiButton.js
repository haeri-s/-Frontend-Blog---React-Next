import { colors } from '@mui/material';
import palette from '../palette';

export default {
  styleOverrides: {
    root: {
      fontFamily: 'Pretendard',
      borderRadius: '7px',
      boxShadow: 'none',
      fontSize: 18,
      '@media (max-width: 768px)': {
        fontSize: 16
      },
      padding: 0,
      '&:hover': {
        transition: 'none',
        boxShadow: 'none',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    text: {
      padding: 0,
    },
    variants: [
      {
        props: { variant: 'contained', color: 'primary' },
        style: {
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: palette.primary.main,
            borderColor: 'none'
          },
        }
      },
    ]
  }
};
