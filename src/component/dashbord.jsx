import {useLocation} from 'react-router-dom';
const Dashbord = () => {

    const location = useLocation();

    return ( <h1>Dashbord page / Hi {location.state}</h1> );
}
 
export default Dashbord;