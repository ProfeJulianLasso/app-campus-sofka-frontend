import * as Popper from '@popperjs/core';
import { Content, roundArrow } from 'tippy.js';

export class TippyPropsModel {
  static get(
    content?: Content,
    placement: Popper.Placement = Popper.auto
  ): object {
    return {
      content,
      placement,
      animation: 'shift-away',
      arrow: roundArrow
    };
  }
}
