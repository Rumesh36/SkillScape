import FaqCard from "../Components/FaqCard";
import FEFlowchart from "../utilities/FEFlowchart"
import {type Node,type Edge } from 'reactflow';


 const initialNodes:Node[] =[
    {
      id:"1",
      position:{x:300,y:0},
      data:{label:"HTML"},
      
      style: {
      background: '#E34F26',       
      color: 'white',
      border: '2px solid #fb923c', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
      
    },
     {
      id:"2",
      position:{x:300,y:100},
      data:{label:"CSS"},

      style: {
      background: '#1572B6',       
      color: 'white',
      border: '2px solid #G7DF1C', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },

    },
     {
      id:"3",
      position:{x:300,y:200},
      data:{label:"Java Script"},

      style: {
      background: '#F7DF1E',       
      color: 'black',
      border: '2px solid #G7DF1C', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
    },
     {
      id:"4",
      position:{x:100,y:300},
      data:{label:"React"},
      style: {
      background: '#61DAFB',       
      color: 'white',
      border: '2px solid #G7DF1C', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
    },
     {
      id:"5",
      position:{x:300,y:300},
      data:{label:"Vue"},

      style: {
      background: '#42B883',       
      color: 'white',
      border: '2px solid #G7DF1C', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
    },
    {
      id:"6",
      position:{x:500,y:300},
      data:{label:"angular"},

      style: {
      background: '#DD0031',       
      color: 'white',
      border: '2px solid #G7DF1C', 
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
    },
  ];

  const initialEdges:Edge[]=[
    {
      id:"1-2",
      source:"1",
      target:"2",
      label:" Style and layout of HTML elements",
      style: { stroke: '#1572B6', strokeWidth: 2 },
      labelStyle: { fill: '#1572B6', fontSize: 12, fontWeight: 'bold' },
      
    },
    {
      id:"2-3",
      source:"2",
      target:"3",
      
       label:"Adds interactivity and dynamic behavior",
       style: { stroke: '#1572B6', strokeWidth: 2 },
      labelStyle: { fill: '#F7DF1E', fontSize: 12, fontWeight: 'bold' },
      
    },
    {
      id:"3-4",
      source:"3",
      target:"4",
     label:" Best for Reusable ",
       style: { stroke: '#1572B6', strokeWidth: 2 },
       labelStyle: { fill: '#61DAFB', fontSize: 10, fontWeight: 'bold' },
       
    },
    {
      id:"3-5",
      source:"3",
      target:"5",
      label:" Best for Elegant",
       style: { stroke: '#1572B6', strokeWidth: 2 },
       labelStyle: { fill: '#42B883', fontSize: 10, fontWeight: 'bold' },
           
    },
    {
      id:"3-6",
      source:"3",
      target:"6",
      label:": Full-featured",    
     style: { stroke: '#1572B6', strokeWidth: 2 },
      labelStyle: { fill: '#DD0031', fontSize: 10, fontWeight: 'bold' },

    },
  ]

const Frontend = () => {

  
 
  return (
    <>
      
      
    <FEFlowchart 
        
        nodes={initialNodes}
        edges={initialEdges}

    />
    {/* faqs */}
    
    <div className="pb-10">
  
      <FaqCard   
        question="What is Frontend Development?"
        answer="Frontend development is the process of building the visual and 
        interactive parts of a website or web application that users see in their browser. It includes creating layouts to arrange content, buttons for user actions, and navigation menus to move between pages. Developers also add animations for smooth interactions and build forms for user input like login or sign-up. A key part of frontend is making the design responsive, so the website looks and works well on mobile, tablet, and desktop devices. In short, 
        frontend brings the user interface to life and makes the web usable."
      />

      <FaqCard
         question="What Do You Need to Learn for Frontend?"
         answer="tart with HTML, where you learn basic tags, forms, 
         tables, and semantic elements. Then move to CSS to understand selectors, 
         the box model, Flexbox, Grid, media queries, and simple animations. Learn JavaScript for logic and interactivity, including variables, functions, loops, DOM manipulation, events, and modern ES6+ features like arrow functions and async/await. Focus on responsive design using a mobile-first approach, Flexbox, Grid, and media queries. Learn Git and GitHub for version control and collaboration. Then explore React.js, where you’ll work with JSX, components, props, state, hooks, and routing. For faster styling, use Tailwind CSS or Bootstrap. Learn tools like npm, Vite, Prettier, and ESLint to manage and format your projects.
          Finally, deploy your site using Netlify, Vercel, or GitHub Pages."
      />

<FaqCard
  question="Here are some Free Resources that might help you out!"
  answer={
    <p>
      🌐 <a href="https://www.freecodecamp.org/" target="_blank" className="text-blue-600 underline">freeCodeCamp</a><br />
      📘 <a href="https://developer.mozilla.org/" target="_blank" className="text-blue-600 underline">MDN Web Docs</a><br />
      📗 <a href="https://www.w3schools.com/" target="_blank" className="text-blue-600 underline">W3Schools</a><br />
      💬 <a href="https://stackoverflow.com/questions/tagged/frontend" target="_blank" className="text-blue-600 underline">Stack Overflow (Frontend)</a>
    </p>
  }
/>
    </div>
    
    </>
  )
}

export default Frontend