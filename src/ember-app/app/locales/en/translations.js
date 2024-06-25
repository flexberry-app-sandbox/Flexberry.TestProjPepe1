import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestProjPepeNewClass1LForm from './forms/i-i-s-test-proj-pepe-new-class1-l';
import IISTestProjPepeNewClass2LForm from './forms/i-i-s-test-proj-pepe-new-class2-l';
import IISTestProjPepeNewClass1EForm from './forms/i-i-s-test-proj-pepe-new-class1-e';
import IISTestProjPepeNewClass2EForm from './forms/i-i-s-test-proj-pepe-new-class2-e';
import IISTestProjPepeNewClass1Model from './models/i-i-s-test-proj-pepe-new-class1';
import IISTestProjPepeNewClass2Model from './models/i-i-s-test-proj-pepe-new-class2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-proj-pepe-new-class1': IISTestProjPepeNewClass1Model,
    'i-i-s-test-proj-pepe-new-class2': IISTestProjPepeNewClass2Model
  },

  'application-name': 'Test proj pepe',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test proj pepe',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test proj pepe',
          title: 'Test proj pepe'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-proj-pepe': {
          caption: 'TestProjPepe',
          title: 'TestProjPepe',
          'i-i-s-test-proj-pepe-new-class1-l': {
            caption: 'New class1',
            title: ''
          },
          'i-i-s-test-proj-pepe-new-class2-l': {
            caption: 'New class2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-proj-pepe-new-class1-l': IISTestProjPepeNewClass1LForm,
    'i-i-s-test-proj-pepe-new-class2-l': IISTestProjPepeNewClass2LForm,
    'i-i-s-test-proj-pepe-new-class1-e': IISTestProjPepeNewClass1EForm,
    'i-i-s-test-proj-pepe-new-class2-e': IISTestProjPepeNewClass2EForm
  },

});

export default translations;
