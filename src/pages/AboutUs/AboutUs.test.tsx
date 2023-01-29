import { render, screen } from '@testing-library/react';
import AboutUs from '.';

test('render AboutUs page', () => {
  render(<AboutUs />);
  const subTitle = screen.getByText('我們的使命');
  expect(subTitle).toBeInTheDocument();
});
