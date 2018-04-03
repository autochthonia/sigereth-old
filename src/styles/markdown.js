import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';

import { A, Body, BodyP } from './type';

export const mdBody = new Remarkable();
mdBody.renderer = new RemarkableReactRenderer({
  components: {
    p: BodyP,
    a: A,
  },
});

export const mdSpan = new Remarkable();
mdSpan.renderer = new RemarkableReactRenderer({
  components: {
    p: Body,
    a: A,
  },
});
