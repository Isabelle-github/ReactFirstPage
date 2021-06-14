
import './App.css';
import Picture from "./components/Picture"
import Header from './components/Header';
import Paragraph from "./components/Paragraph.js";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <span>What we do</span>
          <p className="phrase">We've got everything you need to launch and grow your business </p>
          <div className="articles">
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
          </div>
        </section>
        <div className="container">
          <section className="galery">
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
            <Picture></Picture>
          </section>
        </div>

      </main>
    </>
  );
}

export default App;
