import palette from '../palette';


// MuiFormControlLabel
const MuiFormControlLabel = {
  styleOverrides: {
    root: {
      // marginRight: 50,
      '@media (max-width: 767px)': {
        marginRight: 0,
        marginLeft: 0,
      }
    },
    label: {
      fontWeight: 400,
      '@media (max-width: 767px)': {
        fontSize: 16,
      }
    }
  }

}

export default MuiFormControlLabel;

