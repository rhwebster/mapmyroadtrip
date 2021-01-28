import React, {useState} from "react";

export default function Test() {

const [profPic, setProfPic] = useState('');

const onSubmit = (e) => {
    e.preventDefault()
console.log(profPic);
// Write endpoint that will take file image data and upload to aws
}

// Create thunk to updata user profile


// const updateFile = (e) => {  
//           const file = e.target.files[0];   
//                if (file) setVidPic(file);       
//                 const fileReader = new FileReader();     
//                    if (file) {          
//                          fileReader.readAsDataURL(file);        }      
//                            fileReader.onloadend = () => {   
//                                         setImagePreview(fileReader.result);        }    };


const updateProfPic = (e) => {
    setProfPic(e.target.files[0])
}
  return (

    <div>
      <form onSubmit={onSubmit} action="/" method="POST" enctype="multipart/form-data">
        <label for="user_file">Upload Your File</label>
        <br></br>
        <input type="file" name="user_file" />
        <br></br>
        <button onChange= {updateProfPic} type="submit">Upload</button>
      </form>
    </div>
  );
}
