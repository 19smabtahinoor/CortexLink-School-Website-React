import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


function PieChart() {
    let xArray = ["Right", "Wrong"];
    let yArray = [76, 24];
    let data = [{labels: xArray, values: yArray, type: "pie"}];
    let layout = {
        width: 370,
        height: 370,
        title: "<b>Chart of Rights vs Wrong</b>",
        margin: {
            
            r: 100
        },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        barmode: "stack",
        //   bargroupgap: 30,
        font: {
            family: "Poppins , sans-serif",
            size: 12,
            color: "#1e145e"
        },
        xaxis: {
            title: "<b>PROFICIENCY LEVEL</b>",
            titlefont: {
                family: "Poppins , sans-serif",
                size: 15,
                color: "#1e145e"
            },
            showticklabels: true,
            tickfont: {
                family: "Arial",
                size: 14,
                color: "#6b6b6b"
            }
        },
        yaxis: {
            titlefont: {
                family: "Poppins , sans-serif",
                size: 15,
                color: "#1e145e"
            },
            showticklabels: true,
            tickfont: {
                family: "Poppins , sans-serif",
                size: 14,
                color: "#6b6b6b"
            }
        },
        cornerroundness: {
            bottomleft: 10.3,
            bottomright: 0,
            topleft: 20,
            topright: 0
        },
        hovermode: "closest",
        showlegend: false
    };
    let config = {
        showLink: false,
        displayModeBar: true,
        responsive: true
    };
    return (
        <>
            <PlotlyComponent data={data} layout={layout} config={config} />
        </>
    );
}
export default PieChart;
