import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProjectDetailsPage(props) {
  const API_URL = "http://localhost:5005";

  const [project, setProject] = useState(null);

  const projectId = props.match.params.id;

  const getProject = () => {
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        console.log(response.data);
        setProject(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <Link to={`/projects/edit/${project._id}`}>
            <button>Edit this project</button>
          </Link>
        </>
      )}
      {/* Edit the project */}
    </div>
  );
}
