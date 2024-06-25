import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test proj pepe',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test proj pepe',
          title: 'Test proj pepe'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-proj-pepe-new-class1-l': IISTestProjPepeNewClass1LForm,
    'i-i-s-test-proj-pepe-new-class2-l': IISTestProjPepeNewClass2LForm,
    'i-i-s-test-proj-pepe-new-class1-e': IISTestProjPepeNewClass1EForm,
    'i-i-s-test-proj-pepe-new-class2-e': IISTestProjPepeNewClass2EForm
  },

});

export default translations;
