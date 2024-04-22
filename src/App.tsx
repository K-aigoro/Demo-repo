import { FC } from 'react';

interface AppProps {
  title: string;
  age: number;
}

// function App({ title }: { title: string }) {

//   return (
//     <>
//       <div>{title}</div>
//     </>
//   )
// }

const App: FC<AppProps> = ({ title,age }) => {
  return <>
    <h1>{title}</h1>
    <p>{age}</p>
    
    </>;
}
export default App
