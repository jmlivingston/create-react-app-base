webpackJsonp([132],{181:function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.default='import React from \'react\'\nimport { Progress } from \'components/Common\'\n\nconst ProgressDefault = props => {\n  return (\n    <div>\n      <div className="text-center">0%</div>\n      <Progress />\n      <div className="text-center">25%</div>\n      <Progress value="25" />\n      <div className="text-center">50%</div>\n      <Progress value={50} />\n      <div className="text-center">75%</div>\n      <Progress value={75} />\n      <div className="text-center">100%</div>\n      <Progress value="100" />\n      <div className="text-center">Multiple bars</div>\n      <Progress multi>\n        <Progress bar value="15" />\n        <Progress bar color="success" value="30" />\n        <Progress bar color="info" value="25" />\n        <Progress bar color="warning" value="20" />\n        <Progress bar color="danger" value="5" />\n      </Progress>\n    </div>\n  )\n}\n\nexport default ProgressDefault\n'}});
//# sourceMappingURL=132.7244095b.chunk.js.map