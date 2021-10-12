import React, { useState } from "react";
import "../index.css";
import image3 from "../Assest/Image/form.png";
export default function Contactform() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = user;
  const chahgehandle = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      subject.trim().length === 0 ||
      message.trim().length === 0
    ) {
      alert("please fill data")
    }
    else if (window.confirm("Submmited data, please confirm")) {
      const res = await fetch(
        "https://test-website-2e03b-default-rtdb.firebaseio.com/HomepageContactfrom.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );
      setuser({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div class="container-contact1 row ">
        <div class="contact1-pic js-tilt col-6" data-tilt>
          <img src={image3} alt="IMG" />
        </div>

        <form class="contact1-form validate-form col-6" method="post">
          <span class="contact1-form-title">Get in touch</span>

          <div class="wrap-input1 validate-input">
            <input
              class="input1"
              value={name}
              name="name"
              placeholder="Name"
              onChange={(e) => chahgehandle(e)}
            />
            <span class="shadow-input1"></span>
          </div>

          <div
            class="wrap-input1 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input1"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => chahgehandle(e)}
            />
            <span class="shadow-input1"></span>
          </div>

          <div
            class="wrap-input1 validate-input"
            data-validate="Subject is required"
          >
            <input
              class="input1"
              value={subject}
              name="subject"
              placeholder="Subject"
              onChange={(e) => chahgehandle(e)}
            />
            <span class="shadow-input1"></span>
          </div>

          <div
            class="wrap-input1 validate-input"
            data-validate="Message is required"
          >
            <input
              class="input1"
              value={message}
              placeholder="Message"
              name="message"
              onChange={(e) => chahgehandle(e)}
            />
            <span class="shadow-input1"></span>
          </div>

          <div class="container-contact1-form-btn">
            <button class="contact1-form-btn bg-dark" onClick={submit}>
              <span>
                Send Email
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
