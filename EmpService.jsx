import axios from'axios';
const emp_url='http://localhost:8081/getemp';
class EmpService{
   findall(){
return axios.get(emp_url);
    }
}
export default new EmpService();