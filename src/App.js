import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment";

const Main = () => (
  <h1 style={{ textAlign: "center" }}>Welcome to Stripe Payment Element Integration 🎉</h1>
)

function App() {
  return (
    <main>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Payment />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </main>
  );
}

export default App;
