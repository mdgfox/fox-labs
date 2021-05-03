import React from 'react';

export interface PaperProps {
  id?: string;
  container?: 'flex' | 'block';

}

export const Paper: React.FC<PaperProps> = ({ id, container, }) => {
    console.log(id);
    console.log(container);
    return (
        <div>
          This is test paper!
        </div>
    );
};
