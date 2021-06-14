import './Paragraph.css';
import brush from "./img/brush.svg";

const Paragraph = ({ title }) => {
    return (
        <article>
            <img src={brush} alt="brush" />
            {/* <img src={require("./components/img/brush.svg").default}></img> */}
            <div>
                <h3>Brand Identity</h3>
                <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the</p>
            </div>

        </article>
    )
}

export default Paragraph
