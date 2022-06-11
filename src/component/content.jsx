import {useParams} from 'react-router-dom';
const Content = () => {

    const{id} = useParams();

    return ( <h1>url params is {id}</h1> );
}
 
export default Content;