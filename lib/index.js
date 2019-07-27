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
        AdSense: false,
        AdminDirectory: false,
        AdminGroupsMigration: false,
        AdminGroupsSettings: false,
        AdminLicenseManager: false,
        AdminReports: false,
        AdminReseller: false,
        Analytics: false,
        AnalyticsReporting: false,
        AppsActivity: false,
        BigQuery: false,
        Browser: false,
        CacheService: false,
        Calendar: false,
        CalendarApp: false,
        CardService: false,
        Charts: false,
        Classroom: false,
        ContactsApp: false,
        ContentService: false,
        DataStudioApp: false,
        Docs: false,
        DocumentApp: false,
        DoubleClickCampaigns: false,
        Drive: false,
        DriveActivity: false,
        DriveApp: false,
        FormApp: false,
        FusionTables: false,
        Gmail: false,
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
        Mirror: false,
        People: false,
        PropertiesService: false,
        ScriptApp: false,
        Session: false,
        Sheets: false,
        ShoppingContent: false,
        SitesApp: false,
        Slides: false,
        SlidesApp: false,
        SpreadsheetApp: false,
        TagManager: false,
        Tasks: false,
        UrlFetchApp: false,
        Utilities: false,
        XmlService: false,
        YouTube: false,
        YouTubeAnalytics: false,
        YouTubeContentId: false,
        console: false
      }
    }
  }
};
