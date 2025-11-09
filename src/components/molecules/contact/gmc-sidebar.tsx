import { AnimatePresence, motion } from "framer-motion";

type RequestType = {
  id: number;
  title: string;
  description: string;
};

type GMCContactSidebarProps = {
  requestTypes: RequestType[];
  selectedRequest: RequestType;
  setSelectedRequest: (request: RequestType) => void;
  onOverlayClick?: () => void;
  isOpen?: boolean;
};

const GMCContactSidebar: React.FC<GMCContactSidebarProps> = ({
  requestTypes,
  selectedRequest,
  setSelectedRequest,
  onOverlayClick,
  isOpen = true,
}) => {
  function handleRequestClick(request: RequestType) {
    setSelectedRequest(request);
    onOverlayClick?.();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex justify-end bg-gray-800/50 backdrop-blur-sm"
          onClick={onOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.aside
            initial={{ x: "100%", opacity: 0, scale: 0.98 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: "100%", opacity: 0, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              duration: 0.4,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full md:w-1/4 bg-[#F4F4F4] border-l border-gray-200 p-8 overflow-y-auto shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Sélectionnez le type de demande
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Choisissez l’option qui correspond le mieux à votre situation.
            </p>

            <div className="flex flex-col gap-4">
              {requestTypes.map((type) => (
                <motion.button
                  key={type.id}
                  onClick={() => handleRequestClick(type)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    selectedRequest.id === type.id
                      ? "bg-[#1C5E58] text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  <h4 className="font-semibold">{type.title}</h4>
                  <p
                    className={`text-sm ${
                      selectedRequest.id === type.id
                        ? "text-white/90"
                        : "text-gray-600"
                    }`}
                  >
                    {type.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GMCContactSidebar;
