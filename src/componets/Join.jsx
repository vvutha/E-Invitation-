// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import axios from 'axios'; // Install axios: npm install axios

// const MyComponent = () => {
//     const [guestCount, setGuestCount] = useState(0);
//     const [submitted, setSubmitted] = useState(false);

//     const handleGuestChange = (e) => {
//         setGuestCount(e.target.value);
//     };

//     const handleSubmit = async () => {
//         if (guestCount > 0) {
//             try {
//                 // Send the guest count to the backend
//                 const response = await axios.post('http://localhost:3000/send-guest-count', {
//                     guestCount: guestCount
//                 });

//                 console.log(response.data); // Log the response from the server

//                 setSubmitted(true);
//                 console.log(`Number of guests: ${guestCount}`);
//                 openGoogleMaps();
//             } catch (error) {
//                 console.error('Error sending guest count:', error);
//                 alert('Failed to submit guest count. Please try again.');
//             }
//         } else {
//             alert("Please enter a valid number of guests.");
//         }
//     };

//     const openGoogleMaps = () => {
//         window.open("https://www.google.com/maps", "_blank");
//     };

//     return (
//         <div className="text-center">
//             <Form.Group controlId="guestCount">
//                 <Form.Label>Number of Guests</Form.Label>
//                 <Form.Control
//                     type="number"
//                     value={guestCount}
//                     onChange={handleGuestChange}
//                     placeholder="Enter number of guests"
//                 />
//             </Form.Group>

//             <Button
//                 variant="primary"
//                 size="lg"
//                 className="text1 fw-bold"
//                 style={{ display: 'block', margin: '0 auto' }}
//                 onClick={handleSubmit}
//             >
//                 បើកផែនទី
//             </Button>

//             {submitted && <p>Guests submitted: {guestCount}</p>}
//         </div>
//     );
// };

// export default MyComponent;