import {Outlet,Link,NavLink} from 'react-router-dom';

const  Tab1 = () => {

    return (
        <>
            <h1 style={{color : 'blue'}}>Tab1 page</h1>
            <Outlet/>
        </>
    );
}
 
export default Tab1 ;