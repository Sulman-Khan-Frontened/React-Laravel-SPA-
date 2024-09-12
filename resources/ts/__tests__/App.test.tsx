import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders Hello, React with TypeScript in Laravel!', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello, React with TypeScript in Laravel!')).toBeInTheDocument();
});
