# React-Testing
Keeps precise testing steps for a flawless React-app development

## Terminology
- Mock Testing
    - Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones. The purpose of mocking is to isolate and focus on the code being tested and not on the behaviour or state of external dependencies.

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