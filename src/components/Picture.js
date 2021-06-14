import './Picture.css'
import Fricadelle from './img/frikadellen.jpeg';

const Picture = () => {
    return (
        <div className='myPic'>
            <figure>
                <img src={Fricadelle} alt='fricki' />
            </figure>
            <div className='textP'>
                <a href='#'>Fricadelle</a>
                <p>Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the</p>
                <p>$350/560</p>
            </div>

        </div>

    )
}

export default Picture
