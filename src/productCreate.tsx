import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCreation = () => {
  const [file, setFile] = useState<any>({});

  const ChangeFileName = (event: any) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  // submiticon = async (event) => {
  //   event.preventDefault();
  //   console.log("file info:" + this.state.file);
  //   const icon = new FormData();
  //   icon.append("file", this.state.file);
  //   const { data } = await axios.post(
  //     "http://127.0.0.1:5000/service/icon",
  //     icon,
  //     { headers: { Authorization: "Bearer " + Cookies.get("token") } }
  //   );
  //   if (data.msg == "success") {
  //     this.setState({ icon: "normal" });
  //     window.location.reload();
  //   }
  // };

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
          onChange={ChangeFileName}
        />
        <br />
        <input
          type="submit"
          value="Upload"
          style={{ marginTop: 20, height: 50, width: 200 }}
        />
      </form>
    </div>
  );
};

export default ProductCreation;
