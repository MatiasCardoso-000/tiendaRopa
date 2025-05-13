import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <main className="min-h-screen flex flex-col w-full items-center  gap-20">
      <AppRouter />
    </main>
  );
};

export default App;
