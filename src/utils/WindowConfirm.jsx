
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function WindowConfirm(props) {
    const [openModal, setOpenModal] = useState(false);

    const handleFuncions = () => {
        props.function(props.operator.id)
        setOpenModal(false);
    }
    return (
        <>
            <Button onClick={() => setOpenModal(true)} color={props.buttonColor}>{props.text}</Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Confirmar eliminación del ergistro del operador {props.operator.name} con C.c.: {props.operator.dni}.
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleFuncions}>
                                {"Si, ELIMINAR"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, Cancelar.
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
