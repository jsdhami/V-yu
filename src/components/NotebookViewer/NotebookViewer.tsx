

import React from 'react';
import { ExternalLink } from 'lucide-react';

interface NotebookViewerProps {
  nbviewerUrl: string;
  colabUrl: string;
  iframeWidth?: string;
  iframeHeight?: string;
  buttonText?: string;
}

const NotebookViewer: React.FC<NotebookViewerProps> = ({
  nbviewerUrl,
  colabUrl,
  buttonText = "Edit Notebook in Google Colab"
}) => {
  return (
    <div className="bg-gray-900 text-white p-8 w-full min-h-screen rounded-lg shadow-lg">
      <div className="space-y-6 w-full flex flex-col items-center justify-center">
        <iframe
          src={nbviewerUrl}
          className={`w-full min-h-screen rounded-lg border-2 border-blue-500 shadow-xl`}
          title="Jupyter Notebook Viewer"
        />
        <a
          href={colabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
            <ExternalLink size={20} />
            <span>{buttonText}</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotebookViewer;