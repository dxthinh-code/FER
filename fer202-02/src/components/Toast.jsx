import React, { useEffect } from "react";

function Toast({ show, message, type = "success", onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const toastClass = type === "success" ? "text-bg-success" : "text-bg-danger";
  const icon = type === "success" ? "fas fa-check-circle" : "fas fa-exclamation-circle";

  return (
    <div 
      className="position-fixed top-0 end-0 p-3" 
      style={{ zIndex: 1050 }}
    >
      <div className={`toast show ${toastClass}`} role="alert">
        <div className="toast-header">
          <i className={`${icon} me-2`}></i>
          <strong className="me-auto">
            {type === "success" ? "Thành công!" : "Lỗi!"}
          </strong>
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClose}
          ></button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
}

export default Toast;