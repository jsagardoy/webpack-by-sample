import * as React from 'react';
import {getAvg} from './averageService';

interface State {
   scores : number[];
   average: number;
}

export class AverageComponent extends React.Component<{}, State> {
  constructor(props) {
    super(props);
1
    this.state = {
      scores: [90, 75, 60, 99, 94, 30],
      average: 0,
    };
  }

  componentDidMount() {
    this.setState({average: getAvg(this.state.scores)});
  }

  render() {
    return (
      <div>
        <span>Students average: {this.state.average}</span>
      </div>
    );
  }
}
