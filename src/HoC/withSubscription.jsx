import { lifecycle } from 'recompose';

export default WrappedComponent =>
  lifecycle({
    componentDidMount() {
      if (this.props.subscribe && typeof this.props.subscribe === 'function') {
        this.props.subscribe();
      } else {
        console.error('this.props.subscribe is missing or not a function')
      }
    },
  })(WrappedComponent);
