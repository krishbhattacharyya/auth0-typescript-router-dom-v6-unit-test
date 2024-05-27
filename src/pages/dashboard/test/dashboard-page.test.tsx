// app.test.js
import { render, screen } from '@testing-library/react';
import DashboardPage from '../dashboard-page';
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";

type User = {
    name: string;
    picture: string;
    email: string;
};

jest.mock('@auth0/auth0-react');

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>;

describe("calls loginWithRedirect when login button is clicked", () => {

    test('renders user profile if authenticated', async () => {

        const user: User = {
            name: 'John Doe',
            picture: 'http://example.com/johndoe.jpg',
            email: 'john.doe@example.com',
        };

        const mockAuth0Context: Auth0ContextInterface<User> = {
            isAuthenticated: true,
            user: user,
            isLoading: false,
            loginWithRedirect: jest.fn(),
            logout: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            handleRedirectCallback: jest.fn(),
        };

        mockedUseAuth0.mockReturnValue(mockAuth0Context);

        render(<DashboardPage />);
        expect(screen.getByText('Dashboard Page')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        const profileImage = screen.getByRole('img');
        expect(profileImage).toHaveAttribute('src', 'http://example.com/johndoe.jpg');

    });

});

