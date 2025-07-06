import { Link, useNavigate } from "react-router-dom";


const Header = () => {
    const navigate=useNavigate();
const onClickHandler=(e)=>{

  e.preventDefault();
  navigate("/Login");

}
// const onClickLogo=(e)=>{
//   e.preventDefault();
//   navigate("/");
// }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" 
            // onClick={onClickLogo} 
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          
          </Link>
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={onClickHandler}>Signin</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;