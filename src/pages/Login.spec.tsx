import { fireEvent, render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Login } from "./Login";

vi.mock("../hooks/useAuth", () => {
  return {
    useAuth: () => ({
      signIn: vi.fn(),
    }),
  };
});

// const testMock = vi.mock("react-router-dom", () => {
//   return {
//     redirect: vi.fn(() => {
//       "/test";
//     }),
//   };
// });

describe("Login component test", () => {
  it("Redirect to dashboard page when logging in", async () => {
    const { getByPlaceholderText, getByText, debug } = render(<Login />);
    const emailField = getByPlaceholderText("seu@email.aqui");
    const passwordField = getByPlaceholderText("suaSenhaAqui");
    const buttonElement = getByText("Enviar");
    fireEvent.change(emailField, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });
    // fireEvent.click(buttonElement);

    // expect(emailField).toHaveProperty("values");

    debug();
    // await waitFor(() => {
    //   expect(mockRedirect).toHaveBeenCalledWith("/dashboard");
    // });
  });
});

