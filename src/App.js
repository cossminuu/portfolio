import './App.css';
import homeSvg from './blob.svg'
import aboutSvg from './blob1.svg'
import projectsSvg from './blob2.svg'
import { Outlet, Link, useLocation } from "react-router-dom";


const _navItems = [
  {
    name: 'Home',
    path: '/',
    icon: 'far fa-home',
    color: "#dc143c"
  },
  {
    name: 'About',
    path: '/about',
    icon: 'far fa-info',
    color: "#3c40c6"
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'far fa-list',
    color: "#ffa801"
  }
]

const activeSvg = (path) => {
  switch (path) {
    case '/':
      return homeSvg;
    case '/about':
      return aboutSvg;
    case '/projects':
      return projectsSvg;
    default:
      return homeSvg;
  }
}
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <img className='svg-top fadeRightMini' src={activeSvg(location.pathname)} alt="svg" />
      <img className='svg-bottom fadeLeftMini' src={activeSvg(location.pathname)} alt="svg" />
      <div className='outlet'>
        <Outlet />
      </div>
      <div className='bottom-nav-container fadeLeftMini'>
        <div className="navigation">
          <ul>
            {
              _navItems.map((item, index) => {
                return (
                  <li key={index} className={`list ${location.pathname === item.path ? 'active' : ''}`} >
                    <Link to={item.path}>
                      <span className="icon"><i className={item.icon}></i></span>
                      <span className="title">{item.name}</span>
                    </Link>
                  </li>
                )
              }
              )
            }
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
