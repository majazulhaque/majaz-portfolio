import { useState } from 'react';

// Define types for the alert
interface AlertState {
  show: boolean;
  text: string;
  type: 'success' | 'danger' | 'info' | 'warning'; // Adjust types based on your needs
}

interface ShowAlertParams {
  show:boolean
  text: string;
  type?: 'success' | 'danger' | 'info' | 'warning'; // Optional, default is 'danger'
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({ show: false, text: '', type: 'danger' });

  const showAlert = ({ text, type = 'danger' }:ShowAlertParams) => setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
};

export default useAlert;