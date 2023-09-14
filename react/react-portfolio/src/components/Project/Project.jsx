import './style.css';
import projects from '../helpers/projectList';
import { NavLink } from 'react-router-dom';


const Project = () => 
    projects.map(({title,img,id}) =>{

        return ( 
            <NavLink key={id} to={`/projects/${id}`}>   
                <li className="project"> 
                    <img src={img} alt={title} className="project__img" width='800'/>
                    <h3 className="project__title">{title}</h3>
                </li>
            </NavLink>
              
          
        );
    })
 
export default Project;