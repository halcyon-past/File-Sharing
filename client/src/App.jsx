import {useRef,useState,useEffect} from 'react'
import {uploadFile} from './services/api'
import './App.css'
import logo from './assets/logo.png';

function App() {
  const [file,setFile] = useState(null);
  const [result, setResult] = useState('');

  const fileInputRef = useRef(null);

  useEffect(() => {
    const getImage = async () => {
      if (file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center ">
      <div className="card w-[25rem] bg-[#000000cc] flex flex-col items-center">
        <img src={logo} alt="logo" className="h-20 w-20 m-2"/>
        <h1 className = "text-center font-mono mt-7 font-semibold text-2xl">File Sharing by - Aritro</h1>
        <h1 className = "text-center font-mono mt-2 max-w-sm">Connect to local Network, upload the file and share the generated file link</h1>
        <div className="flex justify-center items-center flex-col m-9 max-w-[22rem]">
        <button type="button" 
        className="h-10 w-56 m-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={()=>onUploadClick()} 
        >
          Upload
        </button>
        <input type="file" ref={fileInputRef} className="hidden" onChange={(e)=>{setFile(e.target.files[0])}}/>
        <a href={result} className="mt-3 text-blue-400 overflow max-w-screen text-sm">{result}</a>
        </div>
      </div>   
    </div>

  )
}

export default App
