import PropTypes from 'prop-types';

const LayoutCenterItems = ({ children }) => {
    return(
        <div className=" w-dvw h-dvh flex justify-center items-center bg-cyan-800 ">
            { children }
        </div>
    );
}

LayoutCenterItems.propTypes = {
    children: PropTypes.node.isRequired
}

export default LayoutCenterItems;