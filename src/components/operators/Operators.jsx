import { Register } from '../loginRegister/Register';
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";

import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase_config/firebaseConfig";
import { useState, useEffect } from 'react';

import { CustomSpinner } from "../../utils/customSpinner";
import { WindowConfirm } from '../../utils/WindowConfirm';
import { RegisterAdmin } from '../loginRegister/RegisterAdmin';

export function Operators() {

  const [operators, setOperators] = useState([])
  const dbOperators = collection(db, "operators")

  const getOperators = async () => {
    onSnapshot(dbOperators, (querySnapshot) => {
      let data = []
      querySnapshot.docs.forEach((doc) => {
        let op = { ...doc.data(), id: doc.id }
        data.push(op)
      })
      setOperators(data)
    })
  }
  
  useEffect(() => {
    getOperators()
  }, [])

  const handleDelete = async (id) => {
    const toDelete = doc(db, 'operators', id)
    await deleteDoc(toDelete)
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <h2 className="mt-10 text-start text-2xl font-bold leading-9 tracking-tight text-gray-900">Tabla de Operarios:</h2>
              <div className='flex items-center gap-4'>
              <Register textButton={"Registrar Nuevo Operario"}/>
              <RegisterAdmin />
              </div>
              <table className="min-w-full text-left text-sm font-light">
                <thead
                  className="border-b bg-white font-medium light:border-neutral-500 light:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">Nombre</th>
                    <th scope="col" className="px-6 py-4">Correo</th>
                    <th scope="col" className="px-6 py-4">Cédula</th>
                    <th scope="col" className="px-6 py-4">Rol</th>
                    <th scope="col" className="text-center px-6 py-4"><GrEdit className="inline-block"/></th>
                    <th scope="col" className="text-center px-6 py-4"><RiDeleteBin6Line className="inline-block"/></th>
                  </tr>
                </thead>
                <tbody>
                  {operators ? operators.map(op => (
                    <tr key={op.id} className="border-b bg-neutral-100  light:border-neutral-500 light:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-2 font-medium">{op.name}</td>
                      <td className="whitespace-nowrap px-6 py-2">{op.email}</td>
                      <td className="whitespace-nowrap px-6 py-2">{op.dni}</td>
                      <td className="whitespace-nowrap px-6 py-2">{op.role}</td>
                      <td className="whitespace-nowrap px-6 py-2"><Register textButton={"Editar"} buttonColor="light" update={op}/></td>
                      <td className="whitespace-nowrap px-6 py-2"><WindowConfirm text={"Borrar"} buttonColor="red" function={handleDelete} operator={op} /></td>
                    </tr>
                    
                  )) : <CustomSpinner />}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}