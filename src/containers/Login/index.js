import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Animate from "../../components/animate";
import clsx from 'clsx';
import LoginForm from "../../components/LoginForm";
const useStyles = makeStyles(theme =>({
    root: {
        color: theme.palette.primary.lightgray
    }
}));

function Login() {
    const classes = useStyles();
    return(
        <div className={clsx(classes.root, 'flex flex-col justify-content page')}>
            <div className={'flex justify-content pt-60'}>
                <Animate animation="transition.expandIn">
                    <img className="w-128 mb-32" src="/assets/images/svg/System-logo.svg" alt="logo" />
                </Animate>
            </div>
            <div className={'flex justify-content pt-50 pb-30'}>
                <Animate animation="transition.expandIn">
                    <p className={'m-0 p-0 fs-16 f-ls-19'}>Enter your PIN</p>
                </Animate>
            </div>
            <div className={'flex justify-content pb-60'}>
                <Animate animation="transition.expandIn">
                    <LoginForm/>
                </Animate>
            </div>
            <div className={'flex justify-content pt-65'}>
                <Animate animation="transition.expandIn">
                    <p className={'m-0 p-0 fs-12 f-ls-19'}>Tag Station - V 1.0.1</p>
                </Animate>
            </div>

        </div>
    )
}

export default Login;
