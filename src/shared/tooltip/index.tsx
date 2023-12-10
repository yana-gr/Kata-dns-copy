import React from 'react';
import classes from './tooltip.module.scss';
import { TooltipType } from 'shared/types';

const Tooltip: React.FC<TooltipType> = ({ content, isHovered }) => {
  let classnameContainer = classes.tooltip__container_hoovered;
  isHovered
    ? (classnameContainer = classes.tooltip__container_active)
    : (classnameContainer = classes.tooltip__container_hoovered);

  return (
    <div className={classnameContainer}>
      <div className={classes.tooltip__content}>{content}</div>
    </div>
  );
};

export default Tooltip;
