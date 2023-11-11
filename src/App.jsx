import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';

import { Sidebar } from './components/Sidebar';

export function App() {
  
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
            author="Alexandre Gomes" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem architecto eum ab vero voluptates soluta inventore tempore quasi labore ut, nobis sequi ad ducimus accusamus? Inventore quo accusamus vel!"
          />
          <Post 
            author="A2 Gomes" 
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem architecto eum ab vero voluptates soluta inventore tempore quasi labore ut, nobis sequi ad ducimus accusamus? Inventore quo accusamus vel!"
          />  
        </main>  
      </div>    
    </div>
  )
}


