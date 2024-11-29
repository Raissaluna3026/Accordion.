
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
  return <div className='accordion'>
    {data.map((el,i) => (
      <AccordionItem title={el.title} text={el.text} num={i}/>
    ))}
  </div>
}



function AccordionItem({num, title, text}){
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(){
    setIsOpen((isOpen) => !isOpen);

  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num+1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? "-" : "+"}</p>

      <div className='content-box'>{text}</div>
    </div>
  )
}
