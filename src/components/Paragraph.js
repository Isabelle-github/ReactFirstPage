import './Paragraph.css';
import brush from "./img/brush.svg";

const Paragraph = (props) => {
    return (
        <article>
            <img src={props.imageSource} alt={props.alt2} />
            {/* <img src={require("./components/img/brush.svg").default}></img> */}
            <div>
                <h3>Brand Identity</h3>
                <p>Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the</p>
            </div>

        </article>
    )
}

export default Paragraph
