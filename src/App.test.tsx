// import '@testing-library/jest-dom/extend-expect';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the "App" component without errors', () => {
    const { container } = render(<App />); // Render the component and get the container

    // Use vitest's built-in assertions to check if an element with test ID 'app' exists
    expect(container.querySelector('[data-testid="app"]')).toBeTruthy();
  });
});
