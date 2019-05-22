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
        FormApp: false,
        GmailApp: false,
        GroupsApp: false,
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
        Session: false,
        SitesApp: false,
        SlidesApp: false,
        SpreadsheetApp: false,
        UrlFetchApp: false,
        Utilities: false,
        XmlService: false
      }
    }
  }
};
