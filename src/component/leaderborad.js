import React, { Component } from 'react';
import Nav from './nav';
import './leaderborad.css';
import Footer from './footer';
import group from './photos/group.png'
import Heart from './photos/heart.png'
class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboardData: [],
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://127.0.0.1:8000/books/'); // Update with your API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const jsonData = await response.json();
      this.setState({
        leaderboardData: jsonData,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  render() {
    const { leaderboardData, loading, error } = this.state;

    return (
      <div >
        <Nav></Nav>
          <div className='table'>
            <div className='cover'>
            <img src={group} class="img-fluid" alt="Responsive image"/>
            </div>
            <div className='d-flex justify-content-center table-fix'>
              <div className='table-content'>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <table className="table table-rank">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Room </th>
                        <th>Liked</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((book) => (
                        <tr key={book.id} className='table-heart'>
                          <td>{book.id}</td>
                          <td>{book.title}</td>
                          <td><img src={Heart} alt='heart' />{book.like_count}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Leaderboard;
