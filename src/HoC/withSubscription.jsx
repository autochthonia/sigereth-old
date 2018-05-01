import { lifecycle } from 'recompose';

export default WrappedComponent =>
  lifecycle({
    componentDidMount() {
      if (this.props.subscribe && typeof this.props.subscribe === 'function') {
        this.props.subscribe();
      }
    },
  })(WrappedComponent);
