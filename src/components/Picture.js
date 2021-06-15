import './Picture.css'
// import Fricadelle from './img/frikadellen.jpeg';

const Picture = (props) => {
    console.log(props);
    return (
        <div className='myPic'>
            <figure>
                <img src={props.imageSrc} alt={props.altText} />
            </figure>
            <figcaption className='textP'>
                <a href={props.link}>{props.name}</a>
                <p>{props.describe}</p>
                <p>{props.price}</p>
            </figcaption>
        </div>

    )
}

export default Picture
