import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";

const AddNewLocation = () => {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const SubmitLocation = async (event: any) => {
    if (location === "") {
      setError(true);
      setMessage("Cannot be Empty!!!");
    } else {
      console.log(location);
      const { data } = await axios.post(
        "http://127.0.0.1:8080/addNewLocation",
        { data: location }
      );
      if (data.type === 1) {
        setSuccess(true);
      }

      if (data.type === 0) {
        setError(true);
      }

      setMessage(data.content);
      console.log(data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30,
      }}
    >
      <span>Add New Location</span>
      <form
        style={{
          marginTop: 10,
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 5,
          height: 300,
          width: 500,
          display: "flex",
          flexDirection: "column",
          paddingTop: 30,
          alignItems: "center",
        }}
      >
        <TextField
          label="Location Name"
          placeholder="Enter the name"
          onChange={(event) => setLocation(event.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={SubmitLocation}
          style={{ width: 200, marginTop: 20 }}
        >
          Add
        </Button>
        <br />
        {error ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "red",
            }}
          >
            <ErrorIcon />
            <span>{message}</span>
          </div>
        ) : null}
        {success ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "green",
            }}
          >
            <CheckCircleIcon />
            <span>{message}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default AddNewLocation;
