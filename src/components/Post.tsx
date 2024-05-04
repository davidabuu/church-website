import React from "react";

class ImageUploader extends React.Component {
  handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // Get the uploaded file

    if (file) {
      const formData = new FormData();

      formData.append("image", file);
      console.log("FormData:", formData);
    }
  };

  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.handleFileUpload}
        />
      </div>
    );
  }
}

export default ImageUploader;
