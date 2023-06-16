import React from "react";
import { BadgeCheckIcon, ChipIcon,DocumentTextIcon } from "@heroicons/react/solid";

export default function ScrumDevProcess() {
  return (
<section id="ScrumDevProcess">

<div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DocumentTextIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Efficient Development with Jira <br /> Streamlining Processes and Collaboration
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Overall, Jira provides a comprehensive platform to manage the development process, 
          collaborate on tasks, track progress, and generate reports. 
          It supports agile methodologies like Scrum and Kanban, allowing teams to efficiently plan, 
          execute, and deliver software projects while leveraging features specific to user creation, 
          epics, columns, test coverage, CI/CD, and more.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "
            alt="Business analysis & Development Process"
            src="./scrum.jpeg"
          />
        </div>
        <br />
        <p className="mb-6 text-lg leading-relaxed text-justify  ">
        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">1. User Creation</h1> 
         - User stories related to user creation can be captured and tracked in Jira's issue tracker. <br /> 
         - Tasks can be assigned to team members, and progress can be monitored using Jira's Agile boards.   <br /> <br />
           
        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4" >2. Epics:</h1>
           
        - Jira allows the creation of epics, which can serve as a higher-level grouping for related user stories.  <br /> 
        - Epics can be used to track progress and provide a visual representation of the project's overall status.  <br />  
         
         
         <br />

        <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">3. Columns</h1> 

        - Jira's Agile boards, such as Kanban boards, allow the creation of custom columns to represent different stages of the development process.<br/>
        - Tasks can be moved across columns as they progress from "To Do" to "In Progress," "Testing," and finally "Done.".<br /><br />
        
       <h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">4. Test Coverage</h1>

- Test-related tasks and user stories can be created and associated with appropriate epics or user stories.<br />
- Test coverage metrics can be tracked and reported using Jira's reporting features or by integrating with testing tools.<br /><br />

<h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">5. CI/CD</h1>

- Jira can integrate with various CI/CD tools, allowing for seamless automation of build, testing, and deployment processes. <br /> 
- Jira can capture and track related tasks and issues, providing visibility into the CI/CD pipeline's progress.<br /><br />

<h1 className="sm:text-2xl text-1xl font-medium title-font text-white mb-4">6. Sprint Planning and Reviews</h1>

- Jira's Agile boards, backlogs, and user story tracking capabilities facilitate sprint planning and review meetings.<br />
- Teams can easily select and assign tasks for each sprint, track progress, and showcase completed work during sprint reviews.<br />

          </p>
        
    </div>
      
       
     
    </section>
  );
}
