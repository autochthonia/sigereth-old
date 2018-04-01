import { css } from 'emotion';
import React from 'react';
import styled from 'react-emotion';

import { Body, BodyDiv, BodyP, H4, H5, H6 } from '../../styles/type';
import { mdSpan, mdBody } from '../../styles/markdown';

const QuickCharacterWrapper = styled.div({});
const Name = H4;
const Description = Body;
const Section = styled.section({
  ':not(:last-child)': {
    marginBottom: '1.5em',
  },
});

const renderMotes = (personalMotes, peripheralMotes) => {
  if (!personalMotes && !peripheralMotes) return null;
  return (
    <BodyDiv>
      {personalMotes && (
        <span>
          <b>Personal Motes:</b> {personalMotes}
        </span>
      )}
      {personalMotes && peripheralMotes && '; '}
      {peripheralMotes && (
        <span>
          <b>Peripheral Motes:</b> {peripheralMotes}
        </span>
      )}
    </BodyDiv>
  );
};

const QuickCharacter = ({
  name,
  description,
  essence,
  willpower,
  joinBattle,
  personalMotes,
  peripheralMotes,
  healthLevels,
  actions,
  appearance,
  hideous,
  resolve,
  guile,
  attacks,
  combatMovement,
  evasion,
  parry,
  soak,
  hardness,
  charms = [],
}) => (
  <QuickCharacterWrapper>
    <Section>
      <Name>{name}</Name>
      <Description>{mdBody.render(description)}</Description>
    </Section>
    <Section>
      <BodyDiv>
        <b>Essence:</b> {essence}; <b>Willpower:</b> {willpower}; <b>Join Battle:</b> {joinBattle} dice
      </BodyDiv>
      {renderMotes(personalMotes, peripheralMotes)}
      <BodyDiv>
        <b>Health Levels:</b> {healthLevels}
      </BodyDiv>
      <BodyDiv>
        <b>Actions:</b> {mdSpan.render(actions)}
      </BodyDiv>
      <BodyDiv>
        Appearance {appearance}
        {hideous && ' (Hideous)'}, Resolve {resolve}, Guile {guile}
      </BodyDiv>
    </Section>

    <Section>
      <H5>Combat</H5>
      {attacks.map((a, i) => <BodyDiv key={i}>Attack {a}</BodyDiv>)}
      <BodyDiv>Combat Movement: {combatMovement} dice</BodyDiv>
      <BodyDiv>
        Evasion: {evasion}, Parry: {parry}
      </BodyDiv>
      <BodyDiv>
        Soak/Hardness: {soak}/{hardness}
      </BodyDiv>
    </Section>

    {charms.map(({ label, charms: chrms }) => (
      <Section>
        <H6 className={css({ marginBottom: '0.5em' })}>{label}</H6>
        {chrms.map(c => mdBody.render(c))}
      </Section>
    ))}
  </QuickCharacterWrapper>
);

export default QuickCharacter;

export const b2loodApe = {
  name: 'Erymanthus, the Blood-Ape, Demon of the First Circle',
  description:
    'An erymanthus has the body of a massive, gnarled ape. Tufts of rust-red fur spatter its rubbery black hide, while jagged spurs of black bone jut from its shoulders, spine and skull. Its heavy, twisted limbs end in great black talons, and its pupil-less eyes glow as golden as a snake’s. Though its shambling gait appears clumsy, it moves with uncanny speed to match its unnatural strength. When pressing itself to its utmost, the blood-ape can leap or strike faster than the eye can see, or bellow with such force that its voice alone shatters stone or steel.\n\nMost erymanthoi prefer to remain in physical form. Even when compelled to dematerialize, their thick animal stench hangs heavy on the air. Their snuffling and grunting like- wise remains audible, as does the scrape and thump of their lumbering gait, and one can sometimes catch glimps- es of them out of the corner of the eye.\n\nThese vicious, brutal creatures prize hot fresh gore. While a few have unusually eclectic or catholic tastes, most favor the blood of humans and cats. This craving makes them difficult to control. If a blood-ape grows hungry enough, only its master’s express command will hold it back from satiating its appetite.',
  essence: 2,
  willpower: 5,
  joinBattle: 6,
  personalMotes: 70,
  healthLevels: '-0/-1x3/-2x3/-4/Incap.',
  actions:
    'Climbing and Brachiation: 7 dice; Feats of Strength: 10 dice (may attempt Strength 5 feats); Resist Poison/Illness: 8 dice; Senses: 6 dice; Stealth: 6 dice; Threaten: 7 dice; Tracking: 5 dice',
  appearance: 3,
  hideous: true,
  resolve: 3,
  guile: 1,
  attacks: ['(Claw): 11 dice (Damage 15)', '(Grapple): 8 dice (10 dice to control)'],
  combatMovement: 7,
  evasion: 2,
  parry: 4,
  charms: [
    {
      label: 'Offensive Charms',
      charms: [
        'Brutal Ape Pounce (4m; Simple; Instant; Withering-only; Essence 1): If the blood-ape deals 5+ damage to an enemy with this withering attack, that character is knocked prone. If the Initiative damage brought them below the demon’s Initiative, the blood-ape may pay a point of Willpower to re- flexively make a decisive attack against them. The reflexive attack power of this Charm can only be used once per fight unless reset by landing three successful withering attacks.',
        'Principle of Motion (10m, 1wp; Reflexive; Instant; Essence 2): The blood-ape moves with blinding speed, taking a flurry without the usual restrictions—it can flurry two of the same action if desired, and it ignores the usual penalties to dice pools and Defense.',
        'Rending Claw Slash (5m, 1i; Supplemental; Instant; Uniform; Essence 1): When the blood-ape savages a grap- pled enemy, it doubles 9s on the damage roll. If it receives 6+ extra successes on the attack roll, double 8s as well.',
        'Shattering Roar (15m, 1wp; Simple; Instant; Dual; Essence 2): The blood-ape emits a howl potent enough to pulp flesh and pulverize bone, attacking an enemy out to medium range with a roll of nine dice. Withering howls have a base damage of 20. Decisive attacks add extra suc- cesses to their raw damage, and deal bashing damage. Once per fight, unless reset by moving to pursue an enemy after a successful rush.',
      ],
    },
    {
      label: 'Miscellaneous Charms',
      charms: [
        'Destructive Force (3m or 1i; Supplemental; Instant; Essence 1): The erymanthus adds three bonus successes on a feat of strength to destroy an object or obstacle.',
        'Hurry Home (10m, 1wp; Simple; Instant; Essence 1): The demon fades away and vanishes on its next turn, drawn instantly to its summoner’s side. This Charm is unavail- able when the demon is unbound.',
        'Materialize (35m, 1wp; Simple; Instant; Essence 1): Bloody, stinking ropes of muscle and flesh lash themselves togeth- er from thin air, building the blood-ape a physical form.',
        'Measure the Wind (5m; Simple; Instant; Essence 1): The erymanthus can discern the nature of anyone whose blood it tastes.',
      ],
    },
  ],
};
