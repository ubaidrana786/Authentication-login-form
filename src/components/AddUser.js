import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const usestyle = makeStyles({
  formwidth: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});

export const AddUser = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    
  });


  const handlechange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  let history = useHistory();
  const handleSubmit = (event) => {
    
    event.preventDefault();

    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      response.json().then((result) => {
        history.push("/all");
      });
    });
  };

  const classes = usestyle();
  return (
    <div>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>

          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handlechange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handlechange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Password</InputLabel>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handlechange}
          />
        </FormControl>
       
        <Button
          onClick={handleSubmit}
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
        >
         Sign Up
        </Button>
        <Link to="./">Log In</Link>
      </FormGroup>
    </div>
  );
};
