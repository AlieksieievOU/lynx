declare module 'react-usa-map' {
  import React from 'react';

  export interface USAMapProps {
    onClick?: (event: any) => void;
    width?: number;
    height?: number;
    title?: string;
    defaultFill?: string;
    customize?: {
      [key: string]: {
        fill?: string;
        onClick?: (event: any) => void;
      };
    };
  }

  const USAMap: React.FC<USAMapProps>;

  export default USAMap;
}
