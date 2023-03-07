import type { FormtestParams } from '@/interface/formtest/formtest';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { LocaleFormatter, useLocale } from '@/locales';

import './index.less';

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox
  } from 'antd';
  const initialValues: FormtestParams = {
      input: ''
  };
  const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Formtest: React.FC = () => {
  const onFinished = async (form: FormtestParams) => {
    console.log('form',form)
    const show = JSON.stringify(form)
    alert(show)
  };

  return (
    <>
    <div className="formtest"></div>
    <Form<FormtestParams> onFinish={onFinished} className="formtest" initialValues={initialValues}></Form>
    <h1 style={{fontWeight: 200}}>TEST</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>

        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>

        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>

        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
       
        <Form.Item label="Button">
          <Button htmlType="submit" className="formtest_button">
          <LocaleFormatter id="gloabal.tips.formtest" />
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <Formtest />;