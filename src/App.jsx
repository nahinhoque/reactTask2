import TaskCard from "./components/TaskCard";

const aspects = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing",
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full justify-items-center">
        {aspects.map((aspect) => (
          <TaskCard key={aspect} title={aspect} />
        ))}
      </div>
    </div>
  );
}