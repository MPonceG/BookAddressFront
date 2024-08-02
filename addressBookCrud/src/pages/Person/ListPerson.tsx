import { useState, useEffect } from 'react';
import { Button} from 'antd';
import { IPerson } from '../../interfaces/IPerson';
import { appsettings } from "../../settings/appsettings";
import { useNavigate } from 'react-router-dom';
import { ListPerson } from '../../components/Person/ListPerson/ListPerson';

export function PageListPerson() {
    const navigate = useNavigate();
    const [people, setPeople] = useState<IPerson[]>([]);

    const getPeople = async () => {
        const response = await fetch(`${appsettings.apiUrl}People/`);
        if (response.ok) {
        const data = await response.json();
        setPeople(data);
        }
    };

    useEffect(() => {
        getPeople();
    }, []);

    const deletePerson = async (id: number) => {
        const response = await fetch(`${appsettings.apiUrl}People/${id}`, {
        method: 'DELETE',
        });
        if (response.ok) {
        setPeople(people.filter(person => person.id !== id));
        }
    };

    return (
        <div>
        <h1>Address Book</h1>
        <Button type="primary" onClick={() => navigate('/NewPerson')}>
            Create Person
        </Button>
        <ListPerson people={people} deletePerson={deletePerson} />
        </div>
    );
}
