import React from 'react';
import Spinner from '../Spinner/Spinner';

export default function Button({
  children,
  className = 'btn-ghost',
  disabled,
  spinnerSize = 4,
  isLoading,
  ...events
}) {
  return (
    <button
      className={`btn-common ${className || ''} ${isLoading ? 'pointer-events-none' : ''}`}
      disabled={disabled}
      {...events}
    >
      {isLoading && <Spinner size={spinnerSize} />}
      {children}
    </button>
  );
}
