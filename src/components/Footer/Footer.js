import React from 'react'
import  './Footer.css'
import PropTypes from 'prop-types';

const Footer = ({children,total}) => {
    return (
        <div className='footer'>
           {children}
           {total}
        </div>
    )
}
Footer.defaultProps = {
    total:90000
}
Footer.propTypes = {
    total:PropTypes.number
}

export default Footer
