import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            year: 0,
            movieArray: [],
        }
    }
//TEST TO MAKE SURE THE FRONT END IS WORKING COORECTLY
    componentDidMount = () => {
        // this.state.movieArray.push(
        //     {
        //         title : 'Hook',
        //         year:1991
        //     }
        // )

        // this.state.movieArray.push(
        //     {
        //         title : 'Wall-e',
        //         year: 2010
        //     }
        // )
        //     //reset array globally
        // this.setState({movieArray : this.state.movieArray});

        this.loadData();
    }

    //fetch our own database/pass in path of route
    loadData = async() => {
        let response = await fetch('/api');
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
    }

    handleInputs = (event) => {
        if (event.target.name === 'title') {
            this.setState({ title: event.target.value })
        } else if (event.target.name === 'year') {
            this.setState({ year: event.target.value })
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Simple MERN App</h1>
                <form action="">

                    <label htmlFor="title">Movie Title</label>
                    <br />
                    <input type="text" name='title' id='title' value={this.state.title} onChange={this.handleInputs} />
                    <br />
                    <br />
                    <label htmlFor="year">Year Released</label>
                    <br />
                    <input type="number" name='year' id='year' value={this.state.year} onChange={this.handleInputs} />
                    <br />
                    <br />
                    <button onClick={this.handleSubmission}>Submit</button>
                </form>

                <div>
                    {
                        this.state.movieArray.map((movie, index) => {
                            return (
                                <div key={index}>
                                    <p>Movie Title: {movie.title}</p>
                                    <p>Year Released: {movie.year}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}

export default AppContainer;