export const REFLEXIVE = { id: 'REFLEXIVE', text: 'Reflexive' };
export const INSTANT = { id: 'INSTANT', text: 'Instant' };
export const SUPPLEMENTAL = { id: 'SUPPLEMENTAL', text: 'Supplemental' };
export const SIMPLE = { id: 'SIMPLE', text: 'Simple' };
export const PERMANENT = { id: 'PERMANENT', text: 'Permanent' };
export const charmTypes = [REFLEXIVE, INSTANT, SUPPLEMENTAL, SIMPLE, PERMANENT];

export const gracefulCraneStance = {
  name: 'Graceful Crane Stance',
  cost: '3m',
  mins: 'Athletics 1, Essence 1',
  type: REFLEXIVE,
  keywords: 'None',
  duration: 'One Scene',
  prereqs: 'None',
  text:
    'The Solar draws Essence through her pores and into her bones, suffusing and lightening her form and steadying her step. For the rest of the scene, she has perfect balance, and can stand or run on things too narrow or weak to support her normally, with no chance of falling or breaking through. She can run on a guy wire, stand on a crumbling parapet, balance on the tip of a pine tree, and perform many similar feats without needing to roll (Dexterity + Athletics).',
};

export const shockwaveTechnique = {
  name: 'Shockwave Technique',
  cost: '6m, 1wp',
  mins: 'Brawl 5, Essence 3',
  type: REFLEXIVE,
  keywords: 'Withering-only',
  duration: 'Instant',
  prereqs: 'Crashing Wave Throw',
  text:
    'The Solar burns with Essence, launching a captive at a group of foes. When the Solar hurls her captive at a group of foes, the damage roll is enhanced by 4 dice per round of control forfeited by the throw, as described on page 201. The Solar throws her opponent at a target within short range; her captive goes from her like a meteor, blasting through her target and every opponent within short range of him, applying a single Dexterity + Brawl **withering** attack with a base damage of seven to all **additional** opponents. Foes struck by this explosive impact are knocked to the ground, and the damage of the throw is applied to each of them separately. If the Solar is crashed when she uses this attack, she still damages each foe, but she only gains Initiative from a single target. When used in combination with Crashing Wave Throw, not only is the damage of this throw enhanced, but also its range, allowing the Solar to strike enemies out to medium range without spending rounds of control per the rules of Crashing Wave Throw.\n\n**Special activation rules:** Shockwave Technique can be used once per combat. In order to reset it, the Solar must deal 10+ health levels of damage on a single **decisive** Brawl attack.',
};

export const wdcEvos = [
  {
    name: 'Single Watchful Snake-eye',
    cost: '1i per 1sm, 1wp',
    mins: 'Essence 1',
    type: SUPPLEMENTAL,
    keywords: 'None',
    duration: 'Instant',
    prereqs: 'None',
    text:
      'Legends abound of dragons sleeping with a single eye open, watchful of danger.  So too does the wielder’s inner dragon slumber waiting to spring forth at the first sign of combat.  This evocation supplements a Join Battle by allowing the wielder to convert initiative on the Join Battle roll into sorcerous motes used only for casting Wood Dragon’s Claws.  This may allow the wielder to cast Wood Dragon’s Claws as a part of her Join Battle Roll.  When she does so, the Wood Dragon’s Claws each have a single snake-eye blossom upon them.',
  },
  {
    name: 'Adroit Coiled Snapdragon',
    cost: '- (3m, 1wp)',
    mins: 'Essence 1',
    type: PERMANENT,
    keywords: 'None',
    duration: 'Permanent',
    prereqs: 'Single Watchful Snake-eye',
    text:
      'Coiled tightly within the wielder, the spirit of the snapdragon flower waits for release at the first hint of danger.  This evocation allows the wielder to activate a martial arts style charm reflexively when casting Wood Dragon’s Claws for 3 motes and 1 willpower.  Doing so causes snapdragons to bloom on the wood dragon’s claws.\n\n**Special activation rules:** If used on the same turn that the wielder activates Single Watchful Eye Slumbering than the willpower cost for this evocation is waived.\n\nThis evocation may only be used to activate martial arts style charms that use unarmed attacks or claws (such as Snake Style, Tiger Style, and Black Claw).',
  },
  {
    name: 'Virulent Draconic Efflorescence',
    cost: '3m',
    mins: 'Essence 2',
    type: SUPPLEMENTAL,
    keywords: 'Uniform, Stackable',
    duration: 'Instant',
    prereqs: 'Adroit Coiled Snapdragon',
    text:
      'The cloying fragrance of the hemlock, the sweet fruit of nightshade, and the vivid colors of the oleander all lie within the springtime exuberance of the Wood Dragon’s Spirit.  This evocation allows the wielder to draw upon the natural beauty of spring to sprout beautiful and deadly flowers that supplement your poison attacks for the rest of the scene.\n\n* Hemlock: This delicate white flower holds the title of most poisonous plant.  Your poisons damage increases by 1 damage per turn. This effect can be stacked multiple times.\n* Nightshade: As pernicious as it’s fruits are sweet and delectable; the body is loathed to rid itself of this delicious toxin.  The duration of your poison is increased by 1 turn.\n* Oleander: The poison, like the plant, is as tough as the flower is beautiful.  The duration of your poisons may not be reduced below one round.\n\n**Special activation rules:** This evocation may only be purchased by characters with Dexterity 4+ and Appearance 4+.',
  },
  {
    name: 'Wreathing Bougainvillea Thorns',
    cost: '4m',
    mins: 'Essence 1',
    type: REFLEXIVE,
    keywords: 'None',
    duration: 'One Scene',
    prereqs: 'None',
    text:
      'Thorns and flowered vines sprout from Wood Dragon’s Claws to spiral up the arm of the Wielder both protecting her and making attacks against her more dangerous.  She gains half her appearance as soak and her counterattacks cost 1m less.\n\n**Special activation rules:** This charm awakens and activates at no cost the first time the wielder fails a Parry by 1.',
  },
];
