import { useParams } from 'react-router-dom';

import BtnGitHub from '../components/BtnGitHub/BtnGitHub';
import projects from '../components/helpers/projectList';


const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id]

    return ( 
        <main className="section">
            
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.img} alt="project" className="project-details__cover" width='500px'/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHubLink && 
                    (<BtnGitHub link='http://github.com'/>)
                    }
                </div>
            </div>
         </main>
    )
}
 
export default ProjectPage;