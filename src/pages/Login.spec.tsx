import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Login } from "./Login";

vi.mock("../hooks/useAuth", () => {
  return {
    useAuth: () => ({
      signIn: vi.fn(),
    }),
  };
});

const mockedHistoryPush = vi.fn();

vi.mock("react-router-dom", () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe("Login component test", () => {
  it("should be able to sign in", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const emailField = getByPlaceholderText("seu@email.aqui") as any;
    const passwordField = getByPlaceholderText("suaSenhaAqui") as any;

    fireEvent.change(emailField, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });
    const buttonElement = getByText("Enviar");

    expect(emailField.value).toBe("johndoe@example.com");
    expect(passwordField.value).toBe("123456");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith("/dashboard");
    });
  });
});

