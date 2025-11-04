// components/ui/SuccessToast.tsx
"use client";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const SuccessToast = ({ onClose }: { onClose?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.4 }}
    className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-md shadow-md flex items-start gap-4 relative"
  >
    <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1" />
    <div className="text-left">
      <p className="font-semibold">Mensaje enviado</p>
      <p className="text-sm mt-1">Gracias por tu mensaje. Te responderé pronto.</p>
    </div>
    {onClose && (
      <button
        onClick={onClose}
        aria-label="Cerrar notificación"
        className="absolute top-2 right-2 text-green-600 hover:text-green-800 text-xl"
      >
        ×
      </button>
    )}
  </motion.div>
);

export default SuccessToast;
