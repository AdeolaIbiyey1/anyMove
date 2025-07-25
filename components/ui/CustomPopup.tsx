import React from "react";
import { Dialog, DialogContent, DialogTitle } from "./dialog";
import { CheckCircle, XCircle } from "lucide-react";

// VisuallyHidden utility
const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>{children}</span>
);

interface CustomPopupProps {
  open: boolean;
  onClose: () => void;
  status: "success" | "error";
  message: string;
}

export const CustomPopup: React.FC<CustomPopupProps> = ({ open, onClose, status, message }) => {
  return (
    <Dialog open={open} onOpenChange={v => !v && onClose()}>
      <DialogContent className="flex flex-col items-center py-10">
        <DialogTitle asChild>
          <VisuallyHidden>{status === "success" ? "Success" : "Error"}</VisuallyHidden>
        </DialogTitle>
        {status === "success" ? (
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        ) : (
          <XCircle className="text-red-500 w-16 h-16 mb-4" />
        )}
        <div className="text-center text-lg font-medium">{message}</div>
      </DialogContent>
    </Dialog>
  );
}; 