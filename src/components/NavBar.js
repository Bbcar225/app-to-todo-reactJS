import { React } from "react";
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = ({onDeleteCompleted}) => {
    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                <NavLink to="/" exact={true} className="btn btn-outline-dark bg-light">
                    <FaListAlt />
                </NavLink>
                <NavLink to="/completed" exact={true} className="btn btn-outline-dark bg-light">
                    <FaCheckSquare />
                </NavLink>
                <NavLink to="/add-task" exact={true} className="btn btn-outline-dark bg-light">
                    <FaPlusSquare />
                </NavLink>
            </div>
        
            <button className="btn btn-outline-dark bg-light" onClick={onDeleteCompleted}><FaTrash /></button>
        </footer>
        )
}
    
export default NavBar