import { ReactNode } from "react";
import { AuthProvider } from "./useAuth";

interface IAppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

