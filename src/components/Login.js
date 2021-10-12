
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link,Redirect } from "react-router-dom";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
export const Login = (props) => {

const [searchData, setsearchData] = useState(null)

  const search =  (key) => {
   fetch("http://localhost:3000/posts?q=" +key).then((response) => {
    response.json().then((result) => {
     setsearchData(result)
    
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
          {/* <Input name="user" onChange={(e) => setemail(e.target.value)} /> */}
          { <Input name="user" onChange={(event)=>search(event.target.value)} /> }
   
        </FormControl>
       <div>
         {
           searchData ? 
           <div>
             {
               searchData.map((item)=>
               <div>{item.email}</div>
               )
             }
           </div>
           : alert("please check")
         }
       </div>
     
      
        <FormControl>
        
          <InputLabel>password</InputLabel>
          {/* <Input
            type="password"
            name="password"
            value={password}
            onChange={passwordchahgehandle}
          /> */}
            <Input
            type="password"
            name="password"
        
            onChange={(event)=>search(event.target.value)}
          />
  
        </FormControl>
        <Button
          variant="contained"
          style={{ backgroundColor: "#343a40", color: "white" }}
          // onClick={submit}
        >
          Log In
        </Button>
        <Link to="/add">Create a Account ? Sign Up</Link>

      </FormGroup>
    
    </>
  );

  };