import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Import the CSS file 


const Add = () => {
    const initialAwardState = {
        award_name: "", 
        category: "",
        recipient: "",
        year: "",
        description: ""
    };

    const [award, setAward] = useState(initialAwardState);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setAward({ ...award, [name]: value });
    };

    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/create", award);
            toast.success(response.data.msg, { position: "top-right" });
            navigate("/"); // Navigate to the homepage after success
        } catch (error) {
            console.error(error);
            toast.error("Failed to add the award. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <Link to="/">Back</Link>
            <h1>Add New Award</h1>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="award_name" className="form-label">Award Name</label>
                    <input 
                        type="text"
                        id="award_name"
                        name="award_name"
                        className="form-control"
                        value={award.award_name}
                        onChange={inputHandler}
                        placeholder="Award Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input 
                        type="text"
                        id="category"
                        name="category"
                        className="form-control"
                        value={award.category}
                        onChange={inputHandler}
                        placeholder="Category"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="recipient" className="form-label">Recipient</label>
                    <input 
                        type="text"
                        id="recipient"
                        name="recipient"
                        className="form-control"
                        value={award.recipient}
                        onChange={inputHandler}
                        placeholder="Recipient"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input 
                        type="number"
                        id="year"
                        name="year"
                        className="form-control"
                        value={award.year}
                        onChange={inputHandler}
                        placeholder="Year"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                        id="description"
                        name="description"
                        className="form-control"
                        value={award.description}
                        onChange={inputHandler}
                        placeholder="Description"
                        rows="4"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Add Award</button>
            </form>
        </div>
    );
};

export default Add;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

// const GetAwards = () => {
//   const [awards, setAwards] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/yella");
//         setAwards(response.data);
//       } catch (error) {
//         console.error("Error fetching awards:", error);
//         toast.error("Failed to fetch awards.");
//       }
//     };

//     fetchData();
//   }, []);

//   const deleteAward = async (awardId) => {
//     try {
//       const response = await axios.delete(`http://localhost:8000/api/delete/${awardId}`);
//       setAwards((prevAwards) => prevAwards.filter((award) => award._id !== awardId));
//       toast.success(response.data.msg, { position: 'top-right' });
//     } catch (error) {
//       console.error("Error deleting award:", error);
//       toast.error("Failed to delete award. Please try again.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Image Section */}
//         <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
//           <img
//             src="https://banner2.cleanpng.com/20180213/cow/av2w11ddq.webp"
//             alt="Person holding award"
//             className="img-fluid rounded-circle"
//             style={{ maxWidth: "70%" }}
//           />
//         </div>

//         {/* Awards Table Section */}
//         <div className="col-md-6">
//           <Link to="/add" className="btn btn-primary mb-3">Add New Award</Link>
//           <div className="table-responsive">
//             <table className="table table-bordered table-striped">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>S.No.</th>
//                   <th>Award Name</th>
//                   <th>Category</th>
//                   <th>Recipient</th>
//                   <th>Year</th>
//                   <th>Description</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {awards.length > 0 ? (
//                   awards.map((award, index) => (
//                     <tr key={award._id}>
//                       <td>{index + 1}</td>
//                       <td>{award.award_name}</td>
//                       <td>{award.category}</td>
//                       <td>{award.recipient}</td>
//                       <td>{award.year}</td>
//                       <td>{award.description}</td>
//                       <td className="text-center">
//                         <button 
//                           onClick={() => deleteAward(award._id)} 
//                           className="btn btn-danger btn-sm mr-2"
//                         >
//                           <i className="fa-solid fa-trash"></i> Delete
//                         </button>
//                         <Link 
//                           to={`/edit/${award._id}`} 
//                           className="btn btn-warning btn-sm"
//                         >
//                           <i className="fa-solid fa-pen-to-square"></i> Edit
//                         </Link>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="7" className="text-center">No awards available.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetAwards;

