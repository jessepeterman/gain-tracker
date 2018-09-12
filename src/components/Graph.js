// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
// import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas
} from 'react-vis';

import { Hint } from 'react-vis';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      data: this.props.data
    }
  }


  render() {
    const { squat, bench, shoulderPress, deadlift, chinups } = this.props.data;
    const { useCanvas } = this.state;
    const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    const data = {
      x: 200
    };

    return this.props.data && (
      <div className="centered-graph" >
        < XYPlot
          xType="ordinal"
          width={280}
          height={150}
          color="#1E96BE"
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            className="vertical-bar-series"
            data={[
              { x: 'Squat', y: squat || 0 },
              { x: 'Bench', y: bench || 0 },
              { x: 'S Press', y: shoulderPress || 0 },
              { x: 'DL', y: deadlift || 0 },
              { x: 'C-Ups', y: chinups || 0 }
            ]} />
        </XYPlot >
      </div >)
  }
}


// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// import React from 'react';

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   LineSeries,
//   Hint
// } from 'react-vis';

// export default class Example extends React.Component {
//   render() {
//     return (
//       <XYPlot
//         width={300}
//         height={300}>
//         <VerticalGridLines />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         <LineSeries
//           data={[
//             { x: 0, y: 1 },
//             { x: 1, y: 10 },
//             { x: 2, y: 5 },
//             { x: 3, y: 15 }
//           ]} />
//         <Hint value={{ x: 1, y: 10 }} />
//         <Hint
//           value={{ x: 0.4, y: 14 }}
//           horizontalAlign={Hint.ALIGN.RIGHT}
//           verticalAlign={Hint.ALIGN.BOTTOM}
//         >
//           <div className="custom-hint">
//             This is a custom hint<br />
//             for a non-existent value
//           </div>
//         </Hint>
//       </XYPlot>
//     );
//   }
// }