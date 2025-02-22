import React, { useState } from 'react';
import { Calculator, Plus, FileText, Database, Settings, User, X } from 'lucide-react';
import Modal from './components/Modal';
import Sidebar from './components/Sidebar';
import DatabaseView from './components/DatabaseView';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [currentView, setCurrentView] = useState<'budget' | 'database'>('budget');

  return (
    <div className="flex h-screen bg-[#111]">
      <Sidebar 
        onNewClick={() => setIsModalOpen(true)} 
        onDatabaseClick={() => setCurrentView('database')}
        onBudgetClick={() => setCurrentView('budget')}
      />
      
      {currentView === 'database' ? (
        <div className="flex-1">
          <DatabaseView />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <p>Seleccione una opción del menú o cree un nuevo presupuesto</p>
        </div>
      )}

      {isModalOpen && (
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
}

export default App;