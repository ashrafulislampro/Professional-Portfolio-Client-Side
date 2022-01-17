import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: '1000 !important',
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const ReviewsModal = () => {
  
  const [imageUrl, setImageUrl] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newReview = {
      name: data.name,
      title: data.title,
      date: data.date,
      description: data.description,
      imageUrl: imageUrl,
    };

    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((success) => {
        if(success){
          alert("Your Reviews Added Successfully");
          closeModal();
        }
      });
    console.log(newReview);
  };
  const uploadImage = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "10a8465fdab8030470d70e1b37e0de7d");
    imageData.append("image", event.target.files[0]);
    console.log(imageData);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => setImageUrl(res.data.data.display_url))
      .catch((error) => console.log(error));
  };
 
  const openModal = () => {
    setIsOpen(true);
  };
  let subtitle;
  const afterOpenModal=()=> {
    subtitle.style.color = '#f00';
  }

  const closeModal=()=> {
    setIsOpen(false);
  }
  
  return (
    <div className="comment_section">
    <button  onClick={openModal}>Comment</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p className="text-secondary text-center pb-4">
          {new Date().toDateString()}
        </p>
        <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            {...register("name", { required: true })}
          />

          <br />
          <input
            className="form-control"
            type="title"
            name="name"
            placeholder="Your Title"
            required
            {...register("title", { required: true })}
          />

          <br />
          <input
            className="form-control"
            type="date"
            name="date"
            placeholder="Your date"
            required
            {...register("date", { required: true })}
          />
          <br />
          <textarea
            className="form-control"
            type="message"
            name="description"
            rows="5"
            placeholder="Enter Your Comment"
            required
            {...register("description", { required: true })}
          ></textarea>
          <br />
          <div className="d-flex justify-content-between">
            <div className="upload_image">
              <button className="upload_btn">Upload Image</button>
              <input onClick={uploadImage} type="file" name="file" required />
            </div>
            <input id="form-submit" type="submit" value="Send" />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ReviewsModal;
