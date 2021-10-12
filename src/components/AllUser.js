// import React, { Component } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   makeStyles
// } from "@material-ui/core";

//   // const usestyle = makeStyles({
//   //       table: {
//   //         width: "90%",
//   //         margin: "50px 0 0 50px",
//   //       },
//   //       thead: {
//   //         "& > *": {
//   //           marginTop: "200px",
//   //         },
//   //       },
//   //     });

// export default class AllUser extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       list: [],
//     };
//   }
//   componentDidMount() {
//     fetch("http://localhost:3000/posts").then((response) => {
//       response.json().then((result) => {
//           this.setState({ list: result })
//       })
//   })
//   }

//   render() {
//     // const classes = usestyle();
//   return (
//        <div>

//          { <Table >
//            <TableHead>
//              <TableRow>
//                <TableCell>Id</TableCell>
//                <TableCell>Name</TableCell>
//                <TableCell>Email</TableCell>
//                <TableCell>Address</TableCell>
//                <TableCell>Phone No :</TableCell>
//              </TableRow>
//            </TableHead>
//            <TableBody>
//              {this.state.list.map((user) => {
//                return (
//                  <TableRow>
//                    <TableCell>{user.id}</TableCell>
//                    <TableCell>{user.name}</TableCell>
//                    <TableCell>{user.email}</TableCell>
//                    <TableCell>{user.address}</TableCell>
//                    <TableCell>{user.phone}</TableCell>
//                  </TableRow>
//                );
//              })}
//            </TableBody>
//          </Table> }
//        </div>
//     );
//   }
// }

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function AllUser() {
  const [users, setusers] = useState([]);
  const getUsersFromApi = () => {
    fetch("http://localhost:3000/posts").then((response) => {
      response.json().then((result) => {
        setusers(result);
      });
    });
  };
  useEffect(getUsersFromApi, []);

  function Delete(id) {
    if (window.confirm("You are about to delete a post, please confirm")) {
      fetch("http://localhost:3000/posts/" + id, {
        method: "DELETE",
      }).then((response) => {
        response.json().then((result) => {
          getUsersFromApi();
          //window.location.reload();
        });
      });
    } else {
      return false;
    }
  }
  const usestyle = makeStyles({
    table: {
      width: "90%",
      margin: "50px 0 0 50px",
    },
    thead: {
      "& > *": {
        color: "white",
        fontSize: "20px",
      },
    },
  });
  const classes = usestyle();
  return (
    <div>
      <Table className={classes.table}>
        <TableHead className="bg-dark">
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>{user.phone}</TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => Delete(user.id)}
                  >
                    Dlete
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginLeft: "5px", backgroundColor: "#57b846" }}
                  >
                    <Link
                      style={{ color: "white", textDecoration: "none" }}
                      to={"/update/" + user.id}
                    >
                      {" "}
                      Edit
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
