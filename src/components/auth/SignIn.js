import React, { Component } from 'react';

export default class Signin extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="small-8 columns">
            <div className="row">
              <div className="small-3 columns">
                <label htmlFor="right-label" className="right inline">Label</label>
              </div>
              <div className="small-9 columns">
                <input type="text" id="right-label" placeholder="Inline Text Input" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="small-8 columns">
            <div className="row">
              <div className="small-3 columns">
                <label htmlFor="right-label" className="right inline">Label</label>
              </div>
              <div className="small-9 columns">
                <input type="text" id="right-label" placeholder="Inline Text Input" />
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
