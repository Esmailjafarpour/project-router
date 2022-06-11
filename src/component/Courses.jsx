import {Outlet,Link,NavLink} from 'react-router-dom';
const courses = () => {

    return ( 
        // <>
        //     <h1>Courses page</h1>
        //     <Link to='/Courses/Tab1'>Tab1</Link> |
        //     <Link to='/Courses/Tab2'>Tab2</Link>
        //     <Outlet/>
        // </>
        <>
            <h1>Courses page</h1>

            <NavLink
                style={({isActive})=>{
                    return{color : isActive ? "red" : "black"}
                }}to='/Courses/Tab1'>
                    Tab1
            </NavLink >

            |

            <NavLink 
                style={({isActive})=>{
                    return{color : isActive ? "red" : "black"}
                }} to='/Courses/Tab2'>
                    Tab2
            </NavLink >

            <Outlet/>

        </>
     );
}
 
export default courses;