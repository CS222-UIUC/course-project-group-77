import { render, renderHook, screen, fireEvent, waitFor} from '@testing-library/react';
import App, { Grid } from './App';
import React from 'react';


test('Renders entire responsive, draggable grid', async() => {
  render(<App />);

  expect(screen.getByText('Carrot')).toBeInTheDocument();
  expect(screen.getByText('Corn')).toBeInTheDocument();
  expect(screen.getByText('Soybean')).toBeInTheDocument();
  expect(screen.getByText('Cabbage')).toBeInTheDocument();
  expect(screen.getByText('Rice')).toBeInTheDocument();
});

test('Check that hoverable information for each icon is not displayed until hover, and then displayed when hovered', async() => {
  render(<App />);
  
  const carrot = screen.queryByText('This vegetable is orange.');
  expect(carrot).not.toBeInTheDocument();

  const corn = screen.queryByText('This vegetable is yellow (usually).');
  expect(corn).not.toBeInTheDocument();

  const soybean = screen.queryByText('I have no clue what color this legume is. Tan?');
  expect(soybean).not.toBeInTheDocument();

  const cabbage = screen.queryByText('This vegetable is green.');
  expect(cabbage).not.toBeInTheDocument();

  const rice = screen.queryByText('This grain is brown.');
  expect(rice).not.toBeInTheDocument();


  fireEvent.mouseOver(screen.getByText('Carrot'));
  await waitFor(() => screen.getByTestId('Carrot'))
  expect(screen.getByText('This vegetable is orange.')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Corn'));
  await waitFor(() => screen.getByTestId('Corn'))
  expect(screen.getByText('This vegetable is yellow (usually).')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Soybean'));
  await waitFor(() => screen.getByTestId('Soybean'))
  expect(screen.getByText('I have no clue what color this legume is. Tan?')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Cabbage'));
  await waitFor(() => screen.getByTestId('Cabbage'))
  expect(screen.getByText('This vegetable is green.')).toBeInTheDocument()

  fireEvent.mouseOver(screen.getByText('Rice'));
  await waitFor(() => screen.getByTestId('Rice'))
  expect(screen.getByText('This grain is brown.')).toBeInTheDocument()
});