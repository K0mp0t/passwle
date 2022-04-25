export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Хорошая работа!', 'Отлично', 'Хорошо!']
export const GAME_COPIED_MESSAGE = 'Результаты скопированы в буфер обмена'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Недостаточно букв'
export const WORD_NOT_FOUND_MESSAGE = 'Слово не найдено'
export const HARD_MODE_ALERT_MESSAGE = 'Сложный режим можно включить только в начале игры!'
export const HARD_MODE_DESCRIPTION = 'Любые полученные подсказки должны быть использованы в последующих попытках'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Для улучшения различимости цветов'
export const CORRECT_WORD_MESSAGE = (solution: string) => `Загаданный пароль: ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) => `Нужно использовать ${guess} в позиции ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) => `Слово-догадка должно содержать ${letter}`
export const ENTER_TEXT = 'Ввод'
export const DELETE_TEXT = 'Удалить'
export const STATISTICS_TITLE = 'Статистика'
export const GUESS_DISTRIBUTION_TEXT = 'Распределение догадок'
export const NEW_WORD_TEXT = 'Новое слово через'
export const SHARE_TEXT = 'Поделиться'
export const TOTAL_TRIES_TEXT = 'Всего попыток'
export const SUCCESS_RATE_TEXT = 'Процент успеха'
export const CURRENT_STREAK_TEXT = 'Текущая серия'
export const BEST_STREAK_TEXT = 'Лучшая серия'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Вы используете встроенный браузер и можете испытывать проблемы в процессе игры. Рекомендуем использовать стандартный браузер вашего устройства"
