import palette from "../palette";

const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      height: 42, //gin 페이지 때문에
      'fieldset': {
        borderColor: '#dddddd !important',
        borderRadius: 7,
      },
      '&:hover fieldset': {
        borderColor: '#6f358a !important',
      },
      '&.Mui-focused': {
        'fieldset': {
          borderColor: `${palette.primary.main} !important`
        }
      },
      '&.Mui-disabled': {
        backgroundColor: '#f5f5f5',
        color: '#dddddd',
        'fieldset': {
          borderColor: '#dddddd !important'
        }
      },
      '&.Mui-error': {
        'fieldset': {
          borderColor: 'red !important',
          borderWidth: 2,
        },
        '&:hover fieldset': {
          borderColor: 'red !important',
        }
      },
    },
    
  }
}

export default MuiOutlinedInput;


// export default {
//   // root : {
//   //   borderRadius: 7,
//   // }
//   styleOverrides: {
//     root: {
//       '&:hover fieldset': {
//         borderColor: '#6f358a !important',
//       },
//     },
//   }
  // root: {
  //   border: 0,
  //   height: 'auto',
  //   marginBottom: 8,
  //   borderColor: 'rgba(0,0,0,0.15)',
  //   "&$focused $notchedOutline": {
  //     borderColor: '#0074ff',
  //     borderWidth: 1
  //   },
  //   '&:hover': {
  //     borderColor: '#0074ff',
  //     boxShadow: 'none',
  //   },
  //   '&:hover fieldset': {
  //       borderColor: 'white',
  //   },
  // },
  // adornedEnd: {
  //   display: 'flex'
  // }
// };
