import { InputField } from './components/InputField/InputField';
import { DataTable } from './components/DataTable/DataTable';

function App() {
  return (
    <div>
      <InputField label="Username" placeholder="Enter username" />
      <DataTable
        data={[
          { id: 1, name: 'John', age: 25 },
          { id: 2, name: 'Jane', age: 30 },
        ]}
        columns={[
          { key: 'name', header: 'Name' },
          { key: 'age', header: 'Age' },
        ]}
      />
    </div>
  );
}

export default App;