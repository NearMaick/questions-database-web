import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Login } from "./Login";

vi.mock("../hooks/useAuth", () => {
  return {
    useAuth: () => ({
      signIn: vi.fn(),
    }),
  };
});

describe("Login component test", () => {
  it("should renders correctly", async () => {
    const { getByPlaceholderText } = render(<Login />);

    const emailField = getByPlaceholderText("seu@email.aqui") as any;
    const passwordField = getByPlaceholderText("suaSenhaAqui") as any;

    fireEvent.change(emailField, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    expect(emailField.value).toBe("johndoe@example.com");
    expect(passwordField.value).toBe("123456");
  });
});

