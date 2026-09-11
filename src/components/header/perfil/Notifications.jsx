import { useState } from "react";

const Notifications = ({ count = 3 }) => {
  // Definido 3 como padrão caso não venha na prop
  // 1. Iniciamos o estado com o valor que veio por parâmetro (ex: 3)
  const [isNotification, setIsNotification] = useState(count);

  const cleanNotifications = () => {
    setIsNotification(0);
  };

  return (
    <div className="flex items-center gap-4 p-2">
      <button className="relative flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition-colors">
        <span>noti</span>

        {isNotification > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full h-5 min-w-5 flex items-center justify-center">
            {isNotification}
          </div>
        )}
      </button>

      <button
        onClick={cleanNotifications}
        className="text-sm text-gray-500 hover:text-red-500 underline transition-colors cursor-pointer">
        Limpar
      </button>
    </div>
  );
};

export default Notifications;
