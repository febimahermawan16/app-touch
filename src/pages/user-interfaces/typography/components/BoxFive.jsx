import React, { Component } from 'react'

export class BoxFive extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6 mgt-15">
                    <div className="card">
                        <div className='card-header'>
                            <div className="card-title">Text Component</div>
                        </div>
                        <div className='card-body'>
                            <div className="card-text mgb-15">
                                In this theme i'm not really re-create component style, for some component i leave the current style. So this is component for your font/text in this stylesheet.
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Bootstrap Font Color</div>
                                    <div className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-primary">.text-primary</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-secondary">.text-secondary</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-success">.text-success</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-danger">.text-danger</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-warning">.text-warning</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-info">.text-info</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="text-light">.text-light</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-dark">.text-dark</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="text-muted">.text-muted</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mgt-15">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Font Color</div>
                                    <span className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white">.tcolor-white</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white-2">.tcolor-white-2</span>
                                            </div>
                                            <div className="col-md-4 mgb-5 bg-dark">
                                                <span className="tcolor-white-3">.tcolor-white-3</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black-1">.tcolor-black-1</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black-2">.tcolor-black-2</span>
                                            </div>
                                            <div className="col-md-4 mgb-5">
                                                <span className="tcolor-black-3">.tcolor-black-3</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div className="card mgt-15">
                                <div className="card-body">
                                    <div className="card-text text-w-700 mgb-10">Bootstrap Text Element</div>
                                    <span className="full-width df-fdr pdh-15">
                                        <div className="row">
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <span className="lead"><code>.lead</code></span> Class</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <mark>Mark</mark> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <del>del</del> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <s>s</s> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <ins>ins</ins> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <u>u</u> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <small>small</small> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <strong>strong</strong> Tag</span>
                                            </div>
                                            <div className="col-md-12 mgb-5">
                                                <span>This is <em>em</em> Tag</span>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BoxFive
