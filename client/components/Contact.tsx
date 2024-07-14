// import { useForm, SubmitHandler } from 'react-hook-form'
// import { useState } from 'react'
// import emailjs from '@emailjs/browser'

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm()
//   const [disabled, setDisabled] = useState(false);
//   const [alertInfo, setAlertInfo] = useState({
//     display: false,
//     message: '',
//     type: '',
//   });

//   // Function called on submit that uses emailjs to send email of valid contact form
//   const onSubmit = async (data: { name: string, email: string, subject: string, message: string }) => {
//     const { name, email, subject, message } = data
//     try {
//         // Disable form while processing submission
//       setDisabled(true);

//       const templateParams = {
//         name,
//         email,
//         subject,
//         message,
//       }

//       await emailjs.send(
//         process.env.REACT_APP_SERVICE_ID!,
//         process.env.REACT_APP_TEMPLATE_ID!,
//         templateParams,
//         process.env.REACT_APP_USER_ID!
//       );
//       alert('Email sent successfully!');
//       reset();
//     } catch (e) {
//       console.error('Failed to send email:', e);
//       alert('Failed to send email. Please try again later.');
// }
// };

//   // console.log('Name: ', name);
//   // console.log('Email: ', email);
//   // console.log('Subject: ', subject);
//   // console.log('Message: ', message);

//   return (
//     <div className="contact-form-container">
//       <h2>Contact Me</h2>
//       <h3>Thanks for checking out my portfolio, Feel free to send me a message!</h3>
//       <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             {...register('name', {
//               required: {
//                 value: true,
//                 message: 'Please enter your name',
//               },
//               maxLength: {
//                 value: 30,
//                 message: 'Please use 30 characters or less',
//               },
//             })}
//             className="form-control"
//             placeholder="Name"
//           />
//           {errors.name && (
//             <span className="errorMessage">{errors.name.message}</span>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             {...register('email', {
//               required: 'Please enter a valid email address',
//               pattern: {
//                 value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//                 message: 'Invalid email address',
//               },
//             })}
//             className="form-control"
//             placeholder="Email address"
//           />
//           {errors.email && (
//             <span className="errorMessage">{errors.email.message}</span>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             {...register('subject', {
//               required: {
//                 value: true,
//                 message: 'Please enter a subject',
//               },
//               maxLength: {
//                 value: 75,
//                 message: 'Subject cannot exceed 75 characters',
//               },
//             })}
//             className="form-control"
//             placeholder="Subject"
//           />
//           {errors.subject && (
//             <span className="errorMessage">{errors.subject.message}</span>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             rows={3}
//             {...register('message', {
//               required: 'Please enter a message',
//             })}
//             className="form-control"
//             placeholder="Message"
//           />
//           {errors.message && (
//             <span className="errorMessage">{errors.message.message}</span>
//           )}
//         </div>
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };


// export default Contact
// function toggleAlert(arg0: string, arg1: string) {
//     throw new Error('Function not implemented.');
// }

