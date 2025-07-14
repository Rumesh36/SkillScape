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
    
    
    </>
  )
}

export default Frontend