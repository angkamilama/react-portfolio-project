import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import {useState } from 'react';
import React from 'react';
// import ProjectLink from './ProjectLink.js';

 function JavascriptProject() {
     let projects = [
         {
             name: 'GITHUB Fetch API',
             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero doloremque, voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
             link: 'https://codepen.io/angkamilama/pen/bGKbWWz',
             number: 0
         },
         {
             name: 'Clock',
             description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis libero et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
             link: 'https://codepen.io/angkamilama/pen/BaPWKBM',
             number: 1
         },
         {
             name: 'Wikipedia Search',
             description: 'voluptatum, excepturi et eos incidunt repudiandae saepe quo dolorem harum commodi ut non laborum alias architecto. Eius, iure provident inventore et eum dolores corrupti consequuntur, repellat omnis laboriosam ad?',
             link: 'https://codepen.io/angkamilama/pen/eYKVodL',
             number: 2
         },
         {
             name: 'Calculator',
             description: 'calculate tjhe number',
             link: 'calculator link',
             number: 3
         },
         {
             name: 'To do app',
             description: 'list of things to do',
             link: 'to do app link',
             number: 4
         },
         {
             name: 'Movie Ticket app',
             description: 'select movie and calculate movie ticket',
             link: 'https://codepen.io/angkamilama/pen/RwBBKYX',
             number: 5
         }
     
     ];

    const [index, setIndex] = useState(0);
    
    const showNextProject = (nextIndex) => {    
        if (nextIndex <= 0) {
          setIndex( projects.length - 1 ); 
      } else if (nextIndex >= projects.length ){
          setIndex(0);
      } else {
          setIndex(nextIndex);
      } 
    };

    return (
        <div>
            <div className="line"></div>
            <div className="project-container">
                <h1></h1>
                <section className="project">
                    <div className="btn-box">
                        <button className="btn-prev" onClick={() => {
                            showNextProject(index - 1);
                        }} >
                            <FaArrowLeft className="fa-solid fa-arrow-left"/>
                        </button>
                    </div>
                    <div className="project-box">
                        <h2 class="project-title">{projects[index].name}</h2>
                        <p class="project-description">{projects[index].description}</p>
                        <p>project number {index + 1} of {projects.length}</p>  
                    </div>
                    <div className="btn-box">
                        <button className="btn-next" onClick={() => {
                            console.log(index);
                            showNextProject(index + 1);
                            
                        }
}>                            <FaArrowRight className="fa-solid fa-arrow-right"/>
                        </button>
                    </div>
                </section>    
            </div>
        </div>
        );
 };

 export default JavascriptProject;