import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>TOGGLE</h1>
        <Link to='/properties'>PROPERTIES</Link>
        <Link to='/login'>LOGIN</Link>
        <Link to='/register'>REGISTER</Link>
        <hr/>
      </header>
      {props.children}
      <footer>
        <p>© Emanuella Altidor, 2021</p>
      </footer>
    </div>
  )
}
