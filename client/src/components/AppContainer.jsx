import React, { Component } from 'react';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            yearReleased: 0,
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
    loadData = async () => {
        let response = await fetch('/api');
        console.log(response);
        let json = await response.json();
        //sanity
        console.table(json);
        this.setState({ movieArray: json })
    }

    handleInputs = (event) => {
        if (event.target.name === 'title') {
            this.setState({ title: event.target.value })
        } else if (event.target.name === 'year') {
            this.setState({ yearReleased: event.target.value })
        }
    }

    //make method asyncronous for the fecth
    handleSubmission = async (event) => {
        event.preventDefault();
        //what allows us to send json data
        let formData = {
            title : this.state.title,
            yearReleased : this.state.yearReleased
        }
        let response = await fetch('/api', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(formData)
        })
        let json = await response.json();
        //sanity
        console.log(json);

        // console.log(this.state)
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

                                <div key={movie._id}>
                                    <p>Movie Title: {movie.title}</p>

                                    <p>Year Released: {movie.yearReleased}</p>
                                    <hr />
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