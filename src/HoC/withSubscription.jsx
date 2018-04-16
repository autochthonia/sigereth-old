import { lifecycle } from 'recompose';

export default WrappedComponent =>
  lifecycle({
    componentDidMount() {
      if (this.props.subscribe && typeof this.props.subscribe === 'function') {
        console.debug(`subscribing to '${this.props.id}'`);
        this.props.subscribe();
      }
    },
  })(WrappedComponent);
