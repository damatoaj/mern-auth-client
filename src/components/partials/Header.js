import { Link } from 'react-router-dom';

const Header = (props) => {
    let style = {
        backgroundColor: 'chartreuse',
        borderBottom: '3px solid black',
        margin: 0,
        padding: '2em 0'
    }
    return (
        <header style={style}>
            <h1>header</h1>
            <nav>
                <Link to='/'>Home</Link> {' | '}
                <Link to='/auth'>Login or Signup</Link> {' | '}
                <Link to='/profile'>Account</Link>
            </nav>
        </header>
    )
}

export default Header;