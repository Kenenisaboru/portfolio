import React from 'react';
import { FaDownload } from 'react-icons/fa';

const CertificateModal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div className="certificate-modal" onClick={onClose}>
      <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="certificate-modal-close" onClick={onClose}>×</button>
        <div className="certificate-modal-header">
          <h3>{selectedImage.title}</h3>
        </div>
        <img src={selectedImage.src} alt={selectedImage.title} className="certificate-modal-image" />
        <div className="certificate-modal-info">
          <div className="certificate-modal-details">
            <p>Click and drag to zoom | Scroll to view details</p>
          </div>
          <div className="certificate-modal-actions">
            <a 
              href={selectedImage.src} 
              download 
              className="download-certificate-btn"
            >
              <FaDownload /> Download Certificate
            </a>
            <button className="btn btn-secondary" onClick={onClose}>
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

