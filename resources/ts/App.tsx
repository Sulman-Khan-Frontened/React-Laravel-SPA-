import React from 'react';
import ReactDOM from 'react-dom/client';
const App = () => {
    return <h1>Hello, React with TypeScript in Laravel!</h1>;
};
export default App;

const root = document.getElementById('app');
if (root) {
    const render = ReactDOM.createRoot(root!);
    render.render(<App />);
}
