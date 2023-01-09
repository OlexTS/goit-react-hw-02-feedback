import PropTypes from 'prop-types';
import { Title, Part } from './Section.styled';

const Section = ({ title, children }) => {
    return <Part>
        <Title>{title}</Title>
        {children}
    </Part>
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
export default Section