import Form from '@/Components/Form/Form'
import MainLayout from '@/Layouts/MainLayout'
import React from 'react'

export default function contact() {
  return (
    <MainLayout>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <div style={{width:'30rem',display:'flex',alignItems:'center',flexDirection:'column',gap:'1rem'}}>
    <h1 style={{color:'#1987a4'}}>Contact Us</h1>
        <Form/>
        </div>
    </div>
    </MainLayout>
  )
}
