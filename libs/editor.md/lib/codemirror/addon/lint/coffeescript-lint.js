!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.registerHelper("lint","coffeescript",function(o){var r=[],t=function(o){var t=o.lineNumber;r.push({from:e.Pos(t-1,0),to:e.Pos(t,0),severity:o.level,message:o.message})};try{for(var i=coffeelint.lint(o),n=0;n<i.length;n++)t(i[n])}catch(s){r.push({from:e.Pos(s.location.first_line,0),to:e.Pos(s.location.last_line,s.location.last_column),severity:"error",message:s.message})}return r})});