import React from 'react';
import { useScrollTrigger } from '@mui/material';

export default function ScrollEffect(props) {
  const {
    threshold,
    elevationBefore,
    elevationAfter,
    bgColorBefore,
    bgColorAfter,
    textColorBefore,
    textColorAfter,
    paddingBefore,
    paddingAfter,
    opacityBefore,
    opacityAfter,
    fadeIn,
    fadeOut,
    children,
    ...other
  } = {
    threshold: 0,
    elevationBefore: 0,
    elevationAfter: 2,
    bgColorBefore: 'white',
    bgColorAfter: 'white',
    textColorBefore: 'black',
    textColorAfter: 'black',
    paddingBefore: '0.5rem',
    paddingAfter: '0',
    opacityBefore: 1,
    opacityAfter: 0.8,
    fadeIn: '0.3s ease-in',
    fadeOut: '0.3s linear',
    ...props,
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? elevationAfter : elevationBefore,
    style: {
      paddingTop: trigger ? paddingAfter : paddingBefore,
      paddingBottom: trigger ? paddingAfter : paddingBefore,
      backgroundColor: trigger ? bgColorAfter : bgColorBefore,
      color: trigger ? textColorAfter : textColorBefore,
      opacity: trigger ? opacityAfter : opacityBefore,
      transition: trigger ? fadeIn : fadeOut,
    },
    ...other,
  });
}
