import React, { useState, useRef } from "react";
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
export const Login = (props) => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const submit = (key) => {
    console.log(email,password)
     fetch("http://localhost:3000/posts?email=" +email+'&password='+password).then((response) => {
      response.json().then((result) => {
      console.log(result)
     {
       !result==="" ? console.log("result agya ") : console.log("result nahi aya ") 
     }

      });
    });
    // localStorage.setItem("login", JSON.stringify(result));
  };

  const usestyle = makeStyles({
    formwidth: {
      width: "50%",
      margin: "5% 0 0 25%",
      // width: "30%",
      // margin: "15% 0 0 35%",
      "& > *": {
        marginTop: "30px",
      },
    },
  });
  const classes = usestyle();
  return (
    <>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="user" onChange={(e) => setemail(e.target.value)} />
          {/* {<Input type="text" ref={emailInputref} />} */}
        </FormControl>
        <FormControl>
          <InputLabel>password</InputLabel>
          {/* <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordchahgehandle}
          /> */}
          {/* <Input type="password" name="password" ref={passwordInputref} /> */}
          <Input name="user" onChange={(e) => setpassword(e.target.value)} />
        </FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
          onClick={submit}
        >
          Log In
        </Button>
        <Link to="/add" className="text-center text-primary">Create a Account ? Sign Up</Link>
      </FormGroup>
    </>
  );
};
