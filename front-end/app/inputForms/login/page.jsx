"use client"
import { useState } from 'react'

export default function LogPage() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const tickets = [
    {
      label: "Email: ",
      type: "email",
      name: "email",
    },
    {
      label: "Password:",
      type: "password",
      name: "password",
    },
  ];

  const handleClick = () => {
    console.log('Value 1:', value1);
  }

  return (
    <form action="" id="formOne" method="get" className="formContainer bg-bl">
      {tickets.map(({ label, type, name }) => (
        <>
          <labe className="lb">{label}</labe>
          <br />
          <input type={type} name={name} id={name} className="txt " value={value1} onChange={e => setValue1(e.target.value)} />
        </>
      ))
        
      }

      <button className="btn bg-rd" onClick={handleClick}>
        Get In
      </button>
    </form>
  );
}
