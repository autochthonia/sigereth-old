import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

import { Body, BodyP } from './type';

export const mdBody = new Remarkable();
mdBody.renderer = new RemarkableReactRenderer({
  components: {
    p: BodyP,
  },
});

export const mdSpan = new Remarkable();
mdSpan.renderer = new RemarkableReactRenderer({
  components: {
    p: Body,
  },
});
