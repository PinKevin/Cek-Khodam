import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [errorNoName, setErrorNoName] = useState('');
  let navigate = useNavigate();

  const handleNameInputChange = (event) => {
    setName(event.target.value);

    if (errorNoName) {
      setErrorNoName('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setErrorNoName('Nama harus diisi');
      return;
    }

    const data = { name: name.trim() };
    navigate(`/result`, { state: data });
  };

  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <div className="max-w-80 md:max-w-2xl w-full md:w-auto p-10 text-center rounded-lg bg-white opacity-90 border">
            <h1 className="text-4xl font-bold">Cek Khodam</h1>
            <p className="mt-3 md-1 text-lg text-justify">
              Ketik nama Anda untuk mengungkap khodam tersembunyi dalam diri Anda
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameInputChange}
                className="text-center px-2 py-2 w-full mt-5 border-2 rounded-md border-gray-500 focus:outline-none focus:border-blue-600"
              />
              {errorNoName && (
                <p className="mt-1 py-1 rounded-md bg-red-200 text-red-800 font-bold">
                  Nama harus diisi
                </p>
              )}

              <button
                type="submit"
                className="mt-5 py-2 w-full md:w-40 rounded-md border-2 border-blue-500 bg-blue-500 hover:bg-blue-600 hover:border-blue-600 active:bg-blue-700 active:border-blue-700 text-white"
              >
                Cek khodam saya
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
