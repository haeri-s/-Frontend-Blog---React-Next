import palette from './palette';

export default {
  basic: {
    fontFamily: 'Pretendard'
  },
  h1: {
    color: palette.text.primary,
    fontWeight: 'bold',
    fontSize: '32px',
    letterSpacing: '-0.32px',
    lineHeight: 1.13,
    fontFamily: 'Pretendard',
    '@media (max-width: 768px)': {
      fontSize: '24px',
      lineHeight: 1.17,
      letterSpacing: '-0.24px'
    }
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '34px',
    letterSpacing: '-0.34px',
    lineHeight: 1.41,
    fontFamily: 'Pretendard'
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: '24px',
    letterSpacing: '-0.06px',
    lineHeight: '28px',
    fontFamily: 'Pretendard'
  },
  
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '-0.06px',
    lineHeight: '24px',
    fontFamily: 'Pretendard'
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '16px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
    fontFamily: 'Pretendard'
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px',
    fontFamily: 'Pretendard'
  },
  subtitle1: {
    color: palette.text.primary,
    fontSize: '18px',
    letterSpacing: '-0.18px',
    lineHeight: 1.33,
    fontFamily: 'Pretendard',
  },
  subtitle2: {
    color: palette.primary.main,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '1.12px',
    lineHeight: 1.86,
    fontFamily: 'Poppins'
  },
  body1: {
    color: palette.text.primary,
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: 1.5,
    fontFamily: 'Pretendard'
  },
  body2: {
    color: palette.text.secondary,
    fontSize: '16px',
    letterSpacing: 'normal',
    lineHeight: 1.5,
    fontFamily: 'Pretendard'
  },
  button: {
    color: palette.text.primary,
    fontSize: '14px',
    fontFamily: 'Pretendard'
  },
  caption: {
    color: palette.text.secondary,
    fontSize: '14px',
    letterSpacing: '0.33px',
    lineHeight: 1,
    fontFamily: 'Pretendard'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase',
    fontFamily: 'Pretendard'
  }
};
