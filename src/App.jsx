import Readability from "./components/Readability";
import Performance from "./components/Performance";
import Security from "./components/Security";
import Documentation from "./components/Documentation";
import Testing from "./components/Testing";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full justify-items-center">
        <Readability />
        <Performance />
        <Security />
        <Documentation />
        <Testing />
      </div>
    </div>
  );
}