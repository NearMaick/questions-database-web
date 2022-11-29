import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../utils/api";

interface IEducator {
  name: string;
  email: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  educator: IEducator;
  signIn(credentials: ISignInCredentials): Promise<void>;
  // signOut(): void;
  // updateUser(user: IEducator): void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

const storageEducatorToken = "@QuestionsDatabase-1.0.0:token";
const storageEducatorData = "@QuestionsDatabase-1.0.0:user";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [educatorLoginData, setEducatorLoginData] = useState(() => {
    const token = localStorage.getItem(storageEducatorToken);
    const educator = localStorage.getItem(storageEducatorData);

    if (token && educator) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, educator: JSON.parse(educator) };
    }

    return {};
  });

  async function signIn({ email, password }: ISignInCredentials) {
    const response = await api.post("/educators/auth", {
      email,
      password,
    });

    const { token, educator } = response.data;
    console.log({ token, educator });

    localStorage.setItem(storageEducatorToken, token);
    localStorage.setItem(storageEducatorData, JSON.stringify(educator));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setEducatorLoginData({ token, educator });
  }

  return (
    <AuthContext.Provider
      value={{ educator: educatorLoginData.educator, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

