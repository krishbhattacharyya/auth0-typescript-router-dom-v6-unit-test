// app.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import routeConfig from '../routesConfig';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

test('Rendered the dashboard page with the dashboard click', async () => {

    render(<App />);

    // verify page content for default route
    const homeElement = await screen.findByText(/Welcome to Auth0/i);
    expect(homeElement).toBeInTheDocument();

    // verify page link for default route
    const dashboardLink = await screen.findByText(/dashboard/i);
    expect(dashboardLink).toBeInTheDocument();

    // verify page content for expected route after clicked on dashboard
    fireEvent.click(screen.getByText(/dashboard/i));
    const dasboardPage = await screen.findByText(/dashboard page/i);
    expect(dasboardPage).toBeInTheDocument();
})

test('rendering a component that uses no found', async () => {
    const route = '/some-route'

    const router = createMemoryRouter(routeConfig, {
        initialEntries: [route],
        initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    // verify not found rendered on the page
    const notFoundPage = await screen.findByText(/not found/i);
    expect(notFoundPage).toBeInTheDocument();
})






