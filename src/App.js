import React, { useState } from 'react';
import './App.css';

function App() {
  // Создаем состояние для хранения значения артикула
  const [article, setArticle] = useState('');

  // Функция для обработки события изменения значения текстового поля артикула
  const handleArticleChange = (event) => {
    setArticle(event.target.value);
  };

  // Функция для отправки запроса на сервер при нажатии кнопки поиска
  const handleSearchClick = async () => {
    try {
      // Отправляем запрос на сервер с помощью fetch
      const response = await fetch(`http://localhost:8000/search-by-article?article=${article}`);
      
      // Проверяем статус ответа
      if (response.ok) {
        // Если запрос успешен, получаем данные о товаре в формате JSON
        const data = await response.json();
        // Выводим полученные данные в консоль (для проверки)
        console.log(data);
        // Далее вы можете использовать полученные данные для отображения на странице или выполнения других действий
      } else {
        // Если произошла ошибка, выводим сообщение об ошибке в консоль
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      // Если произошла ошибка, выводим её в консоль
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Product by Article</h1>
        {/* Форма для ввода артикула и кнопка поиска */}
        <form>
          <input
            type="text"
            placeholder="Enter article..."
            value={article}
            onChange={handleArticleChange}
          />
          <button type="button" onClick={handleSearchClick}>
            Search
          </button>
        </form>
        {/* Результаты поиска будут отображаться здесь */}
      </header>
    </div>
  );
}

export default App;
