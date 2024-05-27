// app.test.js
import { render, screen, waitFor } from '@testing-library/react';
import LoginButton from '../LoginButton';
import { Auth0ContextInterface, useAuth0 } from "@auth0/auth0-react";

type User = {
  name: string;
  picture: string;
  email: string;
};

jest.mock('@auth0/auth0-react');

const mockedUseAuth0 = useAuth0 as jest.MockedFunction<typeof useAuth0>;

describe("calls loginWithRedirect when login button is clicked", () => {


  test('renders login message if not authenticated', async () => {
    const mockAuth0Context: Auth0ContextInterface<User> = {
      isAuthenticated: false,
      user: undefined,
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

    render(<LoginButton />);
    await waitFor(() => expect(expect(screen.getByText(/log in/i)).toBeInTheDocument()));
  });

});

