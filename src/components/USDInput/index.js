import React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {_numberWithCommas} from "../../constants";

function USDInput(props) {

    function handleChanges(value) {
        const re = /^(?:\d*\.\d{0,2}|\d+)$/;
        if (value === '' || re.test(value.replace(/,/g, '')))
        {
            props.onChange(value.replace(/,/g, ''));
        }
    }

    function handleFocus(e) {
        e.preventDefault();
        e.target.select()
    }

    return (
        <TextField
            {...props}
            value={_numberWithCommas(props.value)}
            onChange={(e) => handleChanges(e.target.value)}
            onFocus={(e) => handleFocus(e)}
            InputProps={{
                ...props.InputProps,
                startAdornment: <InputAdornment style={{color: 'gray' , fontWeight: 'normal'}} position="start" disableTypography>$</InputAdornment>,
            }}
        />
    )
}

export default USDInput;
