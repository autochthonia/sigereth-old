import { PortalWithState } from 'react-portal';
import PropTypes from 'prop-types';
import React from 'react';

import Sheet from '../../icons/Sheet';

const LinkCharacter = ({ linkToCharacter, availableCharacters, combatantId }) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => (
      <React.Fragment>
        <Sheet size={18} css={{ cursor: 'pointer', ':hover': { fill: 'red' } }} onClick={openPortal} />
        {portal(
          <p>
            <button onClick={closePortal}>Close me!</button>
            Link combatant: {combatantId} to:
            {availableCharacters === null
              ? 'loading...'
              : availableCharacters.map(({ id: characterId, name: characterName }) => (
                  <button
                    onClick={() =>
                      linkToCharacter({
                        variables: { characterId, combatantId },
                      })
                    }
                  >
                    {characterName}
                  </button>
                ))}
          </p>,
        )}
      </React.Fragment>
    )}
  </PortalWithState>
);

LinkCharacter.propTypes = {
  combatantId: PropTypes.string.isRequired,
  linkToCharacter: PropTypes.func.isRequired,
  availableCharacters: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default LinkCharacter;
