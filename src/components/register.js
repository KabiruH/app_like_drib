// import { useState } from 'react';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleEmailChange(event) {
//     setEmail(event.target.value);
//   }

//   function handlePasswordChange(event) {
//     setPassword(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Send the email and password to your server here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} />
//       </label>
//       <br />
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;