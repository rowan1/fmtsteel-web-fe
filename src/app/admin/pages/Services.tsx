import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { DeleteConfirmationModal } from '../components/DeleteConfirmationModal';
import { Table } from 'react-bootstrap';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IServicesBody } from '../../api/Interfaces';
import { fetchServices, removeServices, updateServices, saveServices } from '../../api/Api';
import { ServiceModal } from '../components/ServiceModal';
export const Services = () => {
  const [open, setOpen] = React.useState(false)
  const toggle = () => setOpen(!open);

  const [services, setServices] = useState<IServicesBody[]>([]);
  const [deletedId, setDeletedId] = useState<number>();
  const [editedService, setEditedSerive] = useState<IServicesBody>();

  useEffect(() => {
    getData()
  }, [""])

  const getData = () => {
    fetchServices().then((res) => {
      setServices(res.items);
    }).catch((error) => {
      console.log(error);
    })
    setDeletedId(undefined);
    setEditedSerive(undefined);
  }
  const removeService = () => {
    deletedId && removeServices(deletedId).then((res) => {
      console.log(res)
      getData();
    }).catch((e) => {
      console.log(e);
    })
  }
  const deleteResponse = (res: Boolean) => {
    if (res === true) {
      removeService()
    }
  }

  const onEdit = (service: IServicesBody) => {
    toggle();
    setEditedSerive(service);
  }
  const onAction = (e: boolean) => {
    setOpen(e);
    setEditedSerive(undefined);
  }
  const onSubmit = (newService: IServicesBody) => {

    let formData = new FormData();
    formData.append('title', newService.title || '');
    formData.append('description', newService.description || '');
    if (editedService && editedService.id)
      updateServices(formData, editedService.id).then((res) => { afterSubmition() }).catch((error) => { console.log(error); })
    else saveServices(formData).then((res) => { afterSubmition() }).catch((error) => { console.log(error); })


  }
  const afterSubmition = () => {
    setOpen(false);
    setEditedSerive(undefined);
    getData();
  }
  return (


    <div id="dashboard-services" >
      <div className="container">
        <h2>Services</h2>
        <>
          <Button onClick={toggle} className="btn btn-custom btn-lg" style={{
            fontFamily: 'Raleway',
            textTransform: 'uppercase',
            color: '#fff',
            backgroundColor: '#c95f44',
            backgroundImage: 'linear-gradient(to right, #db3630 0%, #c95f44 100%)',
            padding: '14px 34px',
            letterSpacing: '1px',
            margin: '10',
            fontSize: '15px',
            fontWeight: '500',
            borderRadius: '25px',
            transition: 'all 0.5s linear',
            border: '0',
            width: '250px'
          }}>Add Service</Button>
          <ServiceModal open={open} onAction={(e: boolean) => onAction(e)} service={editedService} onSubmit={onSubmit} />
        </>
        {/* <ServiceModal onAdd={onServiceAdded} service={editedService} onClose={flushData}/> */}
        <DeleteConfirmationModal deleteResponse={deleteResponse} label="Service" />
        <Table hover size="sm">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service: IServicesBody, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    {service.title}
                  </td>
                  <td>{service.description}</td>
                  <td>
                    <a data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" onClick={() => onEdit(service)}>
                      <FaEdit color="royalblue" />
                    </a>
                  </td>
                  <td>
                    <a data-toggle="modal" data-target="#confirm-delete" data-backdrop="static" data-keyboard="false" onClick={() => setDeletedId(service.id)}>
                      <FaTrashAlt color="coral" />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}