import React from 'react'
 import { useState } from 'react'

const Addpatient = () => {
  const[name,setName] = useState([])
  const[age,setAge] = useState([])
  const[gender,setGender] = useState([])
  const[address,setAddress] = useState([])
  const[city,setCity] = useState([])
  const[state,setState] = useState([])
  const [date_of_birth, setDate_Of_Birth] = useState([])
  const [contact_no, setContact_No] = useState([])


  const savepatient =(e:any)=>{
    

  }

  

  
  return (
    <div>
    <h1>addpatient</h1>
    <form>
      <fieldset>
      <label htmlFor='name'>Name</label><br></br>
      <input type='text' placeholder='patient name' value={name} onChange={(e:any)=>setName(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='age'>Age</label><br></br>
      <input type='text' placeholder='age' value={age} onChange={(e:any)=>setAge(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='gender'>Gender</label><br></br>
      <input type='text' placeholder='gender' value={gender} onChange={(e:any)=>setGender(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='address'>Address</label><br></br>
      <input type='text' placeholder='address' value={address} onChange={(e:any)=>setAddress(e.target.value)}/>
      </fieldset>

      <fieldset>
      <label htmlFor='city'>City</label><br></br>
      <input type='text' placeholder='city' value={city} onChange={(e:any)=>setCity(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='state'>State</label><br></br>
      <input type='text' placeholder='state' value={state} onChange={(e:any)=>setState(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='date_of_birth'>Date Of Birth</label><br></br>
      <input type='text' placeholder='date of birth' value={date_of_birth} onChange={(e:any)=>setDate_Of_Birth(e.target.value)} />
      </fieldset>
      <fieldset>
      <label htmlFor='contact_no'>Contact Number</label><br></br>
      <input type='text' placeholder='contact no' value={contact_no} onChange={(e:any)=>setContact_No(e.target.value)} />
      </fieldset>
      <button type='submit' onClick={savepatient}>Save</button>


      


   
    </form>

      
    </div>
  )
}

export default Addpatient

