describe('protractor sample', function() {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:9001');
  });

  it('商品一覧表示テスト', function() {
    // menu
    var itemlist = element(by.css('a[ng-link="itemlist"]'));
    itemlist.click();

    // header
    var title = element(by.css('.navbar-brand'));
    expect(title.getText()).toEqual('SampleApp');

    var addCart = element(by.css('a[ng-click*="itemlist.addCart"]'));
    var removeCart = element(by.css('a[ng-click*="itemlist.removeCart"]'));
    var badge = element(by.css('.badge'));
    addCart.click();
    addCart.click();
    expect(badge.getText()).toEqual('2');

    removeCart.click();
    expect(badge.getText()).toEqual('1');

    removeCart.click();
    removeCart.click();
    expect(badge.getText()).toEqual('0');

    var books = element.all(by.repeater('data in itemlist.items'));
    console.log(books);

  });

  //
  // it('about test', function() {
  //   // menu
  //   var about = element(by.css('a[ng-link="about"]'));
  //   about.click();
  //
  //   // header
  //   var title = element(by.css('.navbar-brand'));
  //   expect(title.getText()).toEqual('SampleApp');
  //
  //   var aboutTitle = element(by.css('.panel-heading'));
  //   expect(aboutTitle.getText()).toEqual('Grunt The JavaScript Task Runner');
  //
  //   var gruntName = function(rowIndex) {
  //     return aboutElement(rowIndex, by.css('th'));
  //   };
  //
  //   var aboutElement = function(rowIndex, selector) {
  //     return element(by.repeater('list in about.list').row(rowIndex)).element(selector);
  //   };
  //
  //   expect(gruntName(0).getText()).toEqual('connect-history-api-fallback');
  //   expect(gruntName(1).getText()).toEqual('grunt');
  // });
  //
  // it('contact - display', function() {
  //   // menu
  //   var contact = element(by.css('a[ng-link="contact"]'));
  //
  //   // about画面
  //   contact.click();
  //
  //   // header
  //   var title = element(by.css('.navbar-brand'));
  //   expect(title.getText()).toEqual('SampleApp');
  // });
});
