import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Orchestration from "./pages/Orchestration";
import Escalation from "./pages/Escalation";
import Cases from "./pages/Cases";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/orchestration" element={<Orchestration />} />
            <Route path="/escalation" element={<Escalation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
