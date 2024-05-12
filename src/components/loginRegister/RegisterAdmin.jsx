import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { useAuth } from "../../context/authContext";

export function RegisterAdmin() {

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorState, setError] = useState();
    const emailInputRef = useRef(null);
    const { registerAdmin } = useAuth()


    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
    }

    const handleRegisterAdmin = async (e) => {
        e.preventDefault()
        setError("")
        try {
            console.log(email + "   " + password)
            await registerAdmin(email, password)
            alert(`Usuario ${email} registrado como Gerente.`)
            setOpenModal(false)
        } catch (error) {
            setError(error.message)
            alert(errorState)
        }
    }

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Registrar Gerente</Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleRegisterAdmin} className="space-y-6">
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Registro de Gerentes</h3>
                            <p className="text-l font-ligth text-gray-900 dark:text-white">El personal registrado en esta sección podrá acceder, editar y/o borrar perfiles de los operarios.</p>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Correo" />
                                </div>
                                <TextInput
                                    id="email"
                                    placeholder="ejemplo@email.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                    ref={emailInputRef}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Contraseña" />
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    required placeholder="Mínimo seis caracteres" onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="w-full">
                                <Button type="submit">Registrar</Button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

