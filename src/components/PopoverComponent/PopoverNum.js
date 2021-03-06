import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Fab, Grid } from '@material-ui/core';
import { Back, Clock, Keybtn } from "../../Icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    borderRadius: 6,
    border: "1px solid #33333370",
    fontSize: 20
  },
  btnOne: {
    borderTopLeftRadius: 6
  },
  btnThree: {
    borderTopRightRadius: 6
  },
  button: {
    fontSize: 30,
  },
  btnDone:{
    fontSize: 30,
    background: "#7ce7ac",
    width: "100%",
    borderRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius:6
  },
  btnDoneGrid: {
    border: "1px solid #33333370",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius:6
  },
  item: {
    fontFamily: "MS Gothic !important",
    border:"1px solid #33333370"
  },
  // arrow: {
  //   top: -11,
  //   left: "50%",
  //   marginLeft: -11,
  //   borderTopWidth: 0,
  //   borderBottomColor: "#999",
  //   borderBottomColor: "rgba(0,0,0,.25)",
  //   position: "absolute",
  //   display: "block",
  //   width: 0,
  //   height: 10,
  //   borderColor: "transparent",
  //   borderStyle: "solid",
  //   borderWidth: 11,
  //   '&::after': {
  //       top: 1,
  //       marginLeft: -10,
  //       content: " ",
  //       borderTopWidth: 0,
  //       borderBottomColor: "#333",
  //       borderWidth: 10,
  //       position: "absolute",
  //       display: "block",
  //       width: 0,
  //       height: 0,
  //       borderColor: "transparent",
  //       borderStyle: "solid",
  //   },
// }
}));

export default function PopoverBtn(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    {/* <div className={classes.arrow}></div> */}

      <Grid container direction={"column"}>
        <Grid container direction={"row"}>
          <Grid item xs={4} className={classes.item + " " + classes.btnOne + " flex justify-content"}>
            <Button className={classes.button} id="1" onClick={(e) => props.onClick(e.target.innerText)}>1</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="2" onClick={(e) => props.onClick(e.target.innerText)}>2</Button>
          </Grid>
          <Grid item xs={4} className={classes.item + " " + classes.btnThree + " flex justify-content"}>
            <Button className={classes.button} name="3" onClick={(e) => props.onClick(e.target.innerText)}>3</Button>
          </Grid>
        </Grid>
        <Grid container direction={"row"}>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="4" onClick={(e) => props.onClick(e.target.innerText)}>4</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="5" onClick={(e) => props.onClick(e.target.innerText)}>5</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="6" onClick={(e) => props.onClick(e.target.innerText)}>6</Button>
          </Grid>
        </Grid>
        <Grid container direction={"row"}>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="7" onClick={(e) => props.onClick(e.target.innerText)}>7</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="8" onClick={(e) => props.onClick(e.target.innerText)}>8</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="9" onClick={(e) => props.onClick(e.target.innerText)}>9</Button>
          </Grid>
        </Grid>

        <Grid container dir={"row"}>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="." onClick={(e) => props.onClick(e.target.innerText)}>.</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Button className={classes.button} name="0" onClick={(e) => props.onClick(e.target.innerText)}>0</Button>
          </Grid>
          <Grid item xs={4} className={classes.item+" flex justify-content"}>
            <Fab className={classes.button} onClick={() => props.onClick('=')}>
              <Back fill={'black'} />
            </Fab>
          </Grid>
        </Grid>
        <Grid container dir={"row"} className={classes.btnDoneGrid}>
          <Button color="primary" variant="contained" className={classes.btnDone} name="0" onClick={props.handleConfirm}>DONE</Button>
        </Grid>
      </Grid>
    </div>
  );
}
