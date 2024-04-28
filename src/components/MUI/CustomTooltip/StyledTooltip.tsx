import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StyledTooltip = styled(
  ({ className, children, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }}>
      {children}
    </Tooltip>
  )
)(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: '3px 16px',
    fontSize: 16,
    lineHeight: 1.625,
    fontWeight: 400,
    color: '#FFFFFF',
    backgroundColor: '#000000DE',
  },
}));

export default StyledTooltip;
