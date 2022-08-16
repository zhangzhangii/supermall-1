import React from 'react';
import logo from './logo.svg';
import  styles from './App.module.css';
import {Layout, Typography,Input} from 'antd'


function App() {
  return (
    <div className={styles.App}>
        <div className={styles['app-header']}>
          <Layout.Header className={styles['min-header']}>
            <img className={styles['App-logo']} src={logo} alt="" />
            <Typography.Title className={styles.title} level={3}>React 旅游网</Typography.Title>
            <Input.Search className={styles['search-input']} placeholder='请输入旅游目的、主题'></Input.Search>
          </Layout.Header>
        </div>
    </div>
  );
}




export default App;
