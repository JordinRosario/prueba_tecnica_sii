import React, { useState } from "react";

const AlertSuccess: React.FC<{ message: string }> = ({ message }) => {
  const [visible, setVisible] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-5 z-50 w-auto bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md flex items-center justify-between">
      <span>{message}</span>
      <button
        className="text-green-700 font-bold ml-4 cursor-pointer"
        onClick={() => setVisible(false)}
      >
        x
      </button>
    </div>
  );
};

export default AlertSuccess;
