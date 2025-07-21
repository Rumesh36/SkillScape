import RoadmapFlowchart from "../utilities/FEFlowchart";
import FaqCard from "../Components/FaqCard";
import { type Node, type Edge } from "reactflow";

const nodes: Node[] = [
  {
    id: "1",
    position: { x: 300, y: 0 },
    data: { label: "HTML" },
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
    id: "2",
    position: { x: 300, y: 100 },
    data: { label: "CSS" },
    style: {
      background: '#1572B6',
      color: 'white',
      border: '2px solid #38bdf8',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "3",
    position: { x: 300, y: 200 },
    data: { label: "JavaScript" },
    style: {
      background: '#F7DF1E',
      color: 'black',
      border: '2px solid #eab308',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "4",
    position: { x: 300, y: 300 },
    data: { label: "React" },
    style: {
      background: '#61DAFB',
      color: 'white',
      border: '2px solid #0ea5e9',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "5",
    position: { x: 300, y: 400 },
    data: { label: "Node.js" },
    style: {
      background: '#3C873A',
      color: 'white',
      border: '2px solid #22c55e',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "6",
    position: { x: 100, y: 500 },
    data: { label: "MongoDB" },
    style: {
      background: '#10B981',
      color: 'white',
      border: '2px solid #34d399',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "7",
    position: { x: 500, y: 500 },
    data: { label: "Express.js" },
    style: {
      background: '#000000',
      color: 'white',
      border: '2px solid #6b7280',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "8",
    position: { x: 300, y: 600 },
    data: { label: "REST / GraphQL APIs" },
    style: {
      background: '#0EA5E9',
      color: 'white',
      border: '2px solid #38bdf8',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "9",
    position: { x: 300, y: 700 },
    data: { label: "Deployment" },
    style: {
      background: '#64748B',
      color: 'white',
      border: '2px solid #cbd5e1',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
];

const edges: Edge[] = [
  { id: "1-2", source: "1", target: "2", label: "Style your structure", style: { stroke: '#1572B6', strokeWidth: 2 }, labelStyle: { fill: '#1572B6', fontWeight: 'bold', fontSize: 12 } },
  { id: "2-3", source: "2", target: "3", label: "Add interactivity", style: { stroke: '#F7DF1E', strokeWidth: 2 }, labelStyle: { fill: '#F7DF1E', fontWeight: 'bold', fontSize: 12 } },
  { id: "3-4", source: "3", target: "4", label: "Build reusable UI", style: { stroke: '#61DAFB', strokeWidth: 2 }, labelStyle: { fill: '#61DAFB', fontWeight: 'bold', fontSize: 12 } },
  { id: "4-5", source: "4", target: "5", label: "Connect frontend to server", style: { stroke: '#3C873A', strokeWidth: 2 }, labelStyle: { fill: '#3C873A', fontWeight: 'bold', fontSize: 12 } },
  { id: "5-6", source: "5", target: "6", label: "Database (NoSQL)", style: { stroke: '#10B981', strokeWidth: 2 }, labelStyle: { fill: '#10B981', fontWeight: 'bold', fontSize: 12 } },
  { id: "5-7", source: "5", target: "7", label: "Server Framework", style: { stroke: '#000000', strokeWidth: 2 }, labelStyle: { fill: '#9CA3AF', fontWeight: 'bold', fontSize: 12 } },
  { id: "7-8", source: "7", target: "8", label: "API Design", style: { stroke: '#0EA5E9', strokeWidth: 2 }, labelStyle: { fill: '#0EA5E9', fontWeight: 'bold', fontSize: 12 } },
  { id: "8-9", source: "8", target: "9", label: "Deploy your app", style: { stroke: '#64748B', strokeWidth: 2 }, labelStyle: { fill: '#64748B', fontWeight: 'bold', fontSize: 12 } },
];

const FullStack = () => {
  return (
    <>
      <RoadmapFlowchart nodes={nodes} edges={edges} />

      <div className="pb-10">
        <FaqCard
          question="What is Full Stack Development?"
          answer="Full stack development covers both frontend and backend development. It involves building user interfaces with technologies like HTML, CSS, JavaScript, React or Vue, and handling server-side logic with Node.js, Express.js, and databases like MongoDB or PostgreSQL. Full stack developers can build complete web applications end to end."
        />
        <FaqCard
          question="What Should I Learn for Full Stack?"
          answer="Start with HTML, CSS, JavaScript, and frontend frameworks like React. Learn version control using Git. Then move on to backend technologies like Node.js, Express.js, MongoDB, and REST/GraphQL APIs. Finally, practice deploying full stack apps using platforms like Netlify, Vercel, or Railway."
        />
        <FaqCard
          question="Useful Full Stack Resources"
          answer={
            <ul className="list-none space-y-2">
              <li>🌐 <a href="https://www.theodinproject.com" target="_blank" className="hover:text-blue-600 underline">The Odin Project</a></li>
              <li>🧰 <a href="https://roadmap.sh/full-stack" target="_blank" className="hover:text-blue-600 underline">roadmap.sh/full-stack</a></li>
              <li>📘 <a href="https://www.freecodecamp.org/" target="_blank" className="hover:text-blue-600 underline">freeCodeCamp Full Stack</a></li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default FullStack;
