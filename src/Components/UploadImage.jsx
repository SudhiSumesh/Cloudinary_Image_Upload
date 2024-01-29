import React, { useState } from "react";
import axios from "axios";
export default function UploadImage() {
  const preset_key = "fvzmkzfo";
  const cloudName = "dr7frtxsk";
  const [image, setImage] = useState();
  //
  const HandleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        console.log(res);
        setImage(res.data.secure_url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="file" name="image" onChange={HandleFile}></input>
      <br />
      <br />
      <img src={image} alt="" style={{ width: "300px" }} />
    </div>
  );
}
