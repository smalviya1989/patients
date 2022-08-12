import React from 'react';
import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useAppSelector } from '../redux/hooks';
import { getPost } from '../redux/patientSlice';





const Patients = () => {
  
  const [patient_id, setPatient_id] = useState(""); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useAppSelector(state=>state.patient.patients)
  console.log(data);
 
  



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
        <button type='button' onClick={()=>navigate('/addpatient')} >Add Patient</button>
        

      </form>
      <table border={1}>
          <tbody>
            <tr aria-colspan={2}>
              <td>Patient Id</td><br />
              <td>Patient Name</td><br />
              <td>Age</td><br />
              <td>Gender</td><br />
              <td>Address</td><br />
              <td>City</td><br />
              <td>State</td><br />
              <td>Date Of Birth</td><br />
              <td>Contact No</td><br />
              {/* <td>Delete Patient data</td><br /> */}

            </tr>
            {
              data.map((item, i) =>
                <tr key={i}>
                  <td>{item.patient_id}</td><br />
                  <td>{item.name}</td><br />
                  <td>{item.age}</td><br />
                  <td>{item.gender}</td><br />
                  <td>{item.address}</td><br />
                  <td>{item.city}</td><br />
                  <td>{item.state}</td><br />
                  <td>{item.date_of_birth}</td><br />
                  <td>{item.contact_no}</td><br />
                  {/* <td><button type='button' onClick={() => Delete_patient(item.patient_id)}>Delete</button></td> */}


                </tr>






              )

            }
          </tbody>
        </table>
      



    </div>
    
  )
}

export default Patients;
