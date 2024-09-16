import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import '../styles/Alerts.css'

export default function Alerts({ description, status }) {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        setIsVisible(true);
        
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [description, status]);
    let Status = '';

    if (status === 'alert-success') {
        Status = 'alert-success';
    } else {
        Status = 'alert-error';
    }
    return(
        isVisible && (
            <div className={`alert ${Status}`}>{description}</div>
        )
    );
};
Alerts.propTypes = {
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['alert-success','alert-error']).isRequired,
};