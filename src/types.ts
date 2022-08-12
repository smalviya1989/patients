export interface Patients {
    address:       string;
    age:           number;
    city:          string;
    contact_no:    string;
    date_of_birth: string;
    gender:        string;
    name:          string;
    patient_id:    number;
    state:         string;
}
export interface InitialState{
    patients:Patients[]
    loading:boolean
    error:any
}
export interface DataPayload{
    payload:Patients
}
export interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
  }
  