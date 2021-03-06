/**
 * @file modules/dbcontext.js
 * @project node-service
 * @author Александр
 * @todo автоматически сгенеренный код
 */
var provider = require('mobnius-pg-dbcontext');
var filter = require('./rpc/modules/access-filter');
var utils = require('./utils');
provider.initPool(utils.getConnectionString(), global.schemas);
var args = require("args-parser")(process.argv);

/**
 * Специальный компонент для создания ручных запросов
 * @example
 * // https://node-postgres.com/
 * db.provider.db().query(queryText:string, params:any[], function(err, rows, time, options) {
 *      // , где queryText - строка запроса, params - параметры
 *      if(!err) {
 *          // rows - результат выполнения, time - время запроса в милисекундах, options - дополнительные данные
 *      } else {
 *          console.log(err);
 *      }
 * }); 
 */
exports.provider = provider;

/**
 * Логирование запросов пользователя
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_action:text - Имя таблицы
 *      c_method:text - Метод
 *      d_date:timestamp with time zone - d_date
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      id:uuid - id
 *      integer_id:bigint - Идентификатор
 *      jb_data:jsonb - jb_data
 *      uuid_id:uuid - Идентификатор
 * // примеры выборки
 * [{ action: "cd_action_log_user", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_cd_action_log_user", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "cd_action_log_user", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "cd_action_log_user", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "cd_action_log_user", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "cd_action_log_user", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "cd_action_log_user", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cd_action_log_user = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('cd_action_log_user', 'QUERY', 'id', query_param, session);
            provider.select('core', 'cd_action_log_user', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('cd_action_log_user', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_cd_action_log_user()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_action_log_user', data, function() {
                onQueryListener('cd_action_log_user', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_action_log_user', 'id', data, function() {
                onQueryListener('cd_action_log_user', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_action_log_user', 'id', data, function() {
                onQueryListener('cd_action_log_user', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_action_log_user', 'id', data, function() {
                onQueryListener('cd_action_log_user', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('cd_action_log_user', 'COUNT', 'id', query_param, session);
            provider.count('core', 'cd_action_log_user', query_param, callback);
        }
    }
}

/**
 * Настройки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_key:text - Ключ
 *      c_label:text - Заголовок
 *      c_summary:text - Краткое описание
 *      c_value:text - Значение
 *      f_role:integer - f_role
 *      f_type:integer (core.cs_setting_types.id) - Тип
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      id:integer - Идентификатор
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * [{ action: "cd_settings", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_cd_settings", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "cd_settings", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "cd_settings", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "cd_settings", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "cd_settings", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "cd_settings", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cd_settings = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('cd_settings', 'QUERY', 'id', query_param, session);
            provider.select('core', 'cd_settings', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('cd_settings', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_cd_settings()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_settings', data, function() {
                onQueryListener('cd_settings', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_settings', 'id', data, function() {
                onQueryListener('cd_settings', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_settings', 'id', data, function() {
                onQueryListener('cd_settings', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_settings', 'id', data, function() {
                onQueryListener('cd_settings', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('cd_settings', 'COUNT', 'id', query_param, session);
            provider.count('core', 'cd_settings', query_param, callback);
        }
    }
}

/**
 *  Логирование job
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_descr:text - c_descr
 *      d_timestamp:timestamp with time zone - d_timestamp
 *      id:uuid - id
 *      n_level_msg:integer - 0 - сообщение1 - предупрежденние2 - ошибка
 * // примеры выборки
 * [{ action: "cd_sys_log", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_cd_sys_log", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "cd_sys_log", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "cd_sys_log", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "cd_sys_log", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "cd_sys_log", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "cd_sys_log", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cd_sys_log = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('cd_sys_log', 'QUERY', 'id', query_param, session);
            provider.select('core', 'cd_sys_log', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('cd_sys_log', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_cd_sys_log()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cd_sys_log', data, function() {
                onQueryListener('cd_sys_log', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cd_sys_log', 'id', data, function() {
                onQueryListener('cd_sys_log', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'cd_sys_log', 'id', data, function() {
                onQueryListener('cd_sys_log', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cd_sys_log', 'id', data, function() {
                onQueryListener('cd_sys_log', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('cd_sys_log', 'COUNT', 'id', query_param, session);
            provider.count('core', 'cd_sys_log', query_param, callback);
        }
    }
}

/**
 * Триггер. Процедура логирования действия пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "cft_log_action", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cft_log_action = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cft_log_action', query_param.params, function() {
                onQueryListener('cft_log_action', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Триггер. Обновление справочной версии
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "cft_table_state_change_version", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cft_table_state_change_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cft_table_state_change_version', query_param.params, function() {
                onQueryListener('cft_table_state_change_version', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * История изменения документа
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "cf_arm_dd_documents_history", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_arm_dd_documents_history", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_arm_dd_documents_history = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_arm_dd_documents_history', query_param.params, function() {
                onQueryListener('cf_arm_dd_documents_history', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_arm_dd_documents_history()', query_param, filter.security(session), function() {
                onQueryListener('cf_arm_dd_documents_history', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Поиск документа
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "cf_arm_dd_documents_search", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_arm_dd_documents_search", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_arm_dd_documents_search = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_arm_dd_documents_search', query_param.params, function() {
                onQueryListener('cf_arm_dd_documents_search', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_arm_dd_documents_search()', query_param, filter.security(session), function() {
                onQueryListener('cf_arm_dd_documents_search', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Получение списка изменений для пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "cf_mui_sd_table_change", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_sd_table_change", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_mui_sd_table_change = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'cf_mui_sd_table_change', query_param.params, function() {
                onQueryListener('cf_mui_sd_table_change', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('core', 'cf_mui_sd_table_change()', query_param, filter.security(session), function() {
                onQueryListener('cf_mui_sd_table_change', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Главный сводный отчет
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "cf_rpt_main", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_rpt_main", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_rpt_main = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'cf_rpt_main', query_param.params, function() {
                onQueryListener('cf_rpt_main', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('rpt', 'cf_rpt_main()', query_param, filter.security(session), function() {
                onQueryListener('cf_rpt_main', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Сводный отчет
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "cf_rpt_orgs", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_rpt_orgs", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_rpt_orgs = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'cf_rpt_orgs', query_param.params, function() {
                onQueryListener('cf_rpt_orgs', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('rpt', 'cf_rpt_orgs()', query_param, filter.security(session), function() {
                onQueryListener('cf_rpt_orgs', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Сводный отчет по отраслям
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "cf_rpt_orgs_types", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_rpt_orgs_types", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_rpt_orgs_types = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'cf_rpt_orgs_types', query_param.params, function() {
                onQueryListener('cf_rpt_orgs_types', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('rpt', 'cf_rpt_orgs_types()', query_param, filter.security(session), function() {
                onQueryListener('cf_rpt_orgs_types', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Сводный отчет о достоверности сертификата
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "cf_rpt_sert_verify", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_rpt_sert_verify", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_rpt_sert_verify = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'cf_rpt_sert_verify', query_param.params, function() {
                onQueryListener('cf_rpt_sert_verify', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('rpt', 'cf_rpt_sert_verify()', query_param, filter.security(session), function() {
                onQueryListener('cf_rpt_sert_verify', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Отчет сотрудников
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "cf_rpt_user", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_rpt_user", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cf_rpt_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'cf_rpt_user', query_param.params, function() {
                onQueryListener('cf_rpt_user', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('rpt', 'cf_rpt_user()', query_param, filter.security(session), function() {
                onQueryListener('cf_rpt_user', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Статус документа
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 *      c_const:text - Константа
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      n_order:integer - Сортировка
 * // примеры выборки
 * [{ action: "cs_document_status", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_cs_document_status", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "cs_document_status", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "cs_document_status", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "cs_document_status", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "cs_document_status", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "cs_document_status", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cs_document_status = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('cs_document_status', 'QUERY', 'id', query_param, session);
            provider.select('core', 'cs_document_status', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('cs_document_status', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_cs_document_status()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_document_status', data, function() {
                onQueryListener('cs_document_status', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_document_status', 'id', data, function() {
                onQueryListener('cs_document_status', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_document_status', 'id', data, function() {
                onQueryListener('cs_document_status', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_document_status', 'id', data, function() {
                onQueryListener('cs_document_status', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('cs_document_status', 'COUNT', 'id', query_param, session);
            provider.count('core', 'cs_document_status', query_param, callback);
        }
    }
}

/**
 * Тип настройки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 *      c_const:text - Константа
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      n_order:integer - Сортировка
 * // примеры выборки
 * [{ action: "cs_setting_types", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_cs_setting_types", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "cs_setting_types", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "cs_setting_types", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "cs_setting_types", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "cs_setting_types", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "cs_setting_types", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.cs_setting_types = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('cs_setting_types', 'QUERY', 'id', query_param, session);
            provider.select('core', 'cs_setting_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('cs_setting_types', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_cs_setting_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'cs_setting_types', data, function() {
                onQueryListener('cs_setting_types', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'cs_setting_types', 'id', data, function() {
                onQueryListener('cs_setting_types', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'cs_setting_types', 'id', data, function() {
                onQueryListener('cs_setting_types', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'cs_setting_types', 'id', data, function() {
                onQueryListener('cs_setting_types', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('cs_setting_types', 'COUNT', 'id', query_param, session);
            provider.count('core', 'cs_setting_types', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_first_name:text - Фамилия
 *      c_last_name:text - Имя
 *      c_middle_name:text - Отчество
 *      c_notice:text - Примечание
 *      c_tag:text - c_tag
 *      d_birthday:date - Дата рождения
 *      d_expired_date:date - Дата истечения срока давности
 *      dx_created:timestamp with time zone - Дата создания
 *      f_status:integer (core.cs_document_status.id) - f_status
 *      f_user:integer (core.pd_users.id) - Идентификатор муниципалитета
 *      id:uuid - Идентификатор
 *      sn_delete:boolean - sn_delete
 * // примеры выборки
 * [{ action: "dd_documents", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_dd_documents", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "dd_documents", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "dd_documents", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "dd_documents", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "dd_documents", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "dd_documents", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.dd_documents = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('dd_documents', 'QUERY', 'id', query_param, session);
            provider.select('core', 'dd_documents', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('dd_documents', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_dd_documents()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'dd_documents', data, function() {
                onQueryListener('dd_documents', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'dd_documents', 'id', data, function() {
                onQueryListener('dd_documents', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'dd_documents', 'id', data, function() {
                onQueryListener('dd_documents', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'dd_documents', 'id', data, function() {
                onQueryListener('dd_documents', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('dd_documents', 'COUNT', 'id', query_param, session);
            provider.count('core', 'dd_documents', query_param, callback);
        }
    }
}

/**
 * 
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_verify:boolean - Мне для отчета и генерации в C#
 *      ba_data:bytea - Фото
 *      c_gosuslugi_key:text - Ключ от сертификата, если GUID.Empty, то сертификат не валиден
 *      c_notice:text - c_notice
 *      c_type:text - sert(сертификат)|test(ПЦР)|med(справка)|vac(вакцинирован)
 *      d_date:date - Дата справки, вакцинации, медотвод
 *      dx_created:timestamp with time zone - dx_created
 *      f_document:uuid (core.dd_documents.id) - f_document
 *      id:uuid - id
 *      sn_delete:boolean - sn_delete
 * // примеры выборки
 * [{ action: "dd_files", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_dd_files", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "dd_files", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "dd_files", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "dd_files", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "dd_files", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "dd_files", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.dd_files = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('dd_files', 'QUERY', 'id', query_param, session);
            provider.select('core', 'dd_files', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('dd_files', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_dd_files()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'dd_files', data, function() {
                onQueryListener('dd_files', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'dd_files', 'id', data, function() {
                onQueryListener('dd_files', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'dd_files', 'id', data, function() {
                onQueryListener('dd_files', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'dd_files', 'id', data, function() {
                onQueryListener('dd_files', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('dd_files', 'COUNT', 'id', query_param, session);
            provider.count('core', 'dd_files', query_param, callback);
        }
    }
}

/**
 * Сводная статистика
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: rpt
 * Поля:
 *      dx_created:date - dx_created
 *      f_user:integer (core.pd_users.id) - f_user
 *      id:integer - id
 *      n_med:integer - n_med
 *      n_med_percent:numeric - n_med_percent
 *      n_pcr:integer - n_pcr
 *      n_pcr7:integer - n_pcr7
 *      n_pcr7_percent:numeric - n_pcr7_percent
 *      n_pcr_percent:numeric - n_pcr_percent
 *      n_sert:integer - n_sert
 *      n_sert_percent:numeric - n_sert_percent
 *      n_vaccine:integer - n_vaccine
 *      n_vaccine_percent:numeric - n_vaccine_percent
 * // примеры выборки
 * [{ action: "dd_main_stat", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_dd_main_stat", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "dd_main_stat", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "dd_main_stat", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "dd_main_stat", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "dd_main_stat", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "dd_main_stat", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.dd_main_stat = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('dd_main_stat', 'QUERY', 'id', query_param, session);
            provider.select('rpt', 'dd_main_stat', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('dd_main_stat', 'SELECT', 'id', query_param, session);
            provider.select('rpt', 'cf_mui_dd_main_stat()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('rpt', 'dd_main_stat', data, function() {
                onQueryListener('dd_main_stat', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('rpt', 'dd_main_stat', 'id', data, function() {
                onQueryListener('dd_main_stat', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('rpt', 'dd_main_stat', 'id', data, function() {
                onQueryListener('dd_main_stat', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('rpt', 'dd_main_stat', 'id', data, function() {
                onQueryListener('dd_main_stat', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('dd_main_stat', 'COUNT', 'id', query_param, session);
            provider.count('rpt', 'dd_main_stat', query_param, callback);
        }
    }
}

/**
 * Сводная статистика
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: rpt
 * Поля:
 *      dx_created:date - dx_created
 *      f_type:integer - f_type
 *      f_user:integer (core.pd_users.id) - f_user
 *      id:integer - id
 *      n_med:integer - n_med
 *      n_med_percent:numeric - n_med_percent
 *      n_pcr:integer - n_pcr
 *      n_pcr7:integer - n_pcr7
 *      n_pcr7_percent:numeric - n_pcr7_percent
 *      n_pcr_percent:numeric - n_pcr_percent
 *      n_sert:integer - n_sert
 *      n_sert_percent:numeric - n_sert_percent
 *      n_vaccine:integer - n_vaccine
 *      n_vaccine_percent:numeric - n_vaccine_percent
 * // примеры выборки
 * [{ action: "dd_main_type_stat", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_dd_main_type_stat", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "dd_main_type_stat", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "dd_main_type_stat", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "dd_main_type_stat", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "dd_main_type_stat", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "dd_main_type_stat", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.dd_main_type_stat = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('dd_main_type_stat', 'QUERY', 'id', query_param, session);
            provider.select('rpt', 'dd_main_type_stat', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('dd_main_type_stat', 'SELECT', 'id', query_param, session);
            provider.select('rpt', 'cf_mui_dd_main_type_stat()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('rpt', 'dd_main_type_stat', data, function() {
                onQueryListener('dd_main_type_stat', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('rpt', 'dd_main_type_stat', 'id', data, function() {
                onQueryListener('dd_main_type_stat', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('rpt', 'dd_main_type_stat', 'id', data, function() {
                onQueryListener('dd_main_type_stat', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('rpt', 'dd_main_type_stat', 'id', data, function() {
                onQueryListener('dd_main_type_stat', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('dd_main_type_stat', 'COUNT', 'id', query_param, session);
            provider.count('rpt', 'dd_main_type_stat', query_param, callback);
        }
    }
}

/**
 * Права доступа
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_creatable:boolean - Разрешено создание
 *      b_deletable:boolean - Разрешено удалени
 *      b_editable:boolean - Разрешено редактирование
 *      b_full_control:boolean - Дополнительный доступ
 *      c_columns:text - Запрещенные колонки
 *      c_criteria:text - Серверный фильтр
 *      c_function:text - Функция RPC или её часть
 *      c_name:text - Табл./Предст./Функц.
 *      c_path:text - Путь в файловой системе
 *      f_role:integer (core.pd_roles.id) - Роль
 *      f_user:integer - Пользователь
 *      id:integer - Идентификатор
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * [{ action: "pd_accesses", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_pd_accesses", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "pd_accesses", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "pd_accesses", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "pd_accesses", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "pd_accesses", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "pd_accesses", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pd_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('pd_accesses', 'QUERY', 'id', query_param, session);
            provider.select('core', 'pd_accesses', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('pd_accesses', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_pd_accesses()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_accesses', data, function() {
                onQueryListener('pd_accesses', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_accesses', 'id', data, function() {
                onQueryListener('pd_accesses', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_accesses', 'id', data, function() {
                onQueryListener('pd_accesses', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_accesses', 'id', data, function() {
                onQueryListener('pd_accesses', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('pd_accesses', 'COUNT', 'id', query_param, session);
            provider.count('core', 'pd_accesses', query_param, callback);
        }
    }
}

/**
 * Роли
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_description:text - Описание роли
 *      c_name:text - Наименование
 *      id:integer - Идентификатор
 *      n_weight:integer - Приоритет
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * [{ action: "pd_roles", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_pd_roles", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "pd_roles", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "pd_roles", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "pd_roles", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "pd_roles", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "pd_roles", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pd_roles = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('pd_roles', 'QUERY', 'id', query_param, session);
            provider.select('core', 'pd_roles', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('pd_roles', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_pd_roles()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_roles', data, function() {
                onQueryListener('pd_roles', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_roles', 'id', data, function() {
                onQueryListener('pd_roles', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_roles', 'id', data, function() {
                onQueryListener('pd_roles', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_roles', 'id', data, function() {
                onQueryListener('pd_roles', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('pd_roles', 'COUNT', 'id', query_param, session);
            provider.count('core', 'pd_roles', query_param, callback);
        }
    }
}

/**
 * Пользователи в ролях
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      f_role:integer (core.pd_roles.id) - Роль
 *      f_user:integer (core.pd_users.id) - Пользователь
 *      id:integer - Идентификатор
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * [{ action: "pd_userinroles", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_pd_userinroles", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "pd_userinroles", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "pd_userinroles", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "pd_userinroles", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "pd_userinroles", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "pd_userinroles", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pd_userinroles = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('pd_userinroles', 'QUERY', 'id', query_param, session);
            provider.select('core', 'pd_userinroles', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('pd_userinroles', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_pd_userinroles()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_userinroles', data, function() {
                onQueryListener('pd_userinroles', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_userinroles', 'id', data, function() {
                onQueryListener('pd_userinroles', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_userinroles', 'id', data, function() {
                onQueryListener('pd_userinroles', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_userinroles', 'id', data, function() {
                onQueryListener('pd_userinroles', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('pd_userinroles', 'COUNT', 'id', query_param, session);
            provider.count('core', 'pd_userinroles', query_param, callback);
        }
    }
}

/**
 * Пользователи
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_disabled:boolean - Отключен
 *      c_description:text - Описание
 *      c_email:text - Эл. почта
 *      c_first_name:text - Наименование
 *      c_login:text - Логин
 *      c_main_user:text - Куратор
 *      c_password:text - Пароль
 *      c_version:text - c_version
 *      d_expired_date:date - d_expired_date
 *      f_parent:integer - Родительская запись
 *      f_type:integer - Тип организации из таблицы ps_user_types
 *      id:integer - Идентификатор
 *      n_count:integer - n_count
 *      s_hash:text - Hash
 *      s_salt:text - Salt
 *      sn_delete:boolean - Удален
 * // примеры выборки
 * [{ action: "pd_users", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_pd_users", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "pd_users", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "pd_users", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "pd_users", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "pd_users", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "pd_users", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pd_users = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('pd_users', 'QUERY', 'id', query_param, session);
            provider.select('core', 'pd_users', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('pd_users', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_pd_users()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'pd_users', data, function() {
                onQueryListener('pd_users', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'pd_users', 'id', data, function() {
                onQueryListener('pd_users', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'pd_users', 'id', data, function() {
                onQueryListener('pd_users', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'pd_users', 'id', data, function() {
                onQueryListener('pd_users', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('pd_users', 'COUNT', 'id', query_param, session);
            provider.count('core', 'pd_users', query_param, callback);
        }
    }
}

/**
 * Системная функция. Получение прав доступа для пользователя. Используется vaccineJS
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "pf_accesses", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "pf_accesses", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pf_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_accesses', query_param.params, function() {
                onQueryListener('pf_accesses', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        },
        Select: function (query_param, callback) {
            provider.select('core', 'pf_accesses()', query_param, filter.security(session), function() {
                onQueryListener('pf_accesses', 'SELECT', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Обновление ролей у пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "pf_update_user_roles", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pf_update_user_roles = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'pf_update_user_roles', query_param.params, function() {
                onQueryListener('pf_update_user_roles', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Тип настройки
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      b_default:boolean - По умолчанию
 *      b_disabled:boolean - Отключено
 *      c_const:text - Константа
 *      c_name:text - Наименование
 *      c_short_name:text - Краткое наименование
 *      id:integer - Идентификатор
 *      n_code:integer - Код
 *      n_order:integer - Сортировка
 * // примеры выборки
 * [{ action: "ps_user_types", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_ps_user_types", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "ps_user_types", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "ps_user_types", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "ps_user_types", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "ps_user_types", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "ps_user_types", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.ps_user_types = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('ps_user_types', 'QUERY', 'id', query_param, session);
            provider.select('core', 'ps_user_types', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('ps_user_types', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_ps_user_types()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'ps_user_types', data, function() {
                onQueryListener('ps_user_types', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'ps_user_types', 'id', data, function() {
                onQueryListener('ps_user_types', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'ps_user_types', 'id', data, function() {
                onQueryListener('ps_user_types', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'ps_user_types', 'id', data, function() {
                onQueryListener('ps_user_types', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('ps_user_types', 'COUNT', 'id', query_param, session);
            provider.count('core', 'ps_user_types', query_param, callback);
        }
    }
}

/**
 * Открытый список пользователей
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_claims:text - c_claims
 *      c_description:text - c_description
 *      c_email:text - c_email
 *      c_first_name:text - c_first_name
 *      c_login:text - c_login
 *      id:integer - id
 * // примеры выборки
 * [{ action: "pv_users", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "pv_users", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.pv_users = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('pv_users', 'QUERY', '', query_param, session);
            provider.select('core', 'pv_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            onQueryListener('pv_users', 'COUNT', '', query_param, session);
            provider.count('core', 'pv_users', query_param, callback);
        }
    }
}

/**
 * Изменение состояния таблицы
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      f_user:integer (core.pd_users.id) - f_user
 *      id:bigint - id
 *      n_change:double precision - Версия изменения
 * // примеры выборки
 * [{ action: "sd_table_change", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_sd_table_change", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "sd_table_change", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "sd_table_change", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "sd_table_change", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "sd_table_change", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "sd_table_change", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sd_table_change = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('sd_table_change', 'QUERY', 'id', query_param, session);
            provider.select('core', 'sd_table_change', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('sd_table_change', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_sd_table_change()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_table_change', data, function() {
                onQueryListener('sd_table_change', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_table_change', 'id', data, function() {
                onQueryListener('sd_table_change', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_table_change', 'id', data, function() {
                onQueryListener('sd_table_change', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_table_change', 'id', data, function() {
                onQueryListener('sd_table_change', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('sd_table_change', 'COUNT', 'id', query_param, session);
            provider.count('core', 'sd_table_change', query_param, callback);
        }
    }
}

/**
 * Зависимость таблиц состояний
 * @example
 * Тип: BASE TABLE
 * Первичный ключ: id
 * Схема: core
 * Поля:
 *      c_table_name:text - Таблица
 *      c_table_name_ref:text - Зависимая таблица
 *      id:smallint - id
 * // примеры выборки
 * [{ action: "sd_table_change_ref", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры выборки через функцию
 * [{ action: "cf_mui_sd_table_change_ref", method: "Select", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры добавления
 * [{ action: "sd_table_change_ref", method: "Add", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры обновления
 * [{ action: "sd_table_change_ref", method: "Update", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры создания или обновления
 * [{ action: "sd_table_change_ref", method: "AddOrUpdate", data: [{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры удаления
 * [{ action: "sd_table_change_ref", method: "Delete", data: [{id:any ...}|[{id:any ...}], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "sd_table_change_ref", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sd_table_change_ref = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('sd_table_change_ref', 'QUERY', 'id', query_param, session);
            provider.select('core', 'sd_table_change_ref', query_param, filter.security(session), callback);
        },
        Select: function (query_param, callback) {
            onQueryListener('sd_table_change_ref', 'SELECT', 'id', query_param, session);
            provider.select('core', 'cf_mui_sd_table_change_ref()', query_param, filter.security(session), callback);
        },
        Add: function (data, callback) {
            provider.insert('core', 'sd_table_change_ref', data, function() {
                onQueryListener('sd_table_change_ref', 'INSERT', 'id', data, session);
                callback(arguments[0]);
            });
        },
        AddOrUpdate: function (data, callback) {
            provider.insertOrUpdate('core', 'sd_table_change_ref', 'id', data, function() {
                onQueryListener('sd_table_change_ref', 'INSERT_OR_UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Update: function (data, callback) {
            provider.update('core', 'sd_table_change_ref', 'id', data, function() {
                onQueryListener('sd_table_change_ref', 'UPDATE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Delete: function (data, callback) {
            provider.delete('core', 'sd_table_change_ref', 'id', data, function() {
                onQueryListener('sd_table_change_ref', 'DELETE', 'id', data, session);
                callback(arguments[0]);
            });
        },
        Count: function (query_param, callback) {
            onQueryListener('sd_table_change_ref', 'COUNT', 'id', query_param, session);
            provider.count('core', 'sd_table_change_ref', query_param, callback);
        }
    }
}

/**
 * Системная функция для обработки прав. Для внешнего использования не применять
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_accesses", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_accesses = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_accesses', query_param.params, function() {
                onQueryListener('sf_accesses', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Добавление статистики за каждый день
 * @example
 * Тип: FUNCTION
 * Схема: rpt 
 * // примеры выборки
 * [{ action: "sf_add_main_stat", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_add_main_stat = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('rpt', 'sf_add_main_stat', query_param.params, function() {
                onQueryListener('sf_add_main_stat', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Генерация версии БД
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_build_version", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_build_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_build_version', query_param.params, function() {
                onQueryListener('sf_build_version', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Создание администратора
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_create_admin", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_create_admin = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_create_admin', query_param.params, function() {
                onQueryListener('sf_create_admin', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Создание пользователя с определенными ролями
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_create_user", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_create_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_create_user', query_param.params, function() {
                onQueryListener('sf_create_user', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Удаление пользователя
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_del_user", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_del_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_del_user', query_param.params, function() {
                onQueryListener('sf_del_user', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Процедура отлючения пользователей
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_expire_user", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_expire_user = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_expire_user', query_param.params, function() {
                onQueryListener('sf_expire_user', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Версия АРМ
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_get_arm_version", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_get_arm_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_get_arm_version', query_param.params, function() {
                onQueryListener('sf_get_arm_version', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Версия БД
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_get_version", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_get_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_get_version', query_param.params, function() {
                onQueryListener('sf_get_version', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Процедура очистки устаревших данных
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_remove_outdated", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_remove_outdated = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_remove_outdated', query_param.params, function() {
                onQueryListener('sf_remove_outdated', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * 
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_table_change_update", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_table_change_update = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_table_change_update', query_param.params, function() {
                onQueryListener('sf_table_change_update', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * Принудительное обновление версии базу данных
 * @example
 * Тип: FUNCTION
 * Схема: core 
 * // примеры выборки
 * [{ action: "sf_update_version", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sf_update_version = function (session) {
    return {
        Query: function (query_param, callback) {
            provider.call('core', 'sf_update_version', query_param.params, function() {
                onQueryListener('sf_update_version', 'QUERY', null, query_param, session);
                callback(arguments[0]);
            });
        }
    }
}

/**
 * 
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      primary_key:character varying - primary_key
 *      table_comment:character varying - table_comment
 *      table_name:character varying - table_name
 *      table_schema:character varying - table_schema
 *      table_title:character varying - table_title
 *      table_type:character varying - table_type
 * // примеры выборки
 * [{ action: "sv_objects", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "sv_objects", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sv_objects = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('sv_objects', 'QUERY', '', query_param, session);
            provider.select('core', 'sv_objects', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            onQueryListener('sv_objects', 'COUNT', '', query_param, session);
            provider.count('core', 'sv_objects', query_param, callback);
        }
    }
}

/**
 * Системный список пользователей
 * @example
 * Тип: VIEW
 * Схема: core
 * Поля:
 *      b_disabled:boolean - b_disabled
 *      c_claims:text - c_claims
 *      c_first_name:text - c_first_name
 *      c_login:text - c_login
 *      c_password:text - c_password
 *      c_user_name:text - c_user_name
 *      id:integer - id
 *      s_hash:text - s_hash
 *      s_salt:text - s_salt
 * // примеры выборки
 * [{ action: "sv_users", method: "Query", data: [{ }], type: "rpc", tid: 0 }]
 * // примеры получения количества записей
 * [{ action: "sv_users", method: "Count", data: [{ }], type: "rpc", tid: 0 }]
 */
