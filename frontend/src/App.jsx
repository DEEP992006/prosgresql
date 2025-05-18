import { useMutation } from '@tanstack/react-query';

import { todoapi } from './api/todo';


export default function App() {
  const mutation = useMutation({
    mutationFn: todoapi,
  });

  return (
    <div>
      <button onClick={() => mutation.mutate()}>Login</button>
      {mutation.data && mutation.data.map((item,index) =><div key={index}> 
        <p>{item.name}</p>
        <p>{item.description}</p>
        </div>)
      }
       {mutation.isError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {mutation.error.message}
        </div>
      )}
    </div>
  );
}