import React, {useState} from "react";
import uploadImage from "../../../assets/images/admin/upload-icon.png";
// import imageCompression from "browser-image-compression";


type ImageUploaderProps = {
  setImageFile: (file: any) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = (props) => {
  const {setImageFile} = props;
  const [fileUrl, setFileUrl] = useState<string | null>(null);


  //compress image before uploading
  const compressImage = async (imageFile: any) => {
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 640,
      useWebWorker: true
    }
    try {
      let compressedImageFile = "";
      // const compressedImageFile = await imageCompression(imageFile, options);
      // console.log('compressedImageFile instanceof Blob', compressedImageFile instanceof Blob); // true
      // console.log(`compressedFile size ${compressedImageFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      return compressedImageFile;
    } catch (error) {
      console.log('File compression error:', error);
    }
  }

  const onFileChange = async (e: any) => {
    const file = e.target.files[0];
    setFileUrl(URL.createObjectURL(file));
    compressImage(file).then((compressedImage) => {
      console.log('file', compressedImage);
      setImageFile(compressedImage);
    });
  };

  return (
    <div className="m-0 p-0 image-uploader">
      <div className="upload-preview py-2 mb-2">
        <img src={fileUrl ? fileUrl : uploadImage} className="profile-image p-2"/>
        {!fileUrl || fileUrl !== uploadImage && <div className="upload-controls text-right p-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"
               className="delete text-danger"
               onClick={() => {
                 setImageFile(null);
                 setFileUrl(uploadImage);
               }}>
            <polyline points="3 6 5 6 21 6"/>
            <path
              d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            <line x1="10" y1="11" x2="10" y2="17"/>
            <line x1="14" y1="11" x2="14" y2="17"/>
          </svg>
        </div>}
      </div>
      <input type="file" className="input"
             accept="image/png, image/jpeg, image/webp"
             onChange={onFileChange}/>
    </div>
  );
}

export default ImageUploader;