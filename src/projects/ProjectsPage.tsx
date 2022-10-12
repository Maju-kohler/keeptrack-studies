import React from 'react'; //esse import não é mais necessário para versões do React ^17 (no caso estou usando 18)
import { MOCK_PROJECTS } from './MockProjects';

//o unico lugar que exige essa expressão import é no arquivo de entrada da aplicação, ou seja, o index.js

function ProjectsPage(){
    return (
    <>
    <h1>Projects</h1>
    <pre>{JSON.stringify(MOCK_PROJECTS,null,'')}</pre>
    </>
    );
}

export default ProjectsPage;