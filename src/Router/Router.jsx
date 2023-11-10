import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostalForm from '../components/PostalForm'
import LocationInfo from '../components/LocationInfo'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PostalForm />} />
            <Route path="/location" element={<LocationInfo />} />
        </Routes>
    )
}

export default Router