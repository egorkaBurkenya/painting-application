import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [items, setItems] = useState([
    {id: '1', name: 'Мона Лиза', link: 'https://static.dw.com/image/40552609_303.jpg',
    desc: 'Мо́на Ли́за», или «Джоко́нда» (итал. Mona Lisa, La Gioconda, полное название — «Портре́т госпожи́ Ли́зы дель Джоко́ндо», итал. Ritratto di Monna Lisa del Giocondo)[2] — картина Леонардо да Винчи, одно из самых известных произведений живописи[3][4]. Точная дата написания неизвестна (по некоторым сведениям, написана между 1503 и 1505 годами). Ныне хранится в Лувре. Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.'}
  ])

  const addItem = item => {
    setItems([...items, {...item, id: Date.now().toString()}])
  }

  return (
    <div className="App">
      <h1 className='main-title'>Painting Application</h1>
      <h2 className='main-subtitle'>using react...</h2>
      <Form addItem={addItem} />
      
      <List title={'Paintings'} items={items} backgroundColor={'black'} />
    </div>
  );
}

export default App;
