import FaqCard from "../Components/FaqCard";
import BEFlowchart from "../utilities/FEFlowchart";
import { type Node, type Edge } from 'reactflow';

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 300, y: 0 },
    data: { label: "Networking & HTTP" },
    style: {
      background: '#6366F1',
      color: 'white',
      border: '2px solid #a5b4fc',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "2",
    position: { x: 300, y: 100 },
    data: { label: "Node.js / Express" },
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
    id: "3",
    position: { x: 100, y: 200 },
    data: { label: "Authentication" },
    style: {
      background: '#EF4444',
      color: 'white',
      border: '2px solid #f87171',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "4",
    position: { x: 500, y: 200 },
    data: { label: "Databases" },
    style: {
      background: '#F59E0B',
      color: 'white',
      border: '2px solid #facc15',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
  {
    id: "5",
    position: { x: 300, y: 300 },
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
    id: "6",
    position: { x: 300, y: 400 },
    data: { label: "Docker & Deployment" },
    style: {
      background: '#64748B',
      color: 'white',
      border: '2px solid #94a3b8',
      padding: 10,
      borderRadius: 8,
      fontWeight: 'bold',
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "Learn backend runtime",
    style: { stroke: '#6366F1', strokeWidth: 2 },
    labelStyle: { fill: '#6366F1', fontSize: 12, fontWeight: 'bold' },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    label: "User sessions & OAuth",
    style: { stroke: '#EF4444', strokeWidth: 2 },
    labelStyle: { fill: '#EF4444', fontSize: 12, fontWeight: 'bold' },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    label: "Relational & NoSQL",
    style: { stroke: '#F59E0B', strokeWidth: 2 },
    labelStyle: { fill: '#F59E0B', fontSize: 12, fontWeight: 'bold' },
  },
  {
    id: "3-5",
    source: "3",
    target: "5",
    label: "Designing secure APIs",
    style: { stroke: '#0EA5E9', strokeWidth: 2 },
    labelStyle: { fill: '#0EA5E9', fontSize: 12, fontWeight: 'bold' },
  },
  {
    id: "5-6",
    source: "5",
    target: "6",
    label: "CI/CD and Cloud",
    style: { stroke: '#64748B', strokeWidth: 2 },
    labelStyle: { fill: '#64748B', fontSize: 12, fontWeight: 'bold' },
  },
];

const Backend = () => {
  return (
    <>
      <BEFlowchart nodes={initialNodes} edges={initialEdges} />

      <div className="pb-10">
        <FaqCard
          question="What is Backend Development?"
          answer="Backend development focuses on server-side logic, databases, APIs, and application architecture. It's the brain of your app, handling data flow, user authentication, server responses, and deployment. It ensures functionality and performance behind the user interface."
        />
        <FaqCard
          question="What Should I Learn for Backend?"
          answer="Start with learning how the web works (HTTP, DNS, ports, etc.). Then dive into backend languages like JavaScript (Node.js), Python, or Java. Learn Express.js, database systems like MongoDB, PostgreSQL, and MySQL. Understand authentication using JWT or OAuth, and build REST or GraphQL APIs. Learn Git, testing, Docker, and deployment platforms like Heroku, Vercel, or AWS."
        />
        <FaqCard
          question="Recommended Free Backend Resources"
          answer={
            <ul className="list-none space-y-2">
              <li>📘 <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side" target="_blank" className="hover:text-blue-600 underline">MDN Server-side</a></li>
              <li>💻 <a href="https://www.theodinproject.com/" target="_blank" className="hover:text-blue-600 underline">The Odin Project</a></li>
              <li>📦 <a href="https://nodejs.dev/" target="_blank" className="hover:text-blue-600 underline">Node.js Dev</a></li>
              <li>⚙️ <a href="https://roadmap.sh/backend" target="_blank" className="hover:text-blue-600 underline">roadmap.sh/backend</a></li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Backend;
