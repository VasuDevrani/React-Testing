# React-Testing
Ananlysing the application by comparing actual output with desired output

## Terminology
- Mock Testing
    - Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones. The purpose of mocking is to isolate and focus on the code being tested and not on the behaviour or state of external dependencies.
- Test Driven Development
    - A red to green form of development
    - A software development process where tests are written before code
    - Compile time testing

## TESTS
- Unit Tests
    - Focus is on testing the individual building blocks like components
    - Each unit is tested in isolation with mocked dependencies.
    - Runs in short time and convenient to spot failures
- Integration Tests
    - Focus is on testing the combination of units, check if they work together
    - Takes longer time
- E2E tests
    - Focus is on testing the entire application as a whole with dependencies, APIs and all other components to ensure working as per designed
    - Involves real UI and services
    - takes longest time and may be cost ineffective
- testing pyramid
- RTL or React Testing Library is a balance between Unit and E2E tests. RTL is focused on testing the components and user interaction.

## General TEST anatomy
By ```create-react-app```, alongwith the dependencies of React app we get ```App.test.jsx``` file, jest and RTL dependencies. These provides prebuilt JEST and RTL configurations for testing purposes
```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test and expect functions are imported globally from JEST
// test(text_name, testing_function, test_time_out) => void

test('renders learn react link', () => {
  render(<App />); //RTL renders componenet in virtual DOM
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

```

## Creating a TEST for a component
- Create component
- Create ```component.test.tsx``` testing file
- As per the test anatomy define a test for the component
- Run using ```npm test``` or ```yarn test```
