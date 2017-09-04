var commonTools = require('../base/commonTools');
module.exports = {
    'leaflet_02_getFeatureByGeometry': function (browser) {
        var type = 'leaflet';
        var exampleName = '02_getFeatureByGeometry';
        commonTools.openExampleAndLoadMap(browser, type, exampleName);
        /*check elements exist*/
        browser.waitForElementPresent('.leaflet-pane.leaflet-overlay-pane', 10000);
        browser.waitForElementPresent('.leaflet-pane.leaflet-overlay-pane canvas', 10000);
        //browser.waitForElementPresent('.leaflet-popup-content', 10000);
        //var popupContent = '空间查询模式：INTERSECT';
        //browser.expect.element('.leaflet-popup-content').text.to.be.contain(popupContent);
        //browser.click('.leaflet-popup-close-button', function () {
        //    browser.waitForElementNotPresent('.leaflet-popup-content', 10000);
        //});
        browser.pause(1000);
        browser.end();
    }
};



