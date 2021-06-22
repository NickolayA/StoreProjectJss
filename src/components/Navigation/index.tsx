import React from 'react';

interface INavigation {
  rendering: {
    componentName: string;
  };
}

export const Navigation = (props: INavigation) => {
  return (
    <div>
      <p>Navigation Component 2</p>
      <p>Component Name: {props.rendering.componentName}</p>
    </div>
  );
};
