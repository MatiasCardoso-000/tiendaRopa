interface Params {
  children: React.ReactNode;
}

export const App = ({ children }: Params) => {
  return <>{children}</>;
};

export default App;
