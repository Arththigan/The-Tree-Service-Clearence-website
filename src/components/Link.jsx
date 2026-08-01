import React from 'react';

export default function Link({ to, children, className = '', onClick, ...props }) {
  const navigate = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClick?.();
  };

  return <a href={to} onClick={navigate} className={className} {...props}>{children}</a>;
}
