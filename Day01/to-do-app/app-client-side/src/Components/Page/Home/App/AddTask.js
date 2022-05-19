import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddTask = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const onSubmit = data => {
    if (data) {
      const url = `http://localhost:5000/tasks`;
      axios.post(url, data)
        .then(response => console.log(response))
      toast('New Task Add')
      navigate('app/list')



    }
  }
  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full grid grid-flow-row justify-center'>
        <label htmlFor="todoName" className=''>
          <input type="text" placeholder="Todo" {...register("todoName", { required: true })} class="input input-bordered w-full max-w-xs my-2" />
        </label>
        <br />
        <label htmlFor="comment" className=''>
          <textarea type="textarea" placeholder="comment" {...register("comment")} class="input input-bordered w-full max-w-xs my-2" />
        </label>
        <br />
        <input type="submit" value='Save' class="input btn bg-primary w-full max-w-xs my-2" />
      </form>
    </div>
  );
};

export default AddTask;