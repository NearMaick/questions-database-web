import { render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Educators } from "./Educators";

describe("Educators component test", () => {
  const serverMock = setupServer(
    rest.get("http://localhost:3333/educators", (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: "710df79f-87cc-4ec1-8af5-f69f7402f33a",
            name: "Maick Teste",
            course: "Matéria de teste",
            createdAt: "2022-11-14T17:39:20.856Z",
            updatedAt: "2022-11-14T17:39:20.856Z",
          },
          {
            id: "91e4fcc2-0a08-4485-bd45-6d3db8005d1c",
            name: "Maick Outro Teste",
            course: "Cálculo discreto",
            createdAt: "2022-11-15T13:16:20.655Z",
            updatedAt: "2022-11-15T13:16:20.655Z",
          },
        ])
      );
    })
  );
  beforeAll(() => {
    serverMock.listen();
  });
  afterAll(() => {
    serverMock.close();
  });

  it("should be able to list educators on screen", async () => {
    const { getByText } = render(<Educators />);

    await waitFor(() => {
      expect(getByText("Maick Teste")).toBeDefined();
    });
  });
});

