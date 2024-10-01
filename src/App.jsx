import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[name,setName] = useState('');
  const[role, setRole] = useState('');
  const[email, setEmail] = useState('');

  const[users, setUsers] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newUser = { name, role, email };
    setUsers([...users, newUser]);

    setName('');
    setRole('');
    setEmail('');


  }

  return (
    <>
      <div className='bg-white flex flex-row w-screen h-screen'>
        <div className='flex flex-col w-1/2 h-screen justify-center items-center'>
          <div className='text-black flex flex-row m-5'>
            <p className=' mr-3'>Name:</p>
            <input type="text" className='bg-gray-300 border' value= {name} onChange={(e) => setName(e.target.value)} required></input>
          </div>
          <div className='text-black flex flex-row m-5'>
            <p className=' mr-3'>Role:</p>
            <input type="text" className='bg-gray-300 p-0' value={role} onChange={(e) => setRole(e.target.value)} required></input>
          </div>
          <div className='text-black flex flex-row m-5'>
            <p className=' mr-3'>Email:</p>
            <input type="text" className='bg-gray-300 border' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <button className='bg-pink-400' type='submit' onClick={handleSubmit} >Save Data</button>
        </div>
        <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
          <h2 className='text-black text-xl m-10'>Users</h2>
          <ul>
            {users.map((user, index) => (
              <li key={index} className='mb-2 text-black'>
               <strong>{user.name}</strong> : {user.role}, {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
