import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from "./components/Notification/Notification";
import { Container } from "./App.styled";

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onClickStatistics = (e) => {
    const { name } = e.currentTarget;
    this.setState({ [name]: this.state[name] + 1 })
  };

  countTotalFeedback = () => {
    return Object.values( this.state ).reduce(( acc,cur ) => acc += cur, 0)
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.floor(( good * 100 ) / total)
  };

  showStats = () => {
    return this.countTotalFeedback() > 0
  };

  render() {
    const notification = "No feedback given yet...";
    const title = "Please leave feedback";
    const btnNames = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage()
    return (
      <Container>
        <Section title={ title }>
          <FeedbackOptions  names={ btnNames }  onClick={this.onClickStatistics}/>
            {this.showStats() ?
            <Statistics 
              state={ this.state }
              total={ total } 
              percentage={ percentage }
            />
          :
          <Notification notification={ notification }/>
          }
        </Section>
      </Container>
    );
  }
}

export default App;
