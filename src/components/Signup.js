import React, { useState } from "react";
import "../index.css";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const usestyle = makeStyles({
  formwidth: {
    width: "30%",
    margin: "15% 0 0 35%",
    "& > *": {
      marginTop: "30px",
    },
  },
});
export default function Signup() {
  const [email, setemail] = useState("");
  const [passwrod, setpasswrod] = useState("");

  const chahgehandle = (e) => {};

  const classes = usestyle();

  const submit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={(e) => setemail(e.target.value)} />
        </FormControl>

        <FormControl>
          <InputLabel>password</InputLabel>
          <Input
            type="password"
            name="password"
            onChange={(e) => setemail(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
          onClick={submit}
        >
          Create Acccount ?
        </Button>
        <Link to={"/"}>Log In</Link>
      </FormGroup>
    </>
  );
}
