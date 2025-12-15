import type { JSX } from 'react';

export interface NavLink {
  path: string;
  label: string;
  icon: JSX.Element;
  onlyShowOnDropdownMenu?: boolean;
}

