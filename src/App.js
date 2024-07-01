import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { SkillPage } from "pages/skill-page";
import { XpPage } from "pages/xp-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillPage />} />
      <Route path="/xps" element={<XpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
