import '@testing-library/jest-dom';
import '@testing-library/react'
import fetchMock from 'jest-fetch-mock';
import 'whatwg-fetch';


fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});
