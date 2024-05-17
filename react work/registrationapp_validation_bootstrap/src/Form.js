import React,{useEffect, useState} from 'react'


function Form() {
    // const data= {name:"",email:"",password:""};
    // const [inputData,setInputData]=useState(data);
    // const [inputError,setInputError]=useState();
    // const [isSubmit,setIsSubmit]= useState(false);
    // useEffect(()=>{
    //     if(Object.keys(inputError).length === 0){
    //         console.log(inputData);
    //     }
    //     console.log("Registered")
    // },[inputError]);
    // function handleData(e){
    //     setInputData({...inputData, [name]:value});
    //     console.log(inputData)
    // }
    // function handleSubmit(e){
    //     e.preventDefault();
    //     setInputError(validate(inputData));
    //     setIsSubmit(true);
        
    // }
    // const validate=(inputData)=>{
    //     const errors={}
    //     // const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     if(!inputData.name){
    //         errors.name="username is required";
    //     }
    //     if(!inputData.email){
    //         errors.email="email is required";
    //     }
    //     if(!inputData.password){
    //         errors.password="password is required";
    //     }
    //     return errors;
    // }

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let validationErrors = {};

    // Validate email
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Validation passed, perform login logic or API call

      // Reset the form
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      // Validation failed, set the errors state
      setErrors(validationErrors);
    }
  };
  return (
//     <div>
//         <div class="container-sm mt-4">
//   <form class="container" onSubmit={handleSubmit}>
//     <div>
//         <h2>Registration form with validation using bootstrap</h2>
//     </div>

//   <div class="mb-3">
//     <label  class="form-label">Username</label>
//     <input type="text" class="form-control" placeholder='Enter your name ' name='name' value={inputData.name} onChange={handleData} />
   
//   </div>

//   <div class="mb-3">
//     <label  class="form-label">Email address</label>
//     <input type="email" class="form-control" placeholder='enter your email address' name='email' value={inputData.email} onChange={handleData} />
   
//   </div>
//   <div class="mb-3">
//     <label class="form-label">Password</label>
//     <input type="password" class="form-control" placeholder='enter your password ' name='password' value={inputData.password} onChange={handleData} />
//   </div>
  
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
// </div>
//     </div>

<form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form