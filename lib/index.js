/**
 * @fileoverview ESLint plugin for Google Apps Script environment
 * @author Sasha Matijasic <sasha@selectnull.com>
 */
"use strict";

var requireIndex = require("requireindex");

module.exports = {
  environments: {
    googleappsscript: {
      globals: {
        BigNumber: false,
        Browser: false,
        CacheService: false,
        CalendarApp: false,
        CardService: false,
        Charts: false,
        ContactsApp: false,
        ContentService: false,
        DocumentApp: false,
        DriveApp: false,
        ErrorService: false,
        FormApp: false,
        GmailApp: false,
        GroupsApp: false,
        HomeroomService: false,
        HtmlService: false,
        Jdbc: false,
        LanguageApp: false,
        LinearOptimizationService: false,
        LockService: false,
        Logger: false,
        MailApp: false,
        Maps: false,
        MimeType: false,
        PropertiesService: false,
        ScriptApp: false,
        ScriptProperties: false,
        Session: false,
        SitesApp: false,
        SlidesApp: false,
        SoapService: false,
        SpreadsheetApp: false,
        UiApp: false,
        UrlFetchApp: false,
        UserProperties: false,
        Utilities: false,
        Xml: false,
        XmlService: false,
        console: false
      }
    }
  }
};
