import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getPost } from '../redux/features/patientSlice';





const Patients = () => {
  
  const [patient_id, setPatient_id] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
 


  const handlefetchdata = (e: any) => {
    e.preventDefault();
    if (!patient_id) {
      window.alert('please inter patients id')
    } else {
      dispatch(getPost([patient_id]));
      setPatient_id("");

    }


  }

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor='patient id'>Search Patient By Id</label><br></br>
          <input type='number' placeholder='Patient Id' value={patient_id} onChange={(e: any) => setPatient_id(e.target.value)} />
        </fieldset>
        <button type='submit' onClick={handlefetchdata}>Get Patient</button>
        <button type='button' onClick={() => navigate('/addpatient')}>Add Patient</button>
        

      </form>
      



    </div>
    
  )
}

export default Patients;
