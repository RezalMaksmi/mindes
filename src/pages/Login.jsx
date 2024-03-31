import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Users } from "../data";
import { Input } from '../components';
import Images from '../assets/img/Images';
import { BiKey, BiUserCircle } from 'react-icons/bi';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const getUserDataFromLocalStorage = () => {
        const user = localStorage.getItem("userData"); 
        return user ? JSON.parse(user) : {};
      };
      const { token, role } = getUserDataFromLocalStorage();


    const handleLogin = () => {
        // Data dummy untuk autentikasi
        const users = [
          { email:'rezal@gmail.com', username: 'rezal nur syaifudin', password: 'user123', role: 'user', token : 'akmsdnfydtaja3kjeq8d9' },
          { email:'rusana@gmail.com', username: 'admin', password: 'admin123', role: 'admin', token : 'hahghshghgshabvhbhsaj' }
        ];
    
        // Cek apakah data pengguna sesuai dengan data dummy
        const user = Users.find(user => user.username === username || user.email === username && user.password === password);
    
        if (user) {
          // Autentikasi berhasil
          setError('');
            const token = user.token;
            const name = user.username;
            const role = user.role;
            const email = user.email;
            const userData = { token, name, role, email };
          // Simpan informasi login ke local storage atau state aplikasi
          localStorage.setItem("userData", JSON.stringify(userData));
          // Redirect pengguna ke halaman dashboard atau halaman lain yang sesuai dengan peran (role) pengguna
          navigate(token ? "/dashboard" : "/login");
        } else {
          // Autentikasi gagal
          setError('Username or password is incorrect');
        }
      };
  return (
    // <div className='h-screen w-full bg-slate-600 flex justify-center items-center flex-col gap-3'>
        
        
    //     <div className="container">
    //         <div className="max-w-[700px]">
    //             <h2>Login</h2>
    //             <div className='flex flex-col gap-3 w-full'>
    //                 <label htmlFor="email " className='font-semibold text-xl'>Email</label>
    //                 <Input 
    //                     type="email"
    //                     placeholder="Isi username/email dengan benar"
    //                     onChange={(e) => setUsername(e.target.value)}
    //                     value={username} />
    //             </div>
    //             <div>
    //                 <input
    //                 type="password"
    //                 placeholder="Password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 />
    //             </div>
    //             {error && <p style={{ color: 'red' }}>{error}</p>}
    //             {/* <input type="button" /> */}
    //             <button onClick={handleLogin}>Login</button>
    //         </div>
    //     </div>

      
       
    // </div>



    <div className="w-full h-screen  flex justify-center ">
    <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full">
   
        <div className="flex flex-col bg-[#fff] border-2 bg-opacity-50 rounded-[14px] px-[46px] py-[46px] max-w-[660px] w-full">
         <h1 className='text-center w-full text-2xl font-bold'>Login</h1>
          <br />
          <div  className="w-full d-flex justify-center items-center">
            <div className='flex flex-col gap-3 w-full'>
                <label htmlFor="email " className='font-semibold text-base'>Email</label>
                <Input 
                placeholder="Enter Your Email"
                onChange={(e) => setUsername(e.target.value)}
                name="email"
                value={username}
                type="text"
                typeInput="InputWithIcon"
                icon={<BiUserCircle className='text-2xl'/>}
                />
                <p className="text-red-500">{error.email}</p>
            </div>
           
            <div className='flex flex-col gap-3 w-full'>
                <label htmlFor="email " className='font-semibold text-base'>Password</label>
                <Input
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                typeInput="InputWithIcon"
                icon={<BiKey className='text-2xl'/>}

                
                />
            </div>
             {error && <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>}
            <br />
            
            <button className="px-5 py-2 text-xl bg-[#E26848] text-white rounded-lg flex items-center justify-center "
                onClick={handleLogin}>
                Log in
            </button>
          </div>
        </div>
        <div className=" w-full h-[700px] relative z-0">
          <Images type="vektor1" className="absolute h-[100%] right-0 "/>
        </div>
        </div>
    </div>
  )
}

export default Login
