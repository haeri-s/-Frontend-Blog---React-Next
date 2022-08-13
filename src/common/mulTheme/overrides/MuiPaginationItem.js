import palette from '../palette';

const MuiPaginationItem = {
  styleOverrides: {
    root: {
      fontSize: '16px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: '#6f358a'
      },
      '&.Mui-selected': {
        color: '#fff',
        fontWeight: 600,
        backgroundColor: '#6f358a',
        '&:hover': {
          background: '#6f358a',
        },
      },
      '&.Mui-disabled': {
        '.MuiPaginationItem-icon': {
          color: '#77808d'
        }
      }
    },
    icon: {
      color: palette.primary.main,
      fontSize: '24px',
    },
  },
  
}

export default MuiPaginationItem;
