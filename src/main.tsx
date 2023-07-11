import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from './pages/home';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<Home />);