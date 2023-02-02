import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { jsPDF } from "jspdf";
import { Resume } from "./Resume";

function App() {
  return (
    <div>
      <Header />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
