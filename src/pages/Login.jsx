import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Users } from "../data";
import { Input } from '../components';
import Images from '../assets/img/Images';
import { BiKey, BiRightArrowAlt, BiUserCircle } from 'react-icons/bi';
const Login = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAdmin, setPasswordAdmin] = useState('');
    const [openAdmin, setOpenAdmin] = useState(false);
    const [daftar, setDaftar] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
    
        // Cek apakah data pengguna sesuai dengan data dummy json
        const user = Users.find(user => user.kode === username && user.password === password && user.role === "user" && !username.includes('@'));
        const admin = Users.find(user => user.email === email && user.password === passwordAdmin && user.role === "admin" );
    
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

      const handleOpenLogin = () =>{
        setOpenAdmin(true)
        setError('')
        setDaftar(false)
      }
      const handleCloseLogin = () =>{
        setOpenAdmin(false)
        setError('')

      }
  return (
    <div className={`w-full min-h-screen h-auto flex justify-center flex-col overflow-hidden  `}>
    <div className={`container mx-auto flex flex-col-reverse lg:flex-row relative justify-between items-center lg:px-[70px] w-full h-full px-3`}>
    <div className={`card ${openAdmin ? 'front' : 'back'} ${daftar ? 'mt-32' : 'mt-0'} z-20 mt-6 flex flex-col bg-[#fff] bg-opacity-20 backdrop-blur-lg border-2 rounded-[14px] lg:px-[46px] px-3 py-[46px] max-w-[660px] w-full`}>
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
            
            <div className="flex flex-row w-full justify-between">
              <button className="px-5 py-2 text-xl bg-[#E26848] text-white rounded-lg flex items-center justify-center "
                  onClick={handleLogin}>
                  Masuk
              </button>
              <button className="px-5 py-2 gap-1 text-base  text-[#E26848] rounded-lg flex items-center justify-center "
                  onClick={handleOpenLogin}>
                  <span>Masuk Sebagai Admin</span> 
                  <BiRightArrowAlt className='text-xl'/>
              </button>
            </div>
            <br />
            Belum punya akun ? <span className='cursor-pointer text-[#E26848] ketentuan' >Ketentuan</span>
          </div>
          </>
    ) : (
          !daftar ? (
          <>
            <h1 className='text-center w-full text-2xl font-bold'>Login Admin Desa</h1>
            <br />
            <div  className="w-full d-flex justify-center items-center">
              <div className='flex flex-col gap-3 w-full'>
                  <label htmlFor="email " className='font-semibold text-base'>Email</label>
                  <Input 
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
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
                  onChange={(e) => setPasswordAdmin(e.target.value)}
                  name="password"
                  value={passwordAdmin}
                  type="password"
                  typeInput="InputWithIcon"
                  icon={<BiKey className='text-2xl'/>}
                  />
              </div>
              {error && <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>}
              <br />
              
              <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row w-full justify-between">
                <button className="px-5 py-2 text-xl bg-[#E26848] text-white rounded-lg flex items-center justify-center "
                    onClick={handleLogin}>
                    Masuk
                </button>
                <button className="px-5 py-2 gap-1 text-base  text-[#E26848] rounded-lg flex items-center justify-center "
                    onClick={handleCloseLogin}>
                    <span>Masuk Sebagai User</span> 
                    <BiRightArrowAlt className='text-xl'/>
                </button>
              </div>

              </div>
              <br />
              Belum Punya Akun ? <span className='cursor-pointer text-[#E26848] ' onClick={() => setDaftar(true)} >Daftar</span>
            </div>
          </>
          ) : (
            <>
            <h1 className='text-center w-full text-2xl font-bold'>Daftar Admin Desa</h1>
            <br />
            <div  className="w-full d-flex justify-center items-center">
              <div className='flex flex-col gap-3 w-full'>
                  <label htmlFor="email " className='font-semibold text-base'>Email</label>
                  <Input 
                  placeholder="Enter Your Email"
                  name="email"
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
                  name="password"
                  value={password}
                  type="password"
                  typeInput="InputWithIcon"
                  icon={<BiKey className='text-2xl'/>}
                  />
              </div>
              <div className='flex flex-col gap-3 w-full'>
                  <label htmlFor="email " className='font-semibold text-base'>Password</label>
                  <Input
                  placeholder="Enter Confirm Password"
                  name="password"
                  type="password"
                  typeInput="InputWithIcon"
                  icon={<BiKey className='text-2xl'/>}
                  />
              </div>
              {error && <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>}
              <br />
              
              <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row w-full justify-between">
                <button className="px-5 py-2 text-xl bg-[#E26848] text-white rounded-lg flex items-center justify-center "
                    onClick={handleLogin}>
                    Masuk
                </button>
                <button className="px-5 py-2 gap-1 text-base  text-[#E26848] rounded-lg flex items-center justify-center "
                    onClick={() => setOpenAdmin(false)}>
                    <span>Masuk Sebagai User</span> 
                    <BiRightArrowAlt className='text-xl'/>
                </button>
              </div>

              </div>
              <br />
              Sudah Punya Akun ? <span className='cursor-pointer text-[#E26848] ' onClick={() => setDaftar(false)} >Login</span>
            </div>
          </>
          )
        )
    }  
            </div>
            <div className={`w-full h-[700px] lg:relative z-0  absolute lg:bottom-0 lg:right-0 bottom-[-200px] right-[-40px]`}>
              <Images type="vektor1" className="absolute h-[100%] z-30"/>
            </div>
        </div>
    </div>
  )
}

export default Login
