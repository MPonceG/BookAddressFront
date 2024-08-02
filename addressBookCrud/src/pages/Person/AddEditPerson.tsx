import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPerson } from "../../interfaces/IPerson";
import { appsettings } from "../../settings/appsettings";
// import { Form } from "antd";
// 
import { AddEditPerson } from "../../components/Person/AddEditPerson/AddEditPerson";

const initialPerson = {
    id: undefined,
    firstName: "",
    lastName: "",
    sex: "", 
    dateOfBirth: undefined,
    email: "",
    address: "",
    phone: "",
}

export function PageAddEditPerson() {
    const navigate = useNavigate();
    // const [form] = Form.useForm();
    const { id } = useParams<{id:string}>();
    const [person, setPerson] = useState<IPerson>(initialPerson)

    const getPerson = async() => {
        const response = await fetch(`${appsettings.apiUrl}People/${id}`)
        if(response.ok) {
            const data = await response.json();
            setPerson(data);
            // form.setFieldsValue({
            //   ...data,
            //   dateOfBirth: data.dateOfBirth ? moment(data.dateOfBirth) : null
            // });
            //form.setFieldsValue(data); 
        }                
    }

    useEffect(() => { 
      if(id)        
          getPerson()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const createPerson = async (values: IPerson) => {
      const response = await fetch(`${appsettings.apiUrl}People`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })

      if(response.ok)
        navigate("/");
      else
          alert('error')
    }

    const updatePerson = async (values: IPerson) => {
      const response = await fetch(`${appsettings.apiUrl}People/${values.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if(response.ok)
        navigate("/");
      else
          alert('error')
      console.log('Form values:', values);
    }

    const onFinish = async (values: IPerson) => {
        values.id = person.id;
        if(values.id) {
          updatePerson(values);
        } else {
          createPerson(values);
        }
      };

      const goBack = () => {
        navigate("/");
      }

      return (
        <AddEditPerson people={person} onFinish={onFinish} goBack={goBack} />
      );
}