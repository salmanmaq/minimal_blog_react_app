import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BlogPostPage from "./pages/BlogPostPage";
import MainPage from "./pages/MainPage";
import NewPostPage from "./pages/NewPostPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/newpost">
          <NewPostPage />
        </Route>
        <Route exact path="/blog/:postId">
          <BlogPostPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
