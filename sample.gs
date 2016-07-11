// TOPページの表示
function doGet(request) {
  var appName = "GASのソースコード管理のテスト";
  page = HtmlService.createTemplateFromFile('index.html');
  page.title = appName;
  page.data = request.parameter.test;
  return page.evaluate().setTitle(appName);
}

// JSファイル、CSSファイルロード用
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}