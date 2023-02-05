import { render, screen } from '@testing-library/react';
import AboutUs from '.';

test('render AboutUs page', () => {
  render(<AboutUs />);
  const subTitle = screen.getByText('HsiaoJu');
  expect(subTitle).toBeInTheDocument();
});
