import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';

export default {
  title: 'ADS|BrandBook/Colors',

  parameters: {
    component: 'Colors',
  },
};

export const standard = () => (
  <>
    Table of colors:
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--c-system</td>
          <td style={{ backgroundColor: 'var(--c-system)' }}></td>
        </tr>
        <tr>
          <td>--c-primary</td>
          <td style={{ backgroundColor: 'var(--c-primary)' }}></td>
        </tr>
        <tr>
          <td>--c-secondary</td>
          <td style={{ backgroundColor: 'var(--c-secondary)' }}></td>
        </tr>
        <tr>
          <td>--c-gray</td>
          <td style={{ backgroundColor: 'var(--c-gray)' }}></td>
        </tr>
        <tr>
          <td>--c-success</td>
          <td style={{ backgroundColor: 'var(--c-success)' }}></td>
        </tr>
        <tr>
          <td>--c-alert</td>
          <td style={{ backgroundColor: 'var(--c-alert)' }}></td>
        </tr>
        <tr>
          <td>--c-error</td>
          <td style={{ backgroundColor: 'var(--c-error)' }}></td>
        </tr>
      </tbody>
    </table>
  </>
);

export const variations = () => (
  <>
    Table of colors:
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>*-light-4</th>
          <th>*-light-3</th>
          <th>*-light-2</th>
          <th>*-light-1</th>
          <th>*</th>
          <th>*-dark-1</th>
          <th>*-dark-2</th>
          <th>*-dark-3</th>
          <th>*-dark-4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>--c-primary</td>
          <td style={{ backgroundColor: 'var(--c-primary-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-primary-dark-4)' }}></td>
        </tr>
        <tr>
          <td>--c-secondary</td>
          <td style={{ backgroundColor: 'var(--c-secondary-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-secondary-dark-4)' }}></td>
        </tr>
        <tr>
          <td>--c-gray</td>
          <td style={{ backgroundColor: 'var(--c-gray-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-gray-dark-4)' }}></td>
        </tr>
        <tr>
          <td>--c-success</td>
          <td style={{ backgroundColor: 'var(--c-success-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-success-dark-4)' }}></td>
        </tr>
        <tr>
          <td>--c-alert</td>
          <td style={{ backgroundColor: 'var(--c-alert-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-alert-dark-4)' }}></td>
        </tr>
        <tr>
          <td>--c-error</td>
          <td style={{ backgroundColor: 'var(--c-error-light-4)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-light-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-light-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-light-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-dark-1)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-dark-2)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-dark-3)' }}></td>
          <td style={{ backgroundColor: 'var(--c-error-dark-4)' }}></td>
        </tr>
      </tbody>
    </table>
    Table of absolute colors
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>--c-system</th>
          <th>--c-white</th>
          <th>--c-black</th>
          <th>--c-highlight</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: 20 }}>
          <th></th>
          <th style={{ backgroundColor: 'var(--c-system)' }}></th>
          <th style={{ backgroundColor: 'var(--c-white)' }}></th>
          <th style={{ backgroundColor: 'var(--c-black)' }}></th>
          <th style={{ backgroundColor: 'var(--c-highlight)' }}></th>
        </tr>
      </tbody>
    </table>
    Table of social network colors
    <table>
      <thead>
      <tr>
        <th>name</th>
        <th>--c-facebook</th>
        <th>--c-twitter</th>
        <th>--c-google</th>
        <th>--c-youtube</th>
        <th>--c-whatsapp</th>
        <th>--c-instagram</th>
      </tr>
      </thead>
      <tbody>
      <tr style={{ height: 20 }}>
        <th></th>
        <th style={{ backgroundColor: 'var(--c-facebook)' }}></th>
        <th style={{ backgroundColor: 'var(--c-twitter)' }}></th>
        <th style={{ backgroundColor: 'var(--c-google)' }}></th>
        <th style={{ backgroundColor: 'var(--c-youtube)' }}></th>
        <th style={{ backgroundColor: 'var(--c-whatsapp)' }}></th>
        <th style={{ backgroundColor: 'var(--c-instagram)' }}></th>
      </tr>
      </tbody>
    </table>
  </>
);
