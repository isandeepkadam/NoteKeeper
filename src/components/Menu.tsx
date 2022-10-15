import './menu.css';
import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
export interface Css extends CSSProperties {
  '--i': number;
}

const Menu = () => {
  const [openIcons, setOpenIcons] = useState<boolean>(false);
  return (
    <nav className={openIcons ? 'open' : ''}>
      <div className="nav-content">
        <div
          className="toggle-btn"
          onClick={() => setOpenIcons((prev) => !prev)}
        >
          <i className="bx bx-menu"></i>
          {/* <i className="bx bx-bullseye"></i> */}
        </div>
        <span style={{ '--i': 1 } as Css} title="Trash">
          <Link to="/trash">
            <i className="bx bxs-trash"></i>
          </Link>
        </span>
        <span style={{ '--i': 2 } as Css} title="Archives">
          <Link to="/archives">
            <i className="bx bxs-archive-out"></i>
          </Link>
        </span>
        <span style={{ '--i': 3 } as Css} title="Home">
          <Link to="/">
            <i className="bx bxs-home"></i>
          </Link>
        </span>
        <span style={{ '--i': 4 } as Css} title="Labels">
          <Link to="/label">
            <i className="bx bxs-label"></i>
          </Link>
        </span>
        <span style={{ '--i': 5 } as Css} title="Reminders">
          <Link to="/reminders">
            <i className="bx bxs-bell"></i>
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Menu;
