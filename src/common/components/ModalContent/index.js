import React, { useState, forwardRef, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { AiOutlineClose } from "react-icons/ai";


const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  cancelButton: {
    border: '1px solid #0074ff',
    fontSize: 16,
    width: '114px',
    height: '48px',
    [theme.breakpoints.down(undefined)]: {
      fontSize: 14,
      width: 100,
      height: 40,
    }
  },
  confirmButton: {
    color: '#fff',
    fontSize: '16px',
    width: '114px',
    height: '48px',
    backgroundColor: '#0074ff',
    '&:hover': {
      backgroundColor: '#0074ff'
    },
    [theme.breakpoints.down(undefined)]: {
      fontSize: 14,
      width: 100,
      height: 40,
    }
  },
  closeButton : {
    fontSize: 24,
    color: '#000',
  },
}));

const ModalContent = forwardRef((props, ref) => {
  const {
    event,
    width,
    onCancel,
    cancelText,
    onConfirm,
    confirmDisabled,
    confirmText,
    selectedCount,
    title,
    contents,
    className,
    closeButton,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)} ref={ref} >
      <CardContent style={{padding: '0'}} >
        <Typography
          className={classes.title}
          gutterBottom
          variant="h4"
          style={{justifyContent:'space-between', display:'flex'}}
        >
          {title}
          {closeButton && (
            <Button
              className={classes.closeButton}
              onClick={closeButton}
            >
              <AiOutlineClose />
              </Button>
          )}
        </Typography>
        <Typography className={classes.infoTxt} variant="h5" >
          {contents}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'flex-end', padding:'0 30px 30px 30px'}}>
        {onCancel && (
          <Button
            className={classes.cancelButton}
            onClick={onCancel}
            variant="outlined"
          >
            {cancelText ? cancelText : '취소'}
          </Button>
        )}
        {onConfirm && (
          <Button 
            className={classes.confirmButton}
            onClick={onConfirm}
            variant="contained"
            disabled={confirmDisabled || false}
          >
            {confirmText ? confirmText :'확인'}
          </Button>
        )}
      </CardActions>
    </Card>
  );
});

ModalContent.propTypes = {
  className: PropTypes.string,
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  closeButton: PropTypes.func,
  selectedCount: PropTypes.number
};

export default ModalContent;
