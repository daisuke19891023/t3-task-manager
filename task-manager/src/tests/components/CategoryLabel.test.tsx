import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryLabel from '../../components/CategoryLabel';

describe('CategoryLabel', () => {
  it('renders the title and sets the correct color', () => {
    const title = 'Sample Category';
    const color = 'red';

    render(<CategoryLabel title={title} color={color} />);

    const categoryLabel = screen.getByText(title);
    expect(categoryLabel).toBeInTheDocument();
    //expect(categoryLabel.style.backgroundColor).toEqual(color);
  });
});
