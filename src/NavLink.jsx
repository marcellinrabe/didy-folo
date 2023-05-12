import PropTypes from "prop-types";
import { FaHashtag } from "react-icons/fa";

export default function NavLink({ to, active, onClick }) {
    return (
        <div
            onClick={
                onClick
                    ? () => {
                          onClick(false);
                      }
                    : () => {}
            }
            className={`flex items-center gap-4 p-2 hover:bg-gray-200 ${
                active ? "bg-cyan-400 hover:bg-cyan-400" : ""
            }`}
        >
            <FaHashtag className={active ? "rotate-12" : ""} />
            <span>
                <a href={`#${""}`}>{to}</a>
            </span>
        </div>
    );
}

NavLink.propTypes = {
    to: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};
