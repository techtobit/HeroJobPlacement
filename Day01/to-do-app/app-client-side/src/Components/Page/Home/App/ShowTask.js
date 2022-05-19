import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ShowTask = ({ task }) => {
  const { _id, todoName, comment } = task;

  const handleDelete = id => {
    const url = `http://localhost:5000/tasks/${id}`
    const process = window.confirm('Are You sure? Want to Delete?')
    if (process) {
      axios.delete(url)
        .then(response => console.log(response))
      toast('Successfully Delete')
      window.location.reload();
    }
    else {
      toast.error('Unsuccessful')
    }

  }
  return (
    <div >
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title font-bold">{todoName}</h2>
          <p>{comment}</p>
          <div class="card-actions justify-end">
            <Link to='/home' class="btn btn-primary ">Add New</Link>
            <button class="btn  btn-warning ">Update</button>
            <button onClick={() => handleDelete(_id)} class="btn  btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTask;