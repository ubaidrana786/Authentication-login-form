import React from "react";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";

import { useState } from "react";

const usestyle = makeStyles({
  formwidth: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});
export default function Update() {
  const { id } = useParams();
  let history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const { name, email, address, phone } = user;
  const oninputchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id).then((response) => {
      response.json().then((result) => {
        setuser(result);
      });
    });
  }, []);
  
  const update = () => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        history.push("/all");
      });
    });
    console.log("update");
  };
  const classes = usestyle();
  return (
    <div>
      <FormGroup className={classes.formwidth}>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input value={name} name="name" onChange={(e) => oninputchange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            value={email}
            name="email"
            onChange={(e) => oninputchange(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input
            value={address}
            name="address"
            onChange={(e) => oninputchange(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            value={phone}
            name="phone"
            onChange={(e) => oninputchange(e)}
          />
        </FormControl>
        <Button variant="contained" style={{backgroundColor:"#343a40",color:"white"}} onClick={update}>
          Update User
        </Button>
      </FormGroup>
    </div>
  );
}
