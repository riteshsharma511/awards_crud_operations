// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// // import './addAward/addAward.css';
// import "../addAward/addAward.css";
// import { Link } from 'react-router-dom';

// const GetAwards = () => {
//     const [awards, setAwards] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8000/api/yella");
//                 setAwards(response.data);
//             } catch (error) {
//                 console.error("Error fetching awards:", error);
//                 toast.error("Failed to fetch awards.");
//             }
//         };

//         fetchData();
//     }, []);

//     const deleteAward = async (awardId) => {
//     try {
//         const response = await axios.delete(`http://localhost:8000/api/delete/${awardId}`);
//         setAwards((prevAwards) => prevAwards.filter((award) => award._id !== awardId));
//         toast.success(response.data.msg, { position: 'top-right' });
//     } catch (error) {
//         console.error("Error deleting award:", error);
//         toast.error("Failed to delete award. Please try again.");
//     }
// };



//     return (
//         <div className='awardTable'>
//             <Link to="/add" className='addButton'>Add Award</Link>
//             <table border={1} cellPadding={10} cellSpacing={0}>
//                 <thead>
//                     <tr>
//                         <th>S.No.</th>
//                         <th>Award Name</th>
//                         <th>Category</th>
//                         <th>Recipient</th>
//                         <th>Year</th>
//                         <th>Description</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {awards.length > 0 ? (
//                         awards.map((award, index) => (
//                             <tr key={award._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{award.award_name}</td>
//                                 <td>{award.category}</td>
//                                 <td>{award.recipient}</td>
//                                 <td>{award.year}</td>
//                                 <td>{award.description}</td>
//                                 <td className='actionButtons'>
//                                     <button onClick={() => deleteAward(award._id)}>
//                                         <i className="fa-solid fa-trash"></i>
//                                     </button>
//                                     <Link to={`/edit/${award._id}`}>
//                                         <i className="fa-solid fa-pen-to-square"></i>
//                                     </Link>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="7">No awards available.</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default GetAwards;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

const GetAwards = () => {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/yella");
        setAwards(response.data);
      } catch (error) {
        console.error("Error fetching awards:", error);
        toast.error("Failed to fetch awards.");
      }
    };

    fetchData();
  }, []);

  const deleteAward = async (awardId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/${awardId}`);
      setAwards((prevAwards) => prevAwards.filter((award) => award._id !== awardId));
      toast.success(response.data.msg, { position: 'top-right' });
    } catch (error) {
      console.error("Error deleting award:", error);
      toast.error("Failed to delete award. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Image Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4">
          <img
            src="https://www.shutterstock.com/image-vector/business-man-champion-golden-winner-600nw-2162210231.jpg"
            alt="Person holding award"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "70%" }}
          />
        </div>

        {/* Awards Table Section */}
        <div className="col-md-6">
          <Link to="/add" className="btn btn-primary mb-3">Add New Award</Link>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th>S.No.</th>
                  <th>Award Name</th>
                  <th>Category</th>
                  <th>Recipient</th>
                  <th>Year</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {awards.length > 0 ? (
                  awards.map((award, index) => (
                    <tr key={award._id}>
                      <td>{index + 1}</td>
                      <td>{award.award_name}</td>
                      <td>{award.category}</td>
                      <td>{award.recipient}</td>
                      <td>{award.year}</td>
                      <td>{award.description}</td>
                      <td className="text-center">
                        <button 
                          onClick={() => deleteAward(award._id)} 
                          className="btn btn-danger btn-sm mr-2"
                        >
                          <i className="fa-solid fa-trash"></i> Delete
                        </button>
                        <Link 
                          to={`/edit/${award._id}`} 
                          className="btn btn-warning btn-sm"
                        >
                          <i className="fa-solid fa-pen-to-square"></i> Edit
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">No awards available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAwards;
