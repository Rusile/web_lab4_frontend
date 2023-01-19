import './Graph.scss'

import React, {useEffect} from 'react';
import {fetchGetAllHitsByR, fetchHitCheck} from "../../../../redux/actions";
import {connect} from "react-redux";

const Graph = (props) => {

    useEffect(() => {
        props.fetchGetAllHitsByR(props.currentEnteredR);
    }, []);


    const handleEvent = (event) => {
        if (props.graphIsLoading) {
            return
        }
        event.preventDefault();
        const hit = {
            x: ((event.nativeEvent.offsetX - 150) / 100 * props.currentEnteredR).toFixed(2),
            y: ((150 - event.nativeEvent.offsetY) / 100 * props.currentEnteredR).toFixed(2),
            r: props.currentEnteredR,
        }
        props.fetchCheckHit(hit);
    }

    return (
        <div className="graph-wrapper tile">
            <svg className="graph-svg" id="graph-svg" onClick={handleEvent}>

                <line x1="0" x2="300" y1="150" y2="150"></line>
                <line x1="150" x2="150" y1="0" y2="300"></line>

                <polygon points="150,0 145,15 155,15"></polygon>
                <polygon points="300,150 285,145 285,155"></polygon>

                <polygon points="150,150 250,150 150,100"></polygon>

                <polygon points="150,150 50,150 50,100 150,100"></polygon>

                <path d="M200,150 A50,50 90 0,1 150,200 L 150,150 Z"></path>

                <text x="285" y="135">X</text>
                <text x="160" y="15">Y</text>

                <line x1="50" x2="50" y1="140" y2="160"></line>
                <line x1="100" x2="100" y1="140" y2="160"></line>
                <line x1="200" x2="200" y1="140" y2="160"></line>
                <line x1="250" x2="250" y1="140" y2="160"></line>

                <line x1="140" x2="160" y1="50" y2="50"></line>
                <line x1="140" x2="160" y1="100" y2="100"></line>
                <line x1="140" x2="160" y1="200" y2="200"></line>
                <line x1="140" x2="160" y1="250" y2="250"></line>

                <text x="50" y="130" textAnchor="middle" id="-r">{-props.currentEnteredR}</text>
                <text x="98" y="130" textAnchor="middle" id="-r2">{-props.currentEnteredR / 2}</text>
                <text x="200" y="130" textAnchor="middle" id="r2">{props.currentEnteredR / 2}</text>
                <text x="250" y="130" textAnchor="middle" id="r">{props.currentEnteredR}</text>

                <text x="170" y="52.5" id="r">{props.currentEnteredR}</text>
                <text x="170" y="102.5" id="r2">{props.currentEnteredR / 2}</text>
                <text x="170" y="202.5" id="-r2">{-props.currentEnteredR / 2}</text>
                <text x="170" y="252.5" id="-r">{-props.currentEnteredR}</text>

                {
                    props.graphHitsList.map((hit) => {
                        return (
                            <circle key={hit.id}
                                    cx={150 + hit.x * 100 / hit.r}
                                    cy={150 - hit.y * 100 / hit.r}
                                    r="4"
                                    className={hit.status ? "graph-svg-hit-success" : "graph-svg-hit-miss"}
                            />
                        );
                    })
                }
            </svg>
        </div>
    )

};

const mapStateToGraphProps = (state) => {
    return {
        graphHitsList: state.graphHitsList,
        graphIsLoading: state.graphIsLoading,
        currentEnteredR: state.currentEnteredR
    }
}

const mapDispatchToGraphProps = (dispatch) => {
    return {
        fetchGetAllHitsByR: (radius) => {
            dispatch(fetchGetAllHitsByR(radius))
        },
        fetchCheckHit: (hit) => {
            dispatch(fetchHitCheck(hit))
        }
    }
}


export default connect(mapStateToGraphProps, mapDispatchToGraphProps)(Graph);