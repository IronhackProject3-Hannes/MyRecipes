import { useState } from "react";
//the service file is used to send (and get) the data to(from) the server
import service from "../services/image";

function AddImg() {
  const [imageUrl, setImageUrl] = useState("");

  // this method submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].files[0]);
    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target[0].files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        setImageUrl(response.secure_url);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <div>
      <h2>New thumb</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" />
        {imageUrl && <img src={imageUrl} style={{ height: "200px" }} />}

        <button type="submit">upload image</button>
      </form>
    </div>
  );
}

export default AddImg;
