require.config({
  locale: "pt-br"
});

require(['jquery', "i18n!nls/speak"], function($, speak) {
  $("header h1").html(speak.header);
});