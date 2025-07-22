import { useEffect, useState } from 'react'
import './App.css'
import 'prismjs/themes/prism-tomorrow.css'
import prism from 'prismjs';
import Editor from "react-simple-code-editor"
import axios from 'axios'
import Markdown  from 'react-markdown'
function App() {

  useEffect(()=>{
    prism.highlightAll()
  })
  const [code, setcode] = useState(`
          Write your Code in any language here `)

        const [review, setreview] = useState(``)
        
        async function reviewcode() {
        const response= await axios.post('http://localhost:3000/ai/get-review',{code})
        setreview(response.data);
        
      }
      
  return (
    <>
      <main>
        <div className='left'>
      
        <div className='code'>
          <Editor
            value={code}
            onValueChange={setcode}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira Mono", "Consolas", monospace',
              fontSize: 16,
              height: "100%",
            }}
          />
        </div>

        <div className='review' onClick={reviewcode} >Review</div>
        </div>
        <div className='right'>
        <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  )
}


export default App
