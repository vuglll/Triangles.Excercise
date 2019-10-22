import React from 'react';
import SvgGrid from './SvgGrid';
import ShakingError from './ShakingError'

export default class TriangleForm2 extends React.Component {
    constructor() {
        super();
        this.state = {
            triangle: {},
            invalid: false,
            fetched: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateField(fieldName, value, result) {
        let trianglePositionValid = this.state.invalid;
        
        switch (fieldName) {
            case 'id':
                trianglePositionValid = value.match(/^([A-F][1-9]|1[012])$/i);
                break;
            default:
                break;
        }
        console.log('inside valition ' + trianglePositionValid );

        result = !trianglePositionValid;
        return result;
    }


    async handleSubmit(event) {
        
        event.preventDefault();
        


        const form = event.target;
        const data = new FormData(form);


        const v1 = data.get('v1')

        var v1x = v1.split(',')[0].trim();
        var v1y = v1.split(',')[1].trim();

        const v2 = data.get('v2')

        var v2x = v2.split(',')[0].trim();
        var v2y = v2.split(',')[1].trim();

        const v3 = data.get('v3')

        var v3x = v3.split(',')[0].trim();
        var v3y = v3.split(',')[1].trim();

        const params = new URLSearchParams();
        params.append('v1x', v1x);
        params.append('v1y', v1y);
        params.append('v2x', v2x);
        params.append('v2y', v2y);
        params.append('v3x', v3x);
        params.append('v3y', v3y);


        let response;
        try {
            response = await fetch('/api/v1/triangles?' + params.toString());
        } catch (ex) {
            this.setState({ invalid: true, fetched: false, triangle: {} });
            return;
        }
        if (!response.ok) {
            this.setState({ invalid: true, fetched: false, triangle: {} });
            return;
        }

        response.json().then(data => this.setState({ triangle: data, invalid: false, fetched: true }));
        
    }

    render() {
        const { triangle, invalid, fetched } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="form-group row">
                        <label className="fcol-sm-2 col-form-label" htmlFor="id">V1:</label>
                        <div className="col-sm-10">
                            <input id="v1" name="v1" type="text" placeholder="x₁, y₁" className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="fcol-sm-2 col-form-label" htmlFor="id">V2:</label>
                        <div className="col-sm-10">
                            <input id="v2" name="v2" type="text" placeholder="x₂, y₂" className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="fcol-sm-2 col-form-label" htmlFor="id">V3:</label>
                        <div className="col-sm-10">
                            <input id="v3" name="v3" type="text" placeholder="x₃, y₃" className="form-control" required />
                        </div>
                    </div>
                    <button className=" btn btn-primary mb-2">Get triangle</button>
                </form>

                <div className="res-block">
                    {invalid && (
                        <ShakingError text="Bad coordinates for triangle" />
                    )}
                </div>
                <div className="res-block">
                    {fetched ?  (
                        <ShakingError text={triangle.displayName} />
                    ) :""}
                </div>
            
                <br />
                {fetched ? (<SvgGrid points={triangle.svg} />) : (
                    <SvgGrid />
                )}

            </div>
        );
    }
};
