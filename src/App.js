
import './App.css';
import Picture from "./components/Picture"
import Header from './components/Header';
import Paragraph from "./components/Paragraph.js";
import Fricadelle from './components/img/frikadellen.jpeg';
import Pizza from './components/img/pizza.jpeg';
import Pizza1 from './components/img/pizza2.jpeg';
import Pizza2 from './components/img/salat.jpeg';
import Pizza3 from './components/img/scampi.jpeg';
import Pizza4 from './components/img/teller.jpeg';
import Pizza5 from './components/img/spagetthi.jpeg';
import Pizza6 from './components/img/glass.jpeg';
import brush from './components/img/brush.svg';
import globe from './components/img/globe-line.svg';
import megaphone from './components/img/megaphone.svg';
import objectselect from './components/img/object-select.svg';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section>
          <span>What we do</span>
          <p className="phrase">We've got everything you need to launch and grow your business </p>
          <div className="articles">
            <Paragraph imageSource={brush} alt2='brush'></Paragraph>
            <Paragraph imageSource={globe} alt2='globe'></Paragraph>
            <Paragraph imageSource={megaphone} alt2='megaphone'></Paragraph>
            <Paragraph imageSource={objectselect} alt2='objectselect'></Paragraph>
          </div>
        </section>
        <div className="container">
          <section className="galery">
            <Picture imageSrc={Fricadelle} altText="frica" name='Fricadel' link='#frica' describe="Fricadel Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$56/98'></Picture>
            <Picture imageSrc={Pizza} altText="food1" name='Food1' link='#food1' describe="Food1 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$56/98'></Picture>
            <Picture imageSrc={Pizza1} altText="food2" name='Food2' link='#food2' describe="Food2 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$509/198'></Picture>
            <Picture imageSrc={Pizza2} altText="food3" name='Food3' link='#food3' describe="Food3 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$256/948'></Picture>
            <Picture imageSrc={Pizza3} altText="food4" name='Food4' link='#food4' describe="Food4 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$546/298'></Picture>
            <Picture imageSrc={Pizza4} altText="food6" name='Food5' link='#food5' describe="Food5 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$356/798'></Picture>
            <Picture imageSrc={Pizza5} altText="food7" name='Food6' link='#food6' describe="Food6 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='$516/525'></Picture>
            <Picture imageSrc={Pizza6} altText="food8" name='Food7' link='#food7' describe="Food7 Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the" price='463/194'></Picture>
          </section>
        </div>

      </main>
    </>
  );
}

export default App;
