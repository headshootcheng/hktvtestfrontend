import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const ProductTransit = () => {
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [locationOption, setLocationOption] = useState<string[]>([]);
  const [productOption, setProductOption] = useState<string[]>([]);
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");
  const [currentProduct, setProduct] = useState<string>("");
  const [currentQty, setQty] = useState<number>(0);

  const getOptions = async () => {
    const { data } = await axios.get("http://127.0.0.1:8080/provideOption", {});
    data.productList.map((result: any, index: number) => {
      productOption[index] = result.code;
    });

    data.locationList.map((result: any, index: number) => {
      locationOption[index] = result.name;
    });

    console.log(data);
  };

  useEffect(() => {
    getOptions();
  }, []);

  const handleQty = (input: number) => {
    if (input < 0) {
      setQty(0);
    } else {
      setQty(input);
    }
  };

  const SubmitTransit = async (event: any) => {
    if (fromLocation === "" || toLocation === "" || currentProduct === "") {
      setError(true);
      setMessage("Cannot be Empty!!!");
    } else {
      const { data } = await axios.post("http://127.0.0.1:8080/manageStorage", {
        productId: currentProduct,
        fromLocation: fromLocation,
        toLocation: toLocation,
        qty: currentQty,
      });
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
      <span>Product Transit</span>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputLabel>ProductID</InputLabel>
          <TextField
            select
            style={{ marginLeft: 5, width: 120 }}
            value={currentProduct}
            onChange={(event) => setProduct(event.target.value)}
          >
            {productOption.map((option, index) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>

        <TextField
          style={{ marginTop: 5 }}
          label="Qty"
          placeholder="Enter the quantity"
          type="number"
          value={currentQty}
          onChange={(event) => handleQty(parseInt(event.target.value))}
        />

        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputLabel>From Location</InputLabel>
          <TextField
            select
            style={{ marginLeft: 5, width: 120 }}
            value={fromLocation}
            onChange={(event) => setFromLocation(event.target.value)}
          >
            {locationOption.map((option, index) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>

        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputLabel>To Location</InputLabel>
          <TextField
            select
            style={{ marginLeft: 5, width: 120 }}
            value={toLocation}
            onChange={(event) => setToLocation(event.target.value)}
          >
            {locationOption.map((option, index) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={SubmitTransit}
          style={{ width: 200, marginTop: 20 }}
        >
          Transit
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

export default ProductTransit;
