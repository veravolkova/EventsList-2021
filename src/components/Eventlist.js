import React, { Component } from 'react';
import { SERVER_URL } from '../constants.js';
import LoaderScreen from './LoaderScreen';
import ErrorScreen from './ErrorScreen';
import GridLayout from './GridLayout';

class Eventlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: true,
      error: null,
      currentPage: 1,
      eventsPerPage: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    fetch(SERVER_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          events: responseData.data,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { events, currentPage, eventsPerPage } = this.state;

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(
      indexOfFirstEvent,
      indexOfLastEvent
    );

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(events.length / eventsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          style={paginationStyle}
        >
          {number + '  '}
        </li>
      );
    });

    return this.state.isLoading ? (
      <div>
        <LoaderScreen />
      </div>
    ) : this.state.error ? (
      <div>
        <ErrorScreen />
      </div>
    ) : (
      <div>        
          <ul style={{ padding: 10, margin: 15}}>
            <GridLayout events={currentEvents} />
          </ul>
          <ul marginBottom='10px'>{renderPageNumbers}</ul>
    </div>     
    );
  }
}

export default Eventlist;

const paginationStyle = {
  display: 'inline',      
  padding: 5, 
  color: 'blue',      
  cursor: 'pointer',
  marginBottom: '10px',  
}
