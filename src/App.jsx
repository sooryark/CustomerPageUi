import "./App.css";
import Card from "./Components/Card";
import CustomerForm from "./Components/CustomerForm";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-[#1e293b] w-full h-auto">
      <Navbar />
      <div className="flex justify-around items-center mt-5">
        <Card />
        <CustomerForm />
      </div>
      <div className="text-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;
