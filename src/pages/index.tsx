import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PromissoryNote from '../components/PromissoryNote';

export default function Home() {
  const [formData, setFormData] = useState({
    valor: '',
    vencimento: '',
    emissao: '',
    devedor: '',
    cpfDevedor: '',
    credor: '',
    cpfCredor: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">Gerador de Promissória</h1>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Valor (R$)</label>
                    <input
                      type="number"
                      name="valor"
                      value={formData.valor}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Data de Vencimento</label>
                    <input
                      type="date"
                      name="vencimento"
                      value={formData.vencimento}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Data de Emissão</label>
                    <input
                      type="date"
                      name="emissao"
                      value={formData.emissao}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome do Devedor</label>
                    <input
                      type="text"
                      name="devedor"
                      value={formData.devedor}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">CPF do Devedor</label>
                    <input
                      type="text"
                      name="cpfDevedor"
                      value={formData.cpfDevedor}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome do Credor</label>
                    <input
                      type="text"
                      name="credor"
                      value={formData.credor}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">CPF do Credor</label>
                    <input
                      type="text"
                      name="cpfCredor"
                      value={formData.cpfCredor}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {Object.values(formData).every(value => value) && (
          <PDFViewer style={{ width: '100%', height: '500px' }}>
            <PromissoryNote data={formData} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
} 