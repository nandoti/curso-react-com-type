import { Routes } from "./routes/Home";
import { LoggedUserProvider } from "./shared/contexts";

export const App = () => {
  return (
    <LoggedUserProvider>
      <Routes />
    </LoggedUserProvider>
  );
};
