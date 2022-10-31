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

<img width="340" alt="image" src="https://user-images.githubusercontent.com/101383635/198865774-a9f9a650-d296-47fb-9de0-04162f5e6015.png">

## Testing in React
- JEST by default runs the test in watch mode that is only the files changed after the last commit are subjected to test
- ```test.only``` would run these test only and skip others, ```test.skip``` skips that test
- TEST can be organized within a ```__test__``` folder with test files named as ```nameTest.tsx``` or else
- TEST COVERAGE
    - checks the line, branch, functions and statements coverage of test in the components
    - ```npm test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectFromCoverage='!src/components/**/*.{stories,types,constants,utils,spec}.{ts,tsx}'``` script for running coverage across all components avoiding the extra folders like types.
    - coverage threshold => minimum boundary of test coverage else test fails
```
// coverage threshold in package.json
"jest": {
    "coverageThreshold": {
        "global": {
            "branches": 80,  //branch coverage
            "functions": 80,
            "lines": 80,
            "statements": -10
        }
    }
}
```

<img width="599" alt="image" src="https://user-images.githubusercontent.com/101383635/198864845-89c23214-7f62-464c-a90f-90692ee07d39.png">


### General TEST anatomy
By ```create-react-app```, alongwith the dependencies of React app we get ```App.test.jsx``` file, jest and RTL dependencies. These provides prebuilt JEST and RTL configurations for testing purposes
```
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test and expect functions are imported globally from JEST
// test(text_name, testing_function, test_time_out) => void
// expect is the assertion and toBeInTheDocument is matcher function provided by JEST-DOM testing library 


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

### Grouping test
```describe``` is used to group test of similar types or component
```
describe('test_group_name', () => {
    test1;

    test2;

    describe('nested_test_group_name', () => {
        test3;
    })
})
```

### RTL Queries

<img width="417" alt="image" src="https://user-images.githubusercontent.com/101383635/198865864-ec3ce913-3e6f-4acd-9e52-82a5544f30d5.png">

1. getBy.. queries: class of queries that return the matching node for a query, throw a descriptive error if **no elements match** or **if more than one match** (like if we are searching for same text that is present in two h1 tags, this will cause an error, can be solved using getAll...) is found.
    - [Found Here](https://testing-library.com/docs/queries/about)
    - getByRole: checks if element with specified role exist in the document, role are like ARIA-LABELS e.g. textbox, checkbox, combobox (dropdown), button etc.
    - getByLabelText: finds the DOM element using label text provided (either checks the label or text content of element) 
    - getByPlaceholderText
    - getByText used to locate ```p```,```span``` and ```div``` containing the specified text

2. getAllBy.. queries can be used to return multiple matching nodes for a query which is error in the (1);

3. queryBy.. & queryAllBy.. queries: returns the matching node/array of nodes for a query, returns **null** if no element is found. we can use all suffix with this type of query

4. findBy & findAllBy.. queries: returns a promise
    - promise resolves when a DOM node/array of nodes are found within **default 1000ms** time else rejects or shows error 
    - used in case of **async code** or data fetching or time based variations.
```
const buttonElement = await screen.findByRole("button", 
{
    name: "myBtn"
},{
    timeout: 2000
})
```

## Resources
1. [JEST](https://jestjs.io/docs/getting-started)
2. [JEST DOM](https://github.com/testing-library/jest-dom)
3. [Testing Library](https://testing-library.com/)
