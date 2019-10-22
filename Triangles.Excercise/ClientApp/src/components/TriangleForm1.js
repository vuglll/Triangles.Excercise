import React from 'react';
import SvgGrid from './SvgGrid';
import ShakingError from './ShakingError'

const inputParsers = {
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};



export default class TriangleForm1 extends React.Component {
    constructor() {
        super();
        this.state = {
            triangle: {},
            invalid: false,
            fetched: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    


    handleSubmit(event) {
        
        event.preventDefault();
        

        if (!event.target.checkValidity()) {
            this.setState({ invalid: true, fetched: false, triangle: {} });
            return;
        }
        
        

        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;
            //console.log('parser name is', parserName);
            if (parserName) {
                const parsedValue = inputParsers[parserName](data.get(name))
                data.set(name, parsedValue);
            }
        }

        const value = data.get('id')

        let fieldValid = value.match(/^([A-F])([1-9]|1[012])$/);
        if (!fieldValid) {
                this.setState({ invalid: true, fetched: false, triangle: {} });
                return;
        }
        

        fetch('/api/v1/triangles/' + data.get('id'))
            .then(response => response.json())
            .then(data => this.setState({ triangle: data, invalid: false, fetched:true }));;
    }

    render() {
        const { triangle, invalid, fetched } = this.state;
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit} noValidate>
                    <label className="from-control mb-2" htmlFor="id">Triangle position:</label>
                    <input
                        id="id"
                        name="id"
                        type="text"
                        data-parse="uppercase"
                        placeholder="i.e. A1 or C6"
                        className="form-control mb-2 mr-sm-2"
                        required
                    />
                    
                    <button className=" btn btn-primary mb-2">Get triangle</button>
                </form>



                <div className="res-block">
                    {invalid && (
                        <ShakingError text="Triangle position is not valid. Only A-F adn 1-12 are valid row/column." />
                    )}
                </div>
                <br />
                {fetched ? (<SvgGrid points={triangle.svg} />) : (
                    <SvgGrid />
                )}

            </div>
        );
    }
};
