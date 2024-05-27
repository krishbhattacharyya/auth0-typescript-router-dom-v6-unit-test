import { render, screen } from '@testing-library/react';
import HomePage, { homeLoader } from '../home-page';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe("Testing load within home component", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('renders data fetched by the loader', async () => {
        const mockData = {
            "userId": 1,
            "id": 1,
            "title": "delectus",
            "completed": false
        };
        fetchMock.mockResponseOnce(JSON.stringify(mockData));

        const routes = [
            {
                path: '/',
                element: <HomePage />,
                loader: homeLoader,
            },
        ];

        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        expect(await screen.findByText('delectus')).toBeInTheDocument();
    });

    test('handles fetch errors', async () => {
        fetchMock.mockRejectOnce(new Error('Failed to fetch data'));

        const routes = [
            {
                path: '/',
                element: <HomePage />,
                loader: homeLoader,
            },
        ];

        const router = createMemoryRouter(routes, { initialEntries: ['/'] });

        render(<RouterProvider router={router} />);

        expect(await screen.findByText(/Unexpected/i)).toBeInTheDocument();
    });
})