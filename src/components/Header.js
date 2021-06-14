import './Header.css';

const Header = () => {
    return (
        <header>
            <p>Hello There</p>
            <h1>We Are Glint</h1>
            <p className='intro'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div>
                <span>
                    <h2>127</h2>
                    <p>Award received</p>
                </span>
                <span>
                    <h2>1505</h2>
                    <p>Cups Of Coffee</p>
                </span>
                <span>
                    <h2>109</h2>
                    <p>Projects Completed</p>
                </span>
                <span className='lastSpan'>
                    <h2>102</h2>
                    <p>Happy Clients</p>
                </span>
            </div>
        </header>
    )
}

export default Header
