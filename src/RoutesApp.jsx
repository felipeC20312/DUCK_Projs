import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import ProjectsLibrary from './pages/Library';
import Project01 from './pages/Project-01/index';
import Project02 from './pages/Project-02/index';

export default function RoutesApp() {
  const BackdropAction = ({ children }) => {
    return children;
  };

  return (
    <BackdropAction>
      <Routes>
        <Route exact path='/project-01' element={<Project01 />} />
        <Route exact path='/project-02' element={<Project02 />} />
        <Route exact path='/' element={<ProjectsLibrary />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </BackdropAction>
  );
}
