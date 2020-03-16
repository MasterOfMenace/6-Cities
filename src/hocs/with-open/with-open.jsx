import React from 'react';

const withOpen = (Component) => {
  class WithOpen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isOpen: false
      };
    }

    render() {
      const {isOpen} = this.state;
      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          openClickHandler={() => {
            this.setState({isOpen: !isOpen});
          }}
        />
      );
    }
  }

  return WithOpen;
};

export default withOpen;
