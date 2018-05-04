import { PortalWithState } from 'react-portal';
import PropTypes from 'prop-types';
import React from 'react';

import Sheet from '../../icons/Sheet';

const LinkCharacter = ({ linkToCharacter, availableCharacters }) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => (
      <React.Fragment>
        <Sheet size={18} css={{ cursor: 'pointer', ':hover': { fill: 'red' } }} onClick={openPortal} />
        {portal(
          <p>
            This is more advanced Portal. It handles its own state. <button onClick={closePortal}>Close me!</button>,
            hit ESC or click outside of me.
            {availableCharacters === null ? 'loading...' : availableCharacters.map(({ id }) => id)}
          </p>,
        )}
      </React.Fragment>
    )}
  </PortalWithState>
);

LinkCharacter.propTypes = {
  linkToCharacter: PropTypes.func.isRequired,
  availableCharacters: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default LinkCharacter;
