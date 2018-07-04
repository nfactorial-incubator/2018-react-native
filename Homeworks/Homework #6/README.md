# CookBook

### Описание:

Мы будем строить react-native приложение для ведения личной книги рецептов – CookBook!
Для взаимодействия с GraphQL API, используем apollo-client, а для навигации react-navigation.
Вы можете писать проект на JavaScript или TypeScript.

В приложении должно быть 3 экрана:
1. Список рецептов
- В каждом ряде указать название и короткую версию описания рецепта.
2. Детали рецепта
- Все поля рецепта, кроме id.
3. Форма для создания рецепта
- Все поля рецета, кроме id.

Бонусные задания:
1. Поделиться рецептом +20 баллов
2. pull-to-refresh (http://wnfx.ru/pulltorefresh-model-rabotyi-ui/) +20 баллов

Штрафы:
За каждое использование for или forEach, -10 баллов.

### Полезные ссылки

- https://www.apollographql.com/docs/react/
- https://reactnavigation.org/

### Конфигурация

1. Создать react-native проект

```bash
create-react-native-app [your-app-name]
cd [your-app-name]
```

2. Добавление TypeScript зависимостей (необязательно)

```bash
yarn add --dev typescript react-native-typescript-transformer @types/react @types/react-native @types/expo @types/graphql
yarn tsc --init --pretty --jsx react
touch rn-cli.config.js
```

В вашем rn-cli-config.js:
```
module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
```

В вашем tsconfig.json, раскомментировать следующие поля: 
"strictNullChecks" и "allowSyntheticDefaultImports"

Теперь вы можете создавать проект на TypeScript

3. Добавьте apollo-client и react-navigation зависимости

```bash
yarn add apollo-boost react-apollo graphql-tag graphql
yarn add react-navigation
```

4. Настройте prettier (необязательно)
```bash
yarn add prettier --dev
```

В вашем package.json дабавьте script: 
"format": "prettier --write"

