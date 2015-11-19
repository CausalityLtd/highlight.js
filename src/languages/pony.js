/*
Language: Pony
Author: Sylvan Clebsch <sylvan@causality.io>
*/

function(hljs) {

  var STRING = {
    className: 'string',
    begin: '"""',
    end: '"""'
  };

  var TYPE = {
    className: 'title',
    begin: '\\b_*[A-Z][_a-zA-Z0-9]*\\b'
  };

  var CLASS = {
    className: 'class',
    beginKeywords: 'type interface trait primitive|10 class struct actor|10',
    end: '[\[]|is|$',
    excludeEnd: true,
    contains: [
      TYPE
    ]
  };

  var METHOD = {
    className: 'function',
    beginKeywords: 'new fun be',
    end: '[\[\(]|$',
    excludeEnd: true,
    contains: [
      {
        className: 'keyword',
        beginKeywords: 'iso trn ref val box tag'
      },
      {
        className: 'title',
        begin: '\\b_*[a-z][_a-zA-Z0-9]*\\b'
      }
    ]
  };

  return {
    keywords: {
      literal: 'true false this',
      keyword: 'var let embed new be fun iso|10 trn ref val box|10 tag|10 break continue return error if then elseif else end match where try with recover|10 consume|10 object while do repeat until for in lambda use as'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      STRING,
      hljs.QUOTE_STRING_MODE,
      TYPE,
      CLASS,
      METHOD,
      hljs.C_NUMBER_MODE,
    ]
  };
}
