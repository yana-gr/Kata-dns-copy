import { Routes, Route, Link } from "react-router-dom";


interface RoutingNames {
  ROOT: string;
  VACANCIES: string;
}

export const ROUTES: RoutingNames = {
  ROOT: "/",
  VACANCIES: "/career", 
};

const App = () => (
  <>
    <h1>hello world</h1>
    <Link to={ROUTES.VACANCIES}>vac</Link>

    <Routes>
      <Route path={ROUTES.ROOT} element={<h2>Home Page</h2>} />
      <Route path={ROUTES.VACANCIES} element={<></>} />
    </Routes>
  </>
);

export default App;
