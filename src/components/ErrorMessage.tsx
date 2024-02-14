import React from "react";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <p className="text-red-500 text-lg mt-8">{error}</p>
);

export default ErrorMessage;
