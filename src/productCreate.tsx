import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCreation = () => {
  const [file, setFile] = useState<any>({});

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
      "http://127.0.0.1:8080/uploadProduct",
      csv
    );
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
      <span>Product Creation</span>
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
        <input
          onClick={SubmitFile}
          value="Upload"
          style={{ marginTop: 20, height: 50, width: 200 }}
        />
      </form>
    </div>
  );
};

export default ProductCreation;
