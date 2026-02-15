import { useEffect, useState } from "react";

function ActivityLog({ events }) {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    setVisibleEvents([]);
    events.forEach((event, index) => {
      setTimeout(() => {
        setVisibleEvents(prev => [...prev, event]);
      }, index * 800);
    });
  }, [events]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-4">System Activity</h3>
      <ul className="space-y-3">
        {visibleEvents.map((event, i) => (
          <li
            key={i}
            className="bg-gray-100 p-3 rounded-lg text-sm animate-fadeIn"
          >
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityLog;
