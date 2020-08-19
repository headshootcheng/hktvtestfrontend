import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const AddtoLocation = () => {
  const [file, setFile] = useState<any>({});
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const ChangeFileName = (event: any) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const SubmitFile = async (event: any) => {
    event.preventDefault();
    console.log("file info:" + file);
    const csv = new FormData();
    csv.append("file", file);
    const { data } = await axios.post(
      "http://127.0.0.1:8080/manageProduct",
      csv
    );
    if (data.type === 1) {
      setSuccess(true);
    }

    if (data.type === 0) {
      setError(true);
    }
    setMessage(data.content);
    console.log(data);
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
      <span>Add Product to Location</span>
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
        }}
      >
        <input
          name="usericon"
          id="files"
          type="file"
          accept=".csv"
          onChange={ChangeFileName}
        />
        <br />

        <Button
          variant="contained"
          color="primary"
          onClick={SubmitFile}
          style={{ width: 200 }}
        >
          Upload
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

export default AddtoLocation;
