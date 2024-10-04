// // import React, { useState } from "react";
// import { userProfileDefaultData } from "../Utils/Constants";
// import "../resources/css/profile.css";
// // import  Button  from '@mui/material/Button';
// // import PublishIcon from '@mui/icons-material/Publish';

// export default function Profile() {
//   // const profileData =  userProfileDefaultData ;
//   // const tempProfileData = profileData;

//   // const changeProfileData = (event) => {
//   //   setProfileData({ ...tempProfileData });
//   //   event.preventDefault();
//   // };

//   // const handleImageChange = (event) => {
//   //   const file = event.target.files[0];
//   //   console.log(file);
//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onloadend = () => {
//   //       setProfileData((prevData) => ({ ...prevData, Photo: reader.result }));
//   //     };
//   //     reader.readAsDataURL(file);
//   //   }
//   // };

//   // const updateProfile = (event, name) => {
//   //   const value = event.target.value;
//   //   switch (name) {
//   //     case "date":
//   //       setProfileData((prevData) => ({ ...prevData, DOB: value }));
//   //       break;
//   //     case "email":
//   //       tempProfileData["EmailID"] = value;
//   //       break;
//   //     case "number":
//   //       tempProfileData["PhoneNo"] = value;
//   //       break;

//   //     case "describe":
//   //       tempProfileData["Description"] = value;
//   //       break;

//   //     case "university":
//   //       tempProfileData["University"] = value;
//   //       break;

//   //     case "name":
//   //       tempProfileData["Name"] = value;
//   //       break;

//   //     case "address":
//   //       tempProfileData["Address"] = value;
//   //       break;

//   //     case "photo":
//   //       handleImageChange(event);
//   //       break;

//   //     default:
//   //       break;
//   //   }
//   // };

//   return (
//     <div className="ProfileContainer">
//       <div className="ProfileData">
//         <div className="ProfileHeader">
//           <div className="ProfilePicDiv">
//             <img
//               className="profilePic"
//               src={profileData["Photo"]}
//               alt="profile img"
//             />
//           </div>
//           <h1 className="userName">{profileData["Name"]}</h1>
//           <div className="BioData">
//             <p className="userData">
//               <b>UserName :</b> {profileData["UserName"]}
//             </p>

//             <p className="userData">
//               <b>DOB :</b> {profileData["DOB"]}
//             </p>

//             <p className="userData">
//               <b>Email :</b> {profileData["EmailID"]}
//             </p>

//             <p className="userData">
//               <b>Number :</b> {profileData["PhoneNo"]}
//             </p>

//             <p className="userData">
//               <b>University :</b> {profileData["University"]}
//             </p>

//             <p className="userData">
//               <b>Address :</b> {profileData["Address"]}
//             </p>

//             <p className="userData">
//               <b>Description :</b> {profileData["Description"]}
//             </p>
//           </div>
//         </div>
//         {/* <div className="ProfileBody">
//           <div className="form">
//             <div className="inputDiv">
//               <p className="Tag">Name</p>
//               <input
//                 className="profileInput"
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 onChange={(event) => updateProfile(event, "name")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">DOB</p>
//               <input
//                 className="profileInput"
//                 type="date"
//                 name="date"
//                 onChange={(event) => updateProfile(event, "date")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">Email</p>
//               <input
//                 className="profileInput"
//                 placeholder="Enter Email"
//                 type="email"
//                 name="email"
//                 onChange={(event) => updateProfile(event, "email")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">Phone Number</p>
//               <input
//                 className="profileInput"
//                 placeholder="Enter number"
//                 type="number"
//                 name="number"
//                 onChange={(event) => updateProfile(event, "number")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">University Name</p>
//               <input
//                 className="profileInput"
//                 placeholder="University"
//                 type="text"
//                 name="university"
//                 onChange={(event) => updateProfile(event, "university")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">Address</p>
//               <input
//                 className="profileInput"
//                 placeholder="Your location"
//                 type="text"
//                 name="adddress"
//                 onChange={(event) => updateProfile(event, "address")}
//               />
//             </div>

//             <div className="inputDiv">
//               <p className="Tag">Description</p>
//               <input
//                 className="profileInput"
//                 placeholder="Describe urself"
//                 type="text"
//                 name="describe"
//                 onChange={(event) => updateProfile(event, "describe")}
//               />
//             </div>

//             <div className="inputFileDiv">
//               <p className="Tag">Photo</p>
//               <div className="FileInputDiv">
//                 <input
//                   className="profilePicInput"
//                   type="file"
//                   name="photo"
//                   onChange={(event) => updateProfile(event, "photo")}
//                 />
//                 <button onClick={changeProfileData} className="ProxyBtn">
//                   Upload
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="ProfileFooter">
//             <Button variant="contained" size="small">
//               Submit
//             </Button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }
