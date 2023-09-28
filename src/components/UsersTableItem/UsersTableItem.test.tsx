import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import UsersTableItem from './UsersTableItem';

describe('UsersTableItems', () => {
  it('should render the component with user data when windowWidth is greater than 768', () => {
    const user = {
      name: 'John Doe',
      age: 25,
      email: 'johndoe@example.com',
      country: 'USA',
      phone: '1234567890',
    };
    const windowWidth = 800;

    render(<UsersTableItem user={user} windowWidth={windowWidth} />);

    const userItems = screen.getAllByTestId('user-item');
    expect(userItems).toHaveLength(5);
    // expect(userItems[0]).toHaveTextContent('John Doe');
    // expect(userItems[1]).toHaveTextContent('25');
    // expect(userItems[2]).toHaveTextContent('johndoe@example.com');
    // expect(userItems[3]).toHaveTextContent('USA');
    // expect(userItems[4]).toHaveTextContent('1234567890');
  });
});
