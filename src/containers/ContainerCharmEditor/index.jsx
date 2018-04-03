import { withStateHandlers } from 'recompose';

import { demoCharm } from '../../mocks/charm';
import CharmEditor from '../../pages/CharmEditor';

const LocalStorageCharmEditor = withStateHandlers(
  {
    charms: JSON.parse(localStorage.getItem('CharmEditor/charms')) || [],
    editable: false,
  },
  {
    addCharm: state => () => {
      const newCharms = [...state.charms, demoCharm];
      console.debug("Setting1 localStorage['CharmEditor/charms']", newCharms);
      localStorage.setItem('CharmEditor/charms', JSON.stringify(newCharms));
      return { ...state, charms: newCharms };
    },
    onChange: (state, props) => (charm, index) => {
      const newCharms = state.charms.map((c, idx) => (index === idx ? charm : c))
      console.debug("Setting1 localStorage['CharmEditor/charms']", newCharms);
      localStorage.setItem('CharmEditor/charms', JSON.stringify(newCharms));
      return { ...state, charms: newCharms };
    },
    toggleEditable: state => () => ({ ...state, editable: !state.editable }),
  },
)(CharmEditor);

export default LocalStorageCharmEditor;
