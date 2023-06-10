// import React, { useState } from 'react';
// import axios from 'axios';
// import './FileUpload.css';
// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [scores, setScores] = useState([]);

//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const onUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('https://adec-14-142-183-234.ngrok-free.app/analytics', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('File uploaded successfully', response);

//       // Update the scores state with the response data
//       setScores(response.data);
//     } catch (error) {
//       console.error('Error uploading file', error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".csv" onChange={onFileChange} />
//       <button onClick={onUpload}>Upload</button>

//       {/* Display the scores */}
//       {scores.length > 0 && (
//         <div>
//           <h2>Scores:</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Unique ID</th>
//                 <th>Need Score</th>
//                 <th>Reasons</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scores.map((score, index) => (
//                 <tr key={index}>
//                   <td>{score.Unique_ID}</td>
//                   <td>{score.needScore}</td>
//                   <td>
//                   <div className="reasons-container">
//   {score.reasons ? (
//     <>
//       <ul className="reasons-hidden">
//         {score.reasons.map((reason, index) => (
//           <li key={index}>{reason}</li>
//         ))}
//       </ul>
//       <ul className="reasons-hover">
//         {score.reasons.map((reason, index) => (
//           <li key={index}>{reason}</li>
//         ))}
//       </ul>
//     </>
//   ) : null}
// </div>

//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;

//====================================================================================================
// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './FileUpload.css';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [scores, setScores] = useState([]);
//   const tableRef = useRef(null);

//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const onUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('https://adec-14-142-183-234.ngrok-free.app/analytics', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('File uploaded successfully', response);

//       // Update the scores state with the response data
//       setScores(response.data);
//     } catch (error) {
//       console.error('Error uploading file', error);
//     }
//   };

//   const exportToPDF = () => {
//     const doc = new jsPDF();
//     const tableData = [];
//     const tableHeaders = ['Unique ID', 'Need Score', 'Reasons'];

//     scores.forEach((score) => {
//       const rowData = [
//         score.Unique_ID,
//         score.needScore,
//         score.reasons ? score.reasons.join(', ') : ''
//       ];
//       tableData.push(rowData);
//     });

//     doc.autoTable({
//       head: [tableHeaders],
//       body: tableData,
//     });

//     doc.save('scores.pdf');
//   };

//   return (
//     <div className="container">
//       <input type="file" accept=".csv" onChange={onFileChange} />
//       <button onClick={onUpload}>Upload</button>
//       <button onClick={exportToPDF}>Export</button>

//       {/* Display the scores */}
//       {scores.length > 0 && (
//         <div ref={tableRef}>
//           <h2>Scores:</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Unique ID</th>
//                 <th>Need Score</th>
//                 <th>Reasons</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scores.map((score, index) => (
//                 <tr key={index}>
//                   <td>{score.Unique_ID}</td>
//                   <td>{score.needScore}</td>
//                   <td>
//                     <div className="reasons-container">
//                       {score.reasons ? (
//                         <>
//                           <ul className="reasons-hidden">
//                             {score.reasons.map((reason, index) => (
//                               <li key={index}>{reason}</li>
//                             ))}
//                           </ul>
//                           <ul className="reasons-hover">
//                             {score.reasons.map((reason, index) => (
//                               <li key={index}>{reason}</li>
//                             ))}
//                           </ul>
//                         </>
//                       ) : null}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import './FileUpload.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [scores, setScores] = useState([]);
  const tableRef = useRef(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://adec-14-142-183-234.ngrok-free.app/analytics', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully', response);

      // Update the scores state with the response data
      setScores(response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableData = [];
    const tableHeaders = ['Unique ID', 'Need Score', 'Reasons'];

    scores.forEach((score) => {
      const rowData = [
        score.Unique_ID,
        score.needScore,
        score.reasons ? score.reasons.join(', ') : ''
      ];
      tableData.push(rowData);
    });

    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
    });

    doc.save('scores.pdf');
  };

  return (
    <div className="container">
      <input type="file" accept=".csv" onChange={onFileChange} />
      <div className="button-container">
        <button onClick={onUpload}>Upload</button>
        {scores.length > 0 && <button onClick={exportToPDF}>Export</button>}
      </div>

      {/* Display the scores */}
      {scores.length > 0 && (
        <div ref={tableRef}>
          <h2>Scores:</h2>
          <table>
            <thead>
              <tr>
                <th>Unique ID</th>
                <th>Need Score</th>
                <th>Reasons</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.Unique_ID}</td>
                  <td>{score.needScore}</td>
                  <td>
                    <div className="reasons-container">
                      {score.reasons ? (
                        <>
                          <ul className="reasons-hidden">
                            {score.reasons.map((reason, index) => (
                              <li key={index}>{reason}</li>
                            ))}
                          </ul>
                          <ul className="reasons-hover">
                            {score.reasons.map((reason, index) => (
                              <li key={index}>{reason}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
