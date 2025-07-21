import React, { useState, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  type Node,
  type Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FlowProps {
  nodes: Node[];
  edges: Edge[];
  width?: string;
  height?: string;
}

interface NodeDetails {
  [key: string]: {
    description: string;
    resources?: { title: string; url: string }[];
  };
}

// ✅ Add descriptions for more nodes here
const nodeDescriptions: NodeDetails = {
  HTML: {
    description: "HTML is the structure of web pages. Learn tags, forms, tables, and semantic elements.",
    resources: [
      { title: "MDN - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "freeCodeCamp HTML", url: "https://www.freecodecamp.org/learn/" },
    ],
  },
  CSS: {
    description: "CSS styles HTML. Learn selectors, Flexbox, Grid, media queries, and animations.",
    resources: [
      { title: "MDN - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },
  JavaScript: {
    description: "JavaScript adds interactivity. Learn variables, loops, functions, events, and ES6+ features.",
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/" },
      { title: "freeCodeCamp JS", url: "https://www.freecodecamp.org/learn/" },
    ],
  },
  React: {
    description: "React is a frontend library. Learn components, props, state, hooks, and routing.",
    resources: [
      { title: "React Docs", url: "https://react.dev/" },
    ],
  },
  Nodejs: {
    description: "Node.js lets you run JavaScript on the server. Learn modules, FS, and HTTP server basics.",
    resources: [
      { title: "Node.js Docs", url: "https://nodejs.org/en/docs" },
    ],
  },
  Expressjs: {
    description: "Express is a Node.js web framework. Learn routes, middleware, and APIs.",
    resources: [
      { title: "Express Docs", url: "https://expressjs.com/" },
    ],
  },
  MongoDB: {
    description: "MongoDB is a NoSQL database. Learn CRUD, collections, and Mongoose.",
    resources: [
      { title: "MongoDB University", url: "https://university.mongodb.com/" },
    ],
  },
  Deployment: {
    description: "Learn how to deploy apps using platforms like Vercel, Netlify, or Railway.",
    resources: [
      { title: "Deploy on Vercel", url: "https://vercel.com/docs" },
    ],
  },
};

const RoadmapFlowchart: React.FC<FlowProps> = ({ nodes, edges, width = "100%", height = "50vh" }) => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("completedNodes");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const handleComplete = (nodeId: string) => {
    const updated = [...new Set([...completed, nodeId])];
    setCompleted(updated);
    localStorage.setItem("completedNodes", JSON.stringify(updated));
  };

  const updatedNodes = nodes.map((node) => ({
    ...node,
    style: {
      ...node.style,
      background: completed.includes(node.id) ? "#22c55e" : node.style?.background,
    },
  }));

  return (
    <div className="w-full  relative" style={{ width, height, maxHeight: "600px" }}>
      <ReactFlow
        nodes={updatedNodes}
        edges={edges}
        fitView
        panOnDrag={false}
        nodesDraggable={false}
        zoomOnDoubleClick={false}
        zoomOnPinch={true}
        zoomOnScroll={false}
        onNodeClick={(_, node) => setSelectedNode(node)}
      >
        <Background color="#f3f4f6" gap={16} />
        <Controls showZoom showFitView />
      </ReactFlow>

      {/* Info Popup */}
      {selectedNode && (
        <div className="absolute top-5 right-5 w-80 bg-white border p-4 rounded-xl shadow-lg z-50">
          <h2 className="text-xl font-bold mb-2">{selectedNode.data.label}</h2>
          <p className="text-sm text-gray-700 mb-2">
            {nodeDescriptions[selectedNode.data.label]?.description || "No description available."}
          </p>
          {nodeDescriptions[selectedNode.data.label]?.resources?.map((res) => (
            <div key={res.url}>
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline"
              >
                🔗 {res.title}
              </a>
            </div>
          ))}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setSelectedNode(null)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            >
              Close
            </button>
            <button
              onClick={() => {
                handleComplete(selectedNode.id);
                setSelectedNode(null);
              }}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
            >
              Mark Complete ✅
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoadmapFlowchart;
