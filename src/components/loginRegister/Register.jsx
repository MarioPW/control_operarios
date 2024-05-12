
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase_config/firebaseConfig";

import { useAuth } from "../../context/authContext";


export function Register(props) {
  let initialValues = {
    name: "",
    email: "",
    password: "",
    dni: "",
    role: "",
  }
  
  if (props.update) {
    initialValues = props.update
  }
  const [openModal, setOpenModal] = useState(false);
  const [operator, setOperator] = useState(initialValues);
  const [errorState, setError] = useState();
  const emailInputRef = useRef(null);
  const { registerAdmin } = useAuth()

  const handleChange = ({ target: { name, value } }) => {
    setOperator({ ...operator, [name]: value })
  }

  const handleUpdate = async (updates) => {
    const toUpdate = doc(db, "operators", updates.id)
    await updateDoc(toUpdate, {...updates})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (operator.role == "admin") {
      try {
        await registerAdmin(operator.email, operator.dni)
        alert(`Usuario ${operator.name} registrado como Gerente`)
        setOperator(initialValues)
        setOpenModal(false)
      } catch (error) {
        setError(error.message)
        alert(errorState)
      }
    } else if (props.update) {
      handleUpdate(operator)
      setOpenModal(false)
    }
    
   else {
      try {
        await addDoc(collection(db, "operators"), operator);
        console.log("Usuario Registrado con el rol: ", operator.role);
        setOperator(initialValues)
        setOpenModal(false)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  }

  return (
    <>
      <Button className="my-2 " color={props.buttonColor} onClick={() => setOpenModal(true)}>{props.textButton}</Button>
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registro de Operarios</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Nombre" />
              </div>
              <TextInput onChange={handleChange} id="name" name="name" ref={emailInputRef} placeholder="Nombre del Operario" required value={operator.name}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="dni" value="Cédula" />
              </div>
              <TextInput onChange={handleChange} id="dni" name="dni" required placeholder="Número de Cédula" value={operator.dni}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Correo" />
              </div>
              <TextInput onChange={handleChange} id="email" name="email"  placeholder="Correo del Operario" required value={operator.email}/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="role" value="Rol" />
              </div>
              <TextInput onChange={handleChange} id="role" name="role"  placeholder="Rol del Operario" required value={operator.role}/>
            </div>
            <Button type="submit" color={props.buttonColor}>{props.textButton}</Button>
            
          </form>

        </Modal.Body>
      </Modal>
    </>
  );
}
