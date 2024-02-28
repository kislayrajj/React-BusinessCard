
import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import MainContent from "./components/maincontent"

function App() {
  return (
    <div className='m-auto mt-12  h-[550px] w-[450px] border-2 border-black relative bg-slate-700 rounded-md overflow-hidden'>
    <Header />
 <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
