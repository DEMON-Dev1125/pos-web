import React, { useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopoverBtn from './PopoverBtn';
import PopoverNum from './PopoverNum';

const useStyles = makeStyles((theme) => ({
    border: {
        borderRadius: 14,
    },

}));
export default function PopoverComponent(props) {
    const classes = useStyles();
    const refInput = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(props.value);
    const [isClicked, setIsClicked] = useState(false);
    const [amount, setAmount] = useState(0);
    const [count, setCount] = useState(0);
    const [valueChanged, setValueChanged] = useState(false);

    useEffect(() => {
        setValue(props.value);
    }, [props.value]);
    useEffect(() => {
        if (amount === 0) {
            setIsClicked(false);
        }
        else {
            let fixAmount = amount / 1000;
            setValue(fixAmount);
        }
    }, [amount]);
    function handleConfirm() {
        handleClose();
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        if (valueChanged) {
            let fixAmount = amount / 1000;
            setAmount(0);
            props.onChange(fixAmount, props.index);
        }
        setValueChanged(false);
        setAnchorEl(null);
    };
    const miAmount = () => {
        Promise.resolve()
            .then(() => { setValue(prevValue => prevValue - 1); })
            .then(() => props.onChange(value - 1, props.index))
    };
    const plAmount = () => {
        Promise.resolve()
            .then(() => { setValue(prevValue => prevValue + 1); })
            .then(() => props.onChange(value + 1, props.index))

    };
    const numPadClick = (e) => {
        setValueChanged(true);
        if (e === '.') {
            if (isClicked) {
                return;
            } else {
                setIsClicked(true);
                setCount(1);
                setAmount(prevState => {
                    return prevState * 1000
                });
                return;
            }
        } else {
            //after dot is clicked
            if (isClicked) {
                if (count === 1) {
                    setAmount(prevState => {
                        return prevState + e * 100
                    });
                    setCount(prevState => {
                        return prevState + 1;
                    })
                }
                if (count === 2) {
                    setAmount(prevState => {
                        return prevState + e * 10
                    });
                    setCount(prevState => {
                        return prevState + 1;
                    })
                }
                if (count === 3) {
                    setAmount(prevState => {
                        return prevState + e * 1
                    });
                    setCount(prevState => {
                        return prevState + 1;
                    })
                }
                return;
            } else {

                setAmount(prevState => {
                    return prevState + e
                });
            }

        }
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <input
                ref={refInput}
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                id="filled-number"
                value={value}
                onChange={(e) => props.onChange(e.target.value, props.index)}
                className='customInput'
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                className={classes.border}
            >
                {
                    props.type === 2 &&
                    <PopoverNum
                        onClick={numPadClick}
                        handleConfirm={handleConfirm}
                    />
                }
                {
                    (props.type === 1 || props.type === 3 || props.type === 4) &&
                    <PopoverBtn
                        miAmount={miAmount}
                        plAmount={plAmount}
                    />
                }


            </Popover>
        </div>
    );
}