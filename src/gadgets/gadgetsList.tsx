import { FC, ReactElement, useRef, useEffect, useState } from 'react';
import { CreateGadgetDto, Client, GadgetsLookupDto } from '../api/api';

const apiClient = new Client('https://localhost:7013');

async function createGadget(gadget: CreateGadgetDto) {
    await apiClient.gadgetsPOST(gadget);
    console.log("Gadget is created");
}

const GadgetList : FC<{}> = () : ReactElement => {
    let textInput = useRef(null);
    const [gadgets, setGadgets] = useState<GadgetsLookupDto | undefined>(undefined);
    // useState<GadgetsLookupDto[] | undefined>(undefined);
    async function getGadgets() {
        const gadgetListVm = await apiClient.gadgetsGET();
        setGadgets(gadgetListVm);
    }
    useEffect(() => {
        getGadgets();
    }, [])

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            const gadget: CreateGadgetDto = {
                title: event.currentTarget.value
            };
            createGadget(gadget);
            event.currentTarget.value = '';
            getGadgets();
        }
    }
    return (
        <div>
            Notes
            <div>
                {/* <FormControl ref={textInput} onKeyPress={handleKeyPress} /> */}
            </div>
            <section>
                {gadgets?.map((gadget) => (
                    <div>{gadget.title}</div>
                ))}
            </section>
        </div>
    );

} 

export default GadgetList;