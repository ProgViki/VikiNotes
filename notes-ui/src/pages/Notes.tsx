// import React from 'react'
import {Button, Form, Select, Input} from "antd"
// import { PlusOutlined } from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea"
import { PlusOutlined } from '@ant-design/icons';

const Notes = () => {
  return (
    <div className="flex gap-4 space-y-[24px] px-[24px] py-[32px] bg-gray-100">
      <section className="flex items-center justify-between">
        {/* <Heading heading="New Subscription" /> */}
        
      </section>

      <section className="w-[30%] space-y-[16px] border border-gray-300 rounded-md p-[24px]">
        <p className="SubTitle font-bold text-xl text-center">NOTES-APP</p>
        <Form layout="vertical" className="">
          <div className="w-[200px] space-x-[16px]">
            <Form.Item label="Title" className="pl-4">
              <Input 
              placeholder="Title"
              />
            </Form.Item>
            <Form.Item label="Notes type" className="">
              <Select />
            </Form.Item>
            <Form.Item label="Write Notes" className="">
              <TextArea 
              className=" h-[200px]"
              placeholder="Content"
              />
            </Form.Item>
          </div>

          <Button
          className="flex items-center bg-blue-500 text-white mx-12 pl-[14px] py-[8px] rounded-[8px] gap-[8px]">
          <span>Add Note</span>
          <PlusOutlined />  
        </Button>
        </Form>
      </section>

      <section className="w-[70%] space-y-[16px] border border-gray-300 rounded-md p-[24px]">
        <div>
          <p>These are my notes</p>
        </div>
      </section>
      
    </div>
  )
}

export default Notes
