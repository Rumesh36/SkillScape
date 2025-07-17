import React from 'react';
import ReactFlow, { Background, Controls,type Node,type Edge, } from 'reactflow'
import 'reactflow/dist/style.css';

interface FlowProps{
  nodes:Node[];
  edges:Edge[];
  height?:string;
  width?:string;
}

const FEFlowchart:React.FC<FlowProps> = ({nodes,edges,width="100%"}) => {


  return (
    <div className='md:pt-15 sm:pt-10 w-full '
     style={{width,height:"50vh" ,maxHeight:"600px"}}>
 
        <ReactFlow 
           nodes={nodes}
           edges={edges}
           fitView
           panOnDrag={false}
           nodesDraggable={false}
           zoomOnDoubleClick={false}
           zoomOnPinch={true}
           zoomOnScroll={false}
        >
         <Background
         color="#ccc"
          gap={16} 
           />
        <Controls
           showZoom
           showFitView  
        />
        </ReactFlow>

    </div>
  )
}

export default FEFlowchart