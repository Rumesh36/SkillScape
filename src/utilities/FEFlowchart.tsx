import React from 'react';
import ReactFlow, { Background, Controls,type Node,type Edge, } from 'reactflow'
import 'reactflow/dist/style.css';

interface FlowProps{
  nodes:Node[];
  edges:Edge[];
  height?:string;
  width?:string;
}

const FEFlowchart:React.FC<FlowProps> = ({nodes,edges,height="600px",width="100%"}) => {


  return (
    <div className='md:pt-15'
     style={{width,height}}>
 
        <ReactFlow 
           nodes={nodes}
           edges={edges}
           fitView
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