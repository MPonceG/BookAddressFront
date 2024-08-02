import { IPerson } from "../../../interfaces/IPerson";
import { Button, DatePicker, Form, Input, Select } from "antd";
import './AddEditPerson.css';
import moment from "moment";

const initialPerson = {
    id: 0,
    firstName: "",
    lastName: "",
    sex: "", 
    dateOfBirth: undefined,
    email: "",
    address: "",
    phone: "",
}

const { Option } = Select;

interface AddEditPersonProps {
  people: IPerson;
  onFinish: (values: IPerson) => void;
  goBack: () => void;
}

export function AddEditPerson({ people, onFinish, goBack }: AddEditPersonProps) {
    // const titleForm = people.id != 0 ? 'Edit Contact' : 'New Contact';
    // const navigate = useNavigate();
    const [form] = Form.useForm();
    form.setFieldsValue({
      ...people,
      dateOfBirth: people.dateOfBirth ? moment(people.dateOfBirth) : null
    });

      return (  
        <div className="edit-person-form-container">        
          <Form
          form={form}
          name="editPerson"
          initialValues={{ initialPerson }}
          onFinish={onFinish}
          className="edit-person-form"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your fist name!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: 'Please input your last name!' },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Sex"
            name="sex"
            rules={[{ required: true, message: 'Please select your sex!' }]}
          >
            <Select>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
    
          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[{ required: true, message: 'Please input your date of birth!' }]}
            className="form-item"
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
    
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { type: 'email', message: 'The input is not valid E-mail!' },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Address"
            name="address"
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone!' },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="primary" htmlType="button" onClick={goBack}>
              Back
            </Button>
          </Form.Item>
        </Form>
        </div>
        
      );
}