import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BsCheckCircleFill, BsCheckCircle } from 'react-icons/bs';

// const CustomCheckbox = forwardRef((props, ref) => {
//     return (
//         <Checkbox
//             inputRef={ref}
//             on
//         />
//     )
// })

const CheckBox = ({label, fontSize, icon, onChange, ...props}) => {
    return(
        <FormControlLabel 
            label={label || ''}
            sx={{marginRight: '10px'}}
            control={<Checkbox  
                sx={{p:{xs:0, md:'9px 0'}, }}
                disableRipple
                onChange={onChange}
                checkedIcon={<BsCheckCircleFill style={{color: '#6f358a', fontSize: fontSize || 20, }}/>}
                icon={icon || <BsCheckCircle style={{color: '#cbcbcb', fontSize: fontSize || 20 }} />}
            />}  
            {...props}
        />

    )
}
export default CheckBox;