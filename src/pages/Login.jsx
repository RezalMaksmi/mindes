import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Users } from "../data";
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
    <div className='h-screen w-full bg-slate-600 flex justify-center items-center flex-col gap-3'>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
