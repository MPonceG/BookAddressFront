import { Button, Popconfirm, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { IPerson } from "../../../interfaces/IPerson";
import { EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import './ListPerson.css';

interface ListPersonProps {
    people: IPerson[];
    deletePerson: (id: number) => void;
  }

export function ListPerson({ people, deletePerson }: ListPersonProps) {

    const columns = [
        {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        },
        {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        },
        {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        },
        {
        title: 'Actions',
        key: 'actions',
        render: (record:IPerson) => (
            <Space size="middle">
            <Link to={`/EditPerson/${record.id}`}><EditOutlined style={{ fontSize: '20px' }} /></Link>
            <Popconfirm
                title="Are you sure you want to delete this person?"
                onConfirm={() => deletePerson(record.id?? 0)}
                okText="Yes"
                cancelText="No"
            >
                <Button type="link"><DeleteOutlined style={{ fontSize: '20px' }} /></Button>
            </Popconfirm>
            </Space>
        ),
        },
    ];

    return(
        <div className="address-book-container">
            <Table columns={columns} dataSource={people} rowKey="id" />
        </div>
    );
}