exports.sv_users = function (session) {
    return {
        Query: function (query_param, callback) {
            onQueryListener('sv_users', 'QUERY', '', query_param, session);
            provider.select('core', 'sv_users', query_param, filter.security(session), callback);
        },
        Count: function (query_param, callback) {
            onQueryListener('sv_users', 'COUNT', '', query_param, session);
            provider.count('core', 'sv_users', query_param, callback);
        }
    }
}


/**
 * Проверка авторизации. 
 * Применяется только при включенной авторизации
 * @function
 * @param {string} login логин пользователя
 * @param {function} callback функция обратного вызова
 * @example
 * db.getUser('', function(data) {
 *      if(data.meta.success) {
 *      
 *      }   
 * });
 */
exports.getUser = function(login, callback) {
    this.sv_users().Query({
        filter: [{
            property: 'c_login',
            value: login
        }]
    }, function(data) {
        callback(data);
    });
}

function onQueryListener(action, method, idName, data, session) {
    if(args.debug) {
        var item = (data && typeof data.length == 'number') ? data[0] : data;
        provider.insert('core', 'cd_action_log_user', { 
            integer_id: (item && typeof item[idName] == 'number') ? item[idName] : null,  
            uuid_id: (item && typeof item[idName] == 'string') ? item[idName] : null,
            c_action: action,
            c_method: method,
            f_user: session ? session.user.id : -1,
            jb_data: data ? (typeof data == 'string' ? data : JSON.stringify(data)) : '[{}]'
        }, function() {});
    }
}