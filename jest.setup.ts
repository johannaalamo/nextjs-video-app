import '@testing-library/jest-dom';
import '@testing-library/react'
// jest.setup.ts
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks(); // Limpia los mocks antes de cada prueba
});
