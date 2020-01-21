import React from 'react';

import Popover from './Popover';
import Typography from '../typography/Typography';


export default {
  title: 'ADS|Molecule/Popover',

  parameters: {
    component: Popover,
  },
};

export const standard = () => {
  return (
    <div>
      <Popover>
        <Popover.Target>
          <Typography.H1 className="btn btn-primary">I have the popover!</Typography.H1>
        </Popover.Target>
        <Popover.Content>I'm popover!</Popover.Content>
      </Popover>
    </div>
  );
}
