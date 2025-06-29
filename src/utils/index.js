export * from './commonStyles';
export * from './layout';
export * from './typography';
export * from './grids';
// Add other re-exports as needed

import { layout } from './layout';

export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const components = {
  picBlock: combineClasses("picblock", layout.centerRow),
  textBlock: combineClasses("textblock", layout.centerColumn),
  card: combineClasses("card", layout.centerColumn),
  cardHeader: combineClasses("card-header", layout.centerRow),
  cardShell: combineClasses("shadow-lg rounded-lg p-6", layout.centerColumn),
};