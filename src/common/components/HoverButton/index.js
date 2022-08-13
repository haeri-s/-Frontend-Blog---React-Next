import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Box, styled  } from '@mui/material';

const BtnWrap = styled(Button)`
    font-size: 16px;
    margin-bottom: 15px;
    border-radius: 7px;
    padding:0;

    :hover {
        background-color: none;
    }

    /* & > svg {
        margin-right: 12px;
    } */
`
const HoverBg = styled(Box)`
    height: 100%;
    width: 100%;
    border-radius: 7px;
    position: absolute;
    background: #000;
    opacity: 0;

    :hover {
        opacity: 0.2;
        border-radius: 7px;
    }

`

const HoverButton = ({
    className,
    children,
    style,
    isBorder,
    ...props
}) => {

    // className={clsx([classes.wrap, className, isBorder ? classes.border : classes.wrap])} style={style} 

    // const classes = useStyles();
    return (
        <BtnWrap sx={{height: {xs: '50px', md: '52px'}}} className={className} style={style} variant={isBorder ? 'outlined' : ''} {...props} >
            {children}
            <HoverBg />
        </BtnWrap>

    );
};

HoverButton.propTypes = {
    className: PropTypes.string
};


export default HoverButton;