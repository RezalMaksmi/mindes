import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Users } from "../data";
import { Input } from '../components';
import Images from '../assets/img/Images';
import { BiKey, BiUserCircle } from 'react-icons/bi';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [openAdmin, setOpenAdmin] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
    
        // Cek apakah data pengguna sesuai dengan data dummy json
        const user = Users.find(user => user.kode === username && user.password === password && user.role === "user");
        const admin = Users.find(user => user.email === username && user.password === password && user.role === "admin");
    
        if (user) {
          // Autentikasi berhasil
          setError('');
            const token = user.token;
            const name = user.username;
            const role = "user";
            const email = user.email;
            const userData = { token, name, role, email };
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate(token ? "/" : "/login");
          window.location.reload(false);
        }if (admin) {
            // Autentikasi berhasil
            setError('');
              const token = admin.token;
              const name = admin.username;
              const role = "admin";
              const email = admin.email;
              const userData = { token, name, role, email };
            localStorage.setItem("userData", JSON.stringify(userData));
            navigate(token ? "/" : "/login");
            window.location.reload(false);
          } else {
          // Autentikasi gagal
          setError('Username atau password salah');
        }
      };

     
  return (
    <div className="w-full h-screen  flex justify-center ">
    <div className={` container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:px-[70px] w-full`}>
    <div className={`card ${openAdmin ? 'front' : 'back'} mt-6 flex flex-col bg-[#fff] border-2 bg-opacity-50 rounded-[14px] px-[46px] py-[46px] max-w-[660px] w-full`}>
   {
    !openAdmin ? (
       <>
         <h1 className='text-center w-full text-2xl font-bold'>Login User</h1>
          <br />
          <div  className="w-full d-flex justify-center items-center">
            <div className='flex flex-col gap-3 w-full'>
                <label htmlFor="email " className='font-semibold text-base'>Kode</label>
                <Input 
                placeholder="Masukkan Kode unik dari desa"
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
                placeholder="Masukkan Password"
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
            <br />
            Login sebagai admin ? <span className='cursor-pointer' onClick={() => setOpenAdmin(true)}>Log In</span>
          </div>
          </>
    ) : (
        <>
         <h1 className='text-center w-full text-2xl font-bold'>Login Admin Desa</h1>
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
            <br />
            Login sebagai User ? <span className='cursor-pointer' onClick={() => setOpenAdmin(false)}>Log In</span>
          </div>
          </>
        )
    }  
        </div>
            <div className=" w-full h-[700px] relative z-0">
                <Images type="vektor1" className="absolute h-[100%] right-0 "/>
            </div>
        </div>
    </div>
  )
}

export default Login
