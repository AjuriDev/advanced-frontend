import { forwardRef, Ref } from 'react';

const SvgrMock = forwardRef((
  props,
  ref:Ref<HTMLSpanElement>,
) => (
  <span ref={ref} {...props} />
));

export { SvgrMock as ReactComponent };
export default SvgrMock;
