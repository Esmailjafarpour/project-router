import {Link, useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return ( 
        <>  
            <button 
                onClick={()=>{
                     navigate('/Dashbord',{state : "mohammad"});
            }}>
                dashbord
            </button>
            <h1>Home page</h1>
            <Link to='/About'>about</Link> |
            <Link to='/Courses'>courses</Link>
        </>
     );
}
 
export default Home;