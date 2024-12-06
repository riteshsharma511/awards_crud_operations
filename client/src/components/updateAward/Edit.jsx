// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import "bootstrap@5.3.3/dist/css/bootstrap.min.css"; // Ensure you have the relevant CSS file for styling

// const Edit = () => {
//   // Initial state for an award
//   const initialAward = {
//     award_name: "",
//     category: "",
//     recipient: "",
//     year: "",
//     description: ""
//   };

//   const { id } = useParams(); // Retrieve the award ID from the URL
//   const navigate = useNavigate();
//   const [award, setAward] = useState(initialAward);

//   // Handle input changes
//   const inputChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setAward({ ...award, [name]: value });
//   };

//   // Fetch the award data on component mount
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/getone/${id}`)
//       .then((response) => {
//         setAward(response.data); // Populate form with award data
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   // Handle form submission
//   const submitForm = async (e) => {
//     e.preventDefault();
//     await axios
//       .put(`http://localhost:8000/api/changemaadu/${id}`, award)
//       .then((response) => {
//         toast.success(response.data.msg, { position: "top-right" });
//         navigate("/"); // Navigate back to the homepage
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("Failed to update the award. Please try again.");
//       });
//   };

//   return (
//     <div className="form-container">
//       <Link to="/">Back</Link>
//       <h3>Update Award</h3>
//       <form className="form" onSubmit={submitForm}>
//         <div className="inputGroup">
//           <label htmlFor="award_name">Award Name</label>
//           <input
//             type="text"
//             value={award.award_name}
//             onChange={inputChangeHandler}
//             id="award_name"
//             name="award_name"
//             autoComplete="off"
//             placeholder="Award Name"
//           />
//         </div>
//         <div className="inputGroup">
//           <label htmlFor="category">Category</label>
//           <input
//             type="text"
//             value={award.category}
//             onChange={inputChangeHandler}
//             id="category"
//             name="category"
//             autoComplete="off"
//             placeholder="Category"
//           />
//         </div>
//         <div className="inputGroup">
//           <label htmlFor="recipient">Recipient</label>
//           <input
//             type="text"
//             value={award.recipient}
//             onChange={inputChangeHandler}
//             id="recipient"
//             name="recipient"
//             autoComplete="off"
//             placeholder="Recipient"
//           />
//         </div>
//         <div className="inputGroup">
//           <label htmlFor="year">Year</label>
//           <input
//             type="number"
//             value={award.year}
//             onChange={inputChangeHandler}
//             id="year"
//             name="year"
//             autoComplete="off"
//             placeholder="Year"
//           />
//         </div>
//         <div className="inputGroup">
//           <label htmlFor="description">Description</label>
//           <textarea
//             value={award.description}
//             onChange={inputChangeHandler}
//             id="description"
//             name="description"
//             autoComplete="off"
//             placeholder="Description"
//             rows="4"
//           />
//         </div>
//         <div className="inputGroup">
//           <button type="submit">UPDATE AWARD</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Edit;



import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

const Edit = () => {
  const initialAward = {
    award_name: "",
    category: "",
    recipient: "",
    year: "",
    description: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [award, setAward] = useState(initialAward);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setAward({ ...award, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setAward(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/changemaadu/${id}`, award)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update the award. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6">
          <Link to="/" className="btn btn-secondary mb-3">Back</Link>
          <h3 className="mb-4">Update Award</h3>
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="award_name" className="form-label">Award Name</label>
              <input
                type="text"
                value={award.award_name}
                onChange={inputChangeHandler}
                id="award_name"
                name="award_name"
                className="form-control"
                placeholder="Award Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <input
                type="text"
                value={award.category}
                onChange={inputChangeHandler}
                id="category"
                name="category"
                className="form-control"
                placeholder="Category"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recipient" className="form-label">Recipient</label>
              <input
                type="text"
                value={award.recipient}
                onChange={inputChangeHandler}
                id="recipient"
                name="recipient"
                className="form-control"
                placeholder="Recipient"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">Year</label>
              <input
                type="number"
                value={award.year}
                onChange={inputChangeHandler}
                id="year"
                name="year"
                className="form-control"
                placeholder="Year"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                value={award.description}
                onChange={inputChangeHandler}
                id="description"
                name="description"
                className="form-control"
                placeholder="Description"
                rows="4"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">UPDATE AWARD</button>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://img.freepik.com/premium-vector/awards-ceremony-winners-losers-cartoon-banner_82574-3989.jpg" // Replace with actual image of a person holding an award
            alt="Person holding award"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Edit;
