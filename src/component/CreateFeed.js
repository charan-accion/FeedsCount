import { useState } from "react";
import FormInput from "./FormInput";
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const CreateFeed = () => {
  const [values, setValues] = useState({
    username: "",
    feedlocation:""
    
  });

  const inputs = [
    {
      id: 1,
      name: "feedname",
      type: "text",
      placeholder: "FeedName",
      errorMessage:
        "FeedName should be 3-16 characters and shouldn't include any special character!",
      label: "FeedName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    /*{
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },*/
    {
        id: 2,
        name: "feedlocation",
        type: "text",
        placeholder: "Feed Location",
        errorMessage:
          "Enter a valid Feed location",
        label: "Feed Location",
        //pattern: ``,
        required: true,
      },
      {
        id: 3,
        name: "username",
        type: "text",
        className:"userName",
        placeholder: "Username",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: false,
      },
    {
      id: 4,
      name: "password",
      type: "password",
      className:"password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: false,
    }
    /*{
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },*/
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const checkboxClicked = (e) => {
    if(e.target.checked){
      document.querySelector('.userName').required=true;
      document.querySelector('.password').required=true;
    }else{
      document.querySelector('.userName').required=false;
      document.querySelector('.password').required=false;
    }
  };

  return (
    <div className="form">
        <Card><Card.Body>
      <form onSubmit={handleSubmit}>
        <h1>Create Feed</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
          
        ))}
        <div>
        <input type="checkbox" value="checkbox" className="checkAuth" onClick={checkboxClicked}></input>
          <p className="Auth">is Authentication required?</p>
        </div>
        <Button>Submit</Button>
      </form>
      </Card.Body></Card>
    </div>
  );
};

export default CreateFeed;

