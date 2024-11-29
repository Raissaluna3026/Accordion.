
import './App.css';
import { useState } from 'react';

const faqs = [
  {
    title: 'Que pergunta é essa?',
    text: 'Essa é a pergunta numero 1'
  },
  {
    title: 'E essa aqui embaixo?',
    text: 'Essa é a pergunta numero 2'
  },
  {
    title: 'Tem outra pergunta?',
    text: 'Essa é a pergunta numero 3'
  },
]



export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}){
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className='accordion'>
    {data.map((el,i) => (
      <AccordionItem 
      curOpen={curOpen} 
      onOpen={setCurOpen} 
      title={el.title}  
      num={i} 
      key={el.title}
      >
        {el.text}
      </AccordionItem>
    ))}
    <AccordionItem 
    curOpen={curOpen} 
    onOpen={setCurOpen} 
    title="Teste 1" 
    num={22}
    key={"test 1"}
    >
      <p>Agora uma lista:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </AccordionItem> 
  </div>
  )
}


function AccordionItem({num, title, curOpen, onOpen, children}){
  const isOpen = num === curOpen;

  function handleToggle(){
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num+1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>

      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  )
}
