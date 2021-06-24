import {Link} from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>TOGGLE</h1>
        <Link to='/properties'>PROPERTIES</Link>
        <Link to='/login'>LOGIN</Link>
        <Link to='/'>REGISTER</Link>
      </header>
      {props.children}
    </div>
  )
}
