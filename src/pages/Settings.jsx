function Settings() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">
        Settings
      </h2>

      <div className="space-y-4 text-sm">
        <div>
          <label className="block text-gray-600 mb-1">
            Email Notifications
          </label>
          <input type="checkbox" className="accent-purple-600" />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">
            Enable Fraud Alerts
          </label>
          <input type="checkbox" className="accent-purple-600" />
        </div>
      </div>
    </div>
  );
}

export default Settings;
