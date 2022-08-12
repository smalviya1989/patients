

import './App.css';
import Patients from './components/Patients';
import {Route,Routes} from 'react-router-dom';
import {IProps} from './types'
import Addpatient from './components/Addpatient';


function App() {
  
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Patients/>}/>
      <Route path="/addpatients" element={<Addpatient/>}/> */}
      <Route path="/" exact={true} component={Patients}/>
      <Route path='/addpatient' exact={true} component={Addpatient}/>
      </Routes>
      
    </div>
   
    
  );
}

export default App;
