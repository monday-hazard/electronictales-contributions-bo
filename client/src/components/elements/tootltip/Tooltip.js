import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Tooltip.css';

const Tooltip = ({ content, tooltipRef }) => {
    const [display, setDisplay] = useState(false);

    const useTooltip = (ref) => {
        useEffect(() => {
            const tooltipTarget = ref.current;
            const tooltipElement = document.getElementsByClassName('tooltip-wrapper')[0];
            const handleHover = () => {
                if (tooltipTarget) {
                    setDisplay(true);
                    window.onmousemove = function (e) {
                        var x = e.clientX,
                            y = e.clientY;
                        tooltipElement.style.top = (y - 50) + 'px';
                        tooltipElement.style.left = (x + 20) + 'px';
                    };
                }
            };
            const handleHoverEnd = () => {
                if (tooltipTarget) setDisplay(false);
            };

            tooltipTarget.addEventListener('mouseover', handleHover);
            tooltipTarget.addEventListener('mouseout', handleHoverEnd);

            return () => {
                // Unbind event listeners on clean up
                tooltipTarget.removeEventListener('mouseover', handleHover);
                tooltipTarget.removeEventListener('mouseout', handleHoverEnd);
            };
        }, [ref]);
    };

    useTooltip(tooltipRef);

    return (
        <div className={'tooltip-wrapper' + `${display ? ' show' : ''}`}>
            {content}
        </div>
    );
};

Tooltip.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Tooltip;